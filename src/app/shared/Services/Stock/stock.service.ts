import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { environment } from 'src/environments/environment.prod';
import { Stock } from '../../Models/Stock/stock.model';
import { Image } from '../../Models/Image/Image.model';


@Injectable({
  providedIn: 'root'
})
export class StockService {

  stock :Stock;
  rootUrl :string  = environment.rootApiUrl;
  
  constructor(private http: HttpClient) { }

  uploadImage(formData) {
    return ajax.post(`${this.rootUrl}/api/upload`, formData);
  }

  deleteImage(formData) {
    return this.http.post<any>(`${this.rootUrl}/api/deleteImage`, formData)
    .pipe(
      catchError(this.handleError)
    );
  }

  addStock(stock: Stock,Image:Image[]) {
    const body = {
      Description :stock.Description,
      Images:Image

    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + '/api/stock/add', body,{headers : reqHeader});
  }
  saveProduct(formData) {
    return this.http.post<any>(`${this.rootUrl}api/saveProduct`, formData)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }
}
