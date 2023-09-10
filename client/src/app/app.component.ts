import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { IPagination } from './models/pagination';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'W&S-Store';
    products: IProduct[];

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get('https://localhost:7151/api/products?pageSize=50').subscribe((response: IPagination) => {
            this.products = response.data;
        }, error => {
            console.log(error);
        });
    }
}
