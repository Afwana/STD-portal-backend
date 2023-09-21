// src/app/weather/weather.component.ts
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  weatherData: any = null;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          // this.getWeatherByCoordinates(lat, lon);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  // getWeatherByCoordinates(lat: number, lon: number) {
  //   this.weatherService.getWeatherByCoordinates(lat, lon).subscribe((data) => {
  //     this.weatherData = data;
  //   });
  // }
}
