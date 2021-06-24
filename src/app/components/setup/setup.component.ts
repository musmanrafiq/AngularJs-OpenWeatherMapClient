import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  _searchQuery: string = "";

  set searchQuery(val: string){
    this._searchQuery = val;
  }

  onButtonClick(){
    let apiKey = this._searchQuery;
    if(apiKey){
      localStorage.setItem('apiKey', apiKey);
      this._router.navigate(['home'])
    }
  }
}
