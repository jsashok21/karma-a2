import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AppComponent } from './app.component';
// import {UserService} from './app.service';
describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let userServiceStub = {
    isLoggedIn: true,
    user: { name: 'Test User'}
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ]/*,
      providers:    [ {provide: UserService, useValue: userServiceStub } ]*/
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/true/i,
      '<h1> should say something about "Angular"');
  });
});
