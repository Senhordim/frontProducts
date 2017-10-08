import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";


const routes: Routes = [
    //home
    {
        path: '',
        component: HomeComponent
    },
    //Products
    {
        path: 'products',
        component: ProductsComponent
    }
];

export const RoutingModule = RouterModule.forRoot(routes);
