import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { ICountry } from './country';
import { CountryService } from './country.service';

@Component({
    moduleId: module.id,
    selector: 'country-detail',
    templateUrl: 'country-detail.component.html'
})

export class CountryDetailComponent implements OnInit {
    pageTitle: string = 'Country Detail';
    country: ICountry;
    errorMessage: string;
    private sub: Subscription;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private countryService: CountryService) {
    }

        ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
                let countryCode = params['countryCode'];
                console.log(countryCode);
                this.getCountryById(countryCode);
        });
    }

      getCountryById(countryCode: string) {
        this.countryService.getCountryById(countryCode).subscribe(
            country => this.country = country,
            error => this.errorMessage = <any>error);
    }
    onBack(): void {
        this.router.navigate(['/country']);
    }

      ngOnDestroy() {
        this.sub.unsubscribe();
    }
}