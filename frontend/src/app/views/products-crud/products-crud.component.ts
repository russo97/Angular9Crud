import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-products-crud',
  templateUrl: './products-crud.component.html',
  styleUrls: ['./products-crud.component.css']
})
export class ProductsCrudComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService
  ) {
    headerService.headerData = Object.assign({
      icon: 'storefront',
      routeUrl: '/products',
      title: 'Cadastro de produtos'
    });
  }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
  }

}
