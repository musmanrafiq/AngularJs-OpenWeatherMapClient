import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Weather } from '../models/weather';
import { APIResponse } from '../models/apiResponse';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getWeather(
    search?: string
  ) : Observable<APIResponse<Weather>>{

    let params = new HttpParams().set('q', '');
    if(search){
      params = new HttpParams().set('q', search);
    }

    return this.http.get<APIResponse<Weather>>(`${env.BASE_URL}/weather`, {
      params : params,

    });
  }
}
