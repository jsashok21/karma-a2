import {Injectable} from '@angular/core';
@Injectable()
export class TwainQuoteService{
    getQuote():Promise<string>{
        //return Promise.resolve("Mark Twai Quote");
        return new Promise(resolve =>{
            return "Mark Twai Quote";
        })
    }
}
