import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryListComponent } from './country-list.component';
import { CountryDetailComponent } from './country-detail.component';

const routes: Routes = [
  { path: 'country', component: CountryListComponent },
    { path: 'country/:countryCode', component: CountryDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CountryRoutingModule { }
