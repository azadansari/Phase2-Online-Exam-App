import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onlinetest',
  templateUrl: './onlinetest.component.html',
  styleUrls: ['./onlinetest.component.css']
})
export class OnlinetestComponent implements OnInit {
  public name : string="";
  constructor() { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
  }

}
