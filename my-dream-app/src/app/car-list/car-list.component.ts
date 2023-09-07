import { CarService } from '../shared/car/car.service';
import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../shared/giphy/giphy.service';
import {formatDate } from '@angular/common';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  cars: Array<any>;
  today = new Date();
  jstoday = '';
  count = 0;

  constructor(private carService: CarService, private giphyService: GiphyService, private primengConfig: PrimeNGConfig) {
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.carService.getAll().subscribe(data => {
      this.cars = data;
      /*for (const car of this.cars) {
        this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
      }*/
    });
  }

  getCount(){
    this.count++;
    if(this.count >= 4) this.count = 0;
    return this.count;
  }
}