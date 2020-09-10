import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  productId: string

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
  }

  deletarProduto(): void {
    this.productService.delete(this.productId).subscribe(() => {
      this.router.navigate(['/products']);

      this.productService.showMessage('Produto excluído com sucesso');
    });
  }

  modificarInformacoes(): void {
    this.router.navigate([`/products/update/${this.productId}`]);
  }

  cancel(): void {
    this.router.navigate(['/products']);

    this.productService.showMessage('Mantido sem alterações');
  }

}
