import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

    apiKey: string = "";
    constructor() {
        const key = localStorage.getItem('apiKey');
        if(key)
        this.apiKey = key;
    }

    intercept (
        req: HttpRequest<any>,
        next: HttpHandler)
        : Observable<HttpEvent<any>>{
        req = req.clone({
            setHeaders: {},
            setParams:{
                appid: this.apiKey
            }
        });
        return next.handle(req);
        }
}