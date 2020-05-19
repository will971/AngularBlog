import { Component } from '@angular/core';
import*as firebase from 'firebase'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularBlog';

  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyBOB4kaqhtFwmDyp2NeuIbDoujnEwyktYg",
      authDomain: "angularblog-a7d1e.firebaseapp.com",
      databaseURL: "https://angularblog-a7d1e.firebaseio.com",
      projectId: "angularblog-a7d1e",
      storageBucket: "angularblog-a7d1e.appspot.com",
      messagingSenderId: "211786756620",
      appId: "1:211786756620:web:230d32072f5637a8283429"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
