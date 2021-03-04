import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  message: string;

  constructor() {
  this.message = 'this is a sample of angular application';
   }

  ngOnInit(): void {
  }

}
