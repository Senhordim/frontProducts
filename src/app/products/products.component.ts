import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from './products.service';

interface ProductsJson {
    id: number
    code: number,
    description: string,
    unitPrice: number
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})


export class ProductsComponent implements OnInit, OnDestroy {

  // vars
  private jsonResponse: string;
  private products: Array<ProductsJson>;
  private subscription;

  constructor(private ProductsService: ProductsService) {}


  // on-init
  ngOnInit() {
      // save _subscription
      this.subscription = this.ProductsService.listOfProducts()
          .subscribe(
              (data) => {
                  console.log(data)
                  this.jsonResponse = JSON.stringify(data);
                  this.products = data;
              },
              (err) => console.log(err),
              () => console.log('hello service test complete')
      );
  }

  // on-destroy
  ngOnDestroy() {
    // unsubscribe
    this.subscription.unsubscribe();
  }


}
