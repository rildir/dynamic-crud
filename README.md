# Dynamic CRUD App

Bu proje, Angular ve Ng Zorro kullanılarak geliştirilmiş dinamik bir CRUD (Create, Read, Update, Delete) uygulamasıdır. Şu anda sadece ürünlerin listelenmesi (GET) özelliği aktif olup, ilerleyen aşamalarda POST, UPDATE ve DELETE işlemleri de eklenecektir.

## Özellikler

- **Dinamik Ürün Listesi:**  
  Ürünler, sayfalama ve filtreleme desteğiyle listelenir.
- **Ng Zorro UI:**  
  Modern ve kullanıcı dostu arayüz için Ng Zorro bileşenleri kullanılmıştır.
- **Dinamik HTTP Client ve Base Service:**  
  Tüm veri işlemleri, tekrar kullanılabilir ve genişletilebilir bir `BaseService` üzerinden yönetilir.  
  `HttpClientService` ile HTTP istekleri merkezi olarak yönetilir.
- **Interceptor:**  
  Tüm isteklerde otomatik olarak header ekleyen bir `AuthInterceptor` bulunur.

## Proje Yapısı

```
src/
  app/
    pages/
      products/         # Ürün listeleme ve yönetim bileşenleri
      layout/           # Uygulama genel düzeni
    services/
      base.service.ts   # Generic CRUD işlemleri için temel servis
      product.service.ts# Ürünlere özel servis (BaseService'ten türetilmiş)
      http-client.service.ts # HttpClient sarmalayıcı servis
    interceptors/
      auth.interceptor.ts # Tüm isteklerde header ekleyen interceptor
  environments/
    environment.ts      # API adresi ve ortam değişkenleri
```

## Kullanılan Teknolojiler

- Angular
- Ng Zorro (ng-zorro-antd)
- RxJS
- TypeScript

## Kurulum ve Çalıştırma

1. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

2. **Projeyi başlatın:**
   ```bash
   ng serve
   ```

3. **Uygulamayı açın:**
   ```
   http://localhost:4200
   ```

## Servis Mimarisi

- **BaseService:**  
  Tüm temel HTTP işlemleri (`get`, `post`, `put`, `delete`) burada tanımlanır.  
  Her kaynak için (ör: ürünler) özel servisler bu sınıftan türetilir.

- **HttpClientService:**  
  Angular'ın HttpClient'ini saran ve merkezi HTTP işlemleri sağlayan servis.

- **ProductService:**  
  Ürünlere özel işlemler için, `BaseService`'ten türetilmiş bir servis.

## Geliştirme Yol Haritası

- [x] Ürünleri listele (GET)
- [ ] Ürün ekle (POST)
- [ ] Ürün güncelle (UPDATE)
- [ ] Ürün sil (DELETE)
- [ ] Form validasyonları ve hata yönetimi
- [ ] Daha fazla dinamik bileşen ve örnek

---

**Not:**  
API olarak [dummyjson.com](https://dummyjson.com) kullanılmaktadır.  
Geliştirme ortamı için `src/environments/environment.ts` dosyasındaki `apiUrl` güncellenebilir.
