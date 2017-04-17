import { Component, OnInit } from '@angular/core';
import { ICountry } from './country';
import { CountryService } from './country.service';

@Component({
    moduleId: module.id,
    selector: 'countrylist',
    templateUrl: 'country-list.component.html'
})

export class CountryListComponent implements OnInit {
   private countrys: ICountry[] = []; 
   private pageTitle: string = 'Country List';
   private errorMessage: string;
   constructor(private countryService: CountryService) { }

    ngOnInit() { 
        try{
         this.countryService.getCountrys().subscribe
         ((res) => {this.countrys = res
                  });
        }
        catch(ex){
            console.log(ex);

        }    
}
}