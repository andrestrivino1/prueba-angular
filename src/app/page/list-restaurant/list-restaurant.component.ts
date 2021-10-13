import { Component, OnInit, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {

  title = 'angular-maps';
  @ViewChild("placesRef") placesRef : GooglePlaceDirective | undefined;
  options = {
    types : [],
    componentRestrictions: { country: 'CO' }
  }

  title_add: any;
  latitude: any ;
  longitude: any;
  zoom: any;
  
  ngOnInit() {
    this.setCurrentLocation();
  }
  
  public handleAddressChange(address: Address) {
    // Do some stuff
    console.log(address);
    console.log('Latitud : ' + address.geometry.location.lat());
    console.log('Longitud : ' + address.geometry.location.lng());

    this.latitude = address.geometry.location.lat();
    this.longitude = address.geometry.location.lng();
    
  }
  public setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      })
    }
  }
}
