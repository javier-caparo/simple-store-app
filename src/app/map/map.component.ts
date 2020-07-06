import { Component, AfterViewInit} from '@angular/core';
import { environment } from '../../environments/environment.prod';

import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit{

  map : Mapboxgl.Map
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.map = new Mapboxgl.Map({
        accessToken : environment.mapboxkey,
        container: 'map-mapbox', // container id
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-76.99, -12.12], // starting position
        zoom: 12 // starting zoom
    });
    
    // Add zoom and rotation controls to the map.
    this.map.addControl(new Mapboxgl.NavigationControl());
  }

  

}
