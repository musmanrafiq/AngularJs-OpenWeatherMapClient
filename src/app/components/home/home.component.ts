import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { APIResponse } from 'src/app/models/apiResponse';
import { Weather } from 'src/app/models/weather';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public wath: Array<Weather>;

  constructor(private httpService: HttpService,
    private activatedRoute: ActivatedRoute) {
     }
 
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if(params['search']){
        this.searchWeather(params['search']);
      }
      else {
        this.searchWeather('Islamabad');
      }
    })
  }
  searchWeather(search?: string): void {
    this.loading = true;
    this.httpService.getWeather(search)
    .subscribe((response: APIResponse<Weather>) => {
      this.wath = response.weather;
      this.loading = false;
    });
  }

  private _userName: string = "Pakistan";
  loading: boolean = false;

  get userName(): string {
    return this._userName;
  }

  set userName(val: string){
    this._userName = val;
  }

  onButtonClick(){
    this.searchWeather(this.userName);
  }
}
