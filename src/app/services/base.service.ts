import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

export abstract class BaseService<T = any> {
  constructor(
    protected http: HttpClient,
    protected endpoint: string
  ) {}

  async get(params?: any): Promise<T> {
    const url = `${environment.apiUrl}/${this.endpoint}`;
    return await firstValueFrom(this.http.get<T>(url, { params }));
  }

  async post(body: any): Promise<T> {
    const url = `${environment.apiUrl}/${this.endpoint}`;
    return await firstValueFrom(this.http.post<T>(url, body));
  }

  async put(id: number | string, body: any): Promise<T> {
    const url = `${environment.apiUrl}/${this.endpoint}/${id}`;
    return await firstValueFrom(this.http.put<T>(url, body));
  }

  async delete(id: number | string): Promise<T> {
    const url = `${environment.apiUrl}/${this.endpoint}/${id}`;
    return await firstValueFrom(this.http.delete<T>(url));
  }
}