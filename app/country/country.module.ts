import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryRoutingModule } from './country.routing';
import { CountryService } from './country.service';
import { CountryListComponent } from './country-list.component';
import { CountryDetailComponent } from './country-detail.component';

@NgModule({
    imports: [CommonModule, CountryRoutingModule ],
    exports: [],
    declarations: [CountryListComponent, CountryDetailComponent],
    providers: [CountryService],
})
export class CountryModule { }
