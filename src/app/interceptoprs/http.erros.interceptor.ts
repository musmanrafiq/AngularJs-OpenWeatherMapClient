import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError as observableThrowError } from "rxjs";
import { catchError} from 'rxjs/operators';
import { ToastrService } from "ngx-toastr";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(private toastrService: ToastrService){}

    intercept(
        req:HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((err) => {
                debugger;
                console.log(err);
                this.toastrService.error('Error',err.message);
                return observableThrowError(err);
            })
        );
    }
}