import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  version: string;
  developer: string;
  developmentDate: string;

  constructor() {
    this.version = '1.0.0';
    this.developer = 'Your Name';
    this.developmentDate = 'July 2023';
  }

  ngOnInit() {
  }

}
