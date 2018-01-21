import { async, fakeAsync, ComponentFixture,TestBed,tick } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AppComponent } from './app.component';
import {UserService} from './app.service';
import {TwainQuoteService} from './twain-quote.service';
describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let userService :UserService;
  let componentUserService : UserService;
  let userServiceStub : {
    isLoogedIn: String,
    user: { name: String}
  };
  let el:HTMLElement;
  let quoteService : TwainQuoteService;
  let spy : jasmine.Spy;
  beforeEach(async(() => {
    let userServiceStub = {
      isLoogedIn: "Test",
      user: { name: 'Test User'}
    };
    TestBed.configureTestingModule({
      declarations: [ AppComponent],
      providers:    [ {provide: UserService, useValue: userServiceStub },TwainQuoteService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;    
    userService = fixture.debugElement.injector.get(UserService);    
    componentUserService = userService;
    userService = TestBed.get(UserService);
    
    quoteService = fixture.debugElement.injector.get(TwainQuoteService);
    spy = spyOn(quoteService,'getQuote').and.returnValue(Promise.resolve("Test Quote"));

    de = fixture.debugElement.query(By.css('.sub-title'));
    el = de.nativeElement;
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should show the page title',()=>{
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css(".title"));
    el = de.nativeElement;
    expect(el.innerText).toContain(comp.title);
  })

  it('should say Hello Jane', () => {
    userService.user.name = "Jane";
    fixture.detectChanges();
    expect(el.textContent).toContain("Jane");
  });


  it('should show quote after - async()',async(()=>{
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('p'));
      el = de.nativeElement;
      expect(el.innerText).toContain("Test Quote");
    })
  }))
  it('should spy on quote service - fakeSync',fakeAsync(()=>{
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('p'));
    el = de.nativeElement;
    expect(el.innerText).toContain("Test Quote");
  }));


});
