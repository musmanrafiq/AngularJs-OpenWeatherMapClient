import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  search: string = "kk";

  onButtonClick(){
    let a = this.search;
    debugger;
  }
}
