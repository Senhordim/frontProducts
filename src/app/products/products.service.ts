import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx'


@Injectable()
export class ProductsService {

  constructor(private http: Http) {}

  listOfProducts(){
    return this.http.get('http://localhost:8080/api/products')
          .map((res:Response) => res.json());
   }


}
