import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ProductService } from '../../services/product.service';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { StockComponent } from '../../components/stock/stock.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
@Component({
  selector: 'app-products',
  imports: [
    NzTableModule,
    CommonModule,
    NzRateModule,
    FormsModule,
    NzDividerModule,
    NzTagModule,
    NzToolTipModule,
    StockComponent,
    FormsModule,
    NzCheckboxModule,
    NzPaginationModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  data: any[] = [];
  selectedProduct: any = null;

  loading: boolean = true;
  total = 0;
  pageSize = 10;
  pageIndex = 1;
  pageSizeOptions = [5, 10, 20, 50];

  Math = Math
  
  private productService = inject(ProductService);
  constructor() {}
  ngOnInit() {
    this.getProducts();
  }

  async getProducts() {
    this.loading = true;
    const params = {
      limit: this.pageSize,
      skip: (this.pageIndex - 1) * this.pageSize,
    };
    try {
      const response = await this.productService.get(params);
      this.data = (response.products ?? response.data ?? []).map((item: any) => ({
        ...item,
        checked: false
      }));
      this.total = response.total ?? 0;
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      this.loading = false;
      this.selectedProduct = null;
    }
  }

  updateSelection(item: any, checked: boolean = true) {
    if(this.selectedProduct == item) {
      item.checked = false;
      this.selectedProduct = null;
      return;
    }
    
    this.data.forEach(product => product.checked = false);
  
    item.checked = checked;
    this.selectedProduct = checked ? item : null;
  
    console.log('xx:', this.selectedProduct);
  }

  onPageIndexChange(page: number) {
    this.pageIndex = page;
    this.getProducts();
  }

  onPageSizeChange(size: number) {
    this.pageSize = size;
    this.pageIndex = 1;
    this.getProducts();
  }

  editProduct(product: any) {
    console.log('Edit product:', product);
  }

  deleteProduct(product: any) {
    console.log('Delete product:', product);
  }
}
