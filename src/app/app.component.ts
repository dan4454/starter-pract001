import { Component } from '@angular/core';
// import * as retry from "retry-axios"
import retry from "axios-retry";
import axios from "axios";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pract001';


  constructor() {
    // retry.attach();
    retry(axios, {retries:3})
  }
}

