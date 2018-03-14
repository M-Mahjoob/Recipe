// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   loadedFeature = 'recipe';
//
//   onNavigate(feature: string) {
//     this.loadedFeature = feature;
//   }
// }



import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  loadedFeature = 'recipe';
ngOnInit() {
firebase.initializeApp({
  apiKey: 'AIzaSyAcjQuBWPJAfjJ00XSUaXwq085YVbFDlDc',
  authDomain: 'recipeproject-57021.firebaseapp.com',
});
}

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}



