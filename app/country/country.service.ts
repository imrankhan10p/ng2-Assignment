import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { ICountry } from './country';

@Injectable()
export class CountryService {
    private countryUrl = 'http://api.geonames.org/countryInfoJSON?username=thisimran';

    constructor(private http: Http) { }

    getCountrys(): Observable<ICountry[]> {
        debugger;
        return this.http.get(this.countryUrl)
            .map((response: Response) => <ICountry[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getCountryById(countryCode: string): Observable<ICountry> { 
        return this.getCountrys()
            .map((country: ICountry[]) => country.geonames.find(c => c.countryCode === countryCode));
    }

    private handleError(error: Response) {

        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}