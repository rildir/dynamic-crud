import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService<any> {
  constructor(http: HttpClient) {
    super(http, 'products');
  }
}