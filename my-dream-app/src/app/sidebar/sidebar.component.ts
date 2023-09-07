import { Component, OnInit } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  selectedCountry: any;
  countries: any[];
  filteredCountries: any[];
  selectedCountries: any[];
  selectedCountryAdvanced: any[];
  filteredBrands: any[];
  groupedCities: SelectItemGroup[];
  filteredGroups: any[];

  constructor() {
   
  }

  ngOnInit() {
    this.countries = [
            {"name": "Hungary", "code": "HU"}, 
            {"name": "Iceland", "code": "IS"}, 
            {"name": "India", "code": "IN"}, 
            {"name": "Indonesia", "code": "ID"}, 
            {"name": "Iran, Islamic Republic Of", "code": "IR"}, 
            {"name": "Iraq", "code": "IQ"}, 
            {"name": "Ireland", "code": "IE"}, 
            {"name": "Isle of Man", "code": "IM"}, 
            {"name": "Israel", "code": "IL"}, 
            {"name": "Italy", "code": "IT"}, 
            {"name": "Jamaica", "code": "JM"}, 
            {"name": "Japan", "code": "JP"}
    ]
  }

  filterCountry(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.countries.length; i++) {
        let country = this.countries[i];
        if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(country);
        }
    }

    this.filteredCountries = filtered;
}

}
