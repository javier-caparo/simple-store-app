import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { Product } from '../models/product'; 
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductsService', () => {
  const apiUrl = 'http://localhost:3000/products';
  let service: ProductsService;
  let httpMock: HttpTestingController;

  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService ]
    });

    it('be able to retrieve posts from the API bia GET', () => {
      const dummyProducts: Product[] = [
        {
          "id": 1,
          "name": "Data Structures and Algorithms ",
          "description": "Book description",
          "isAvailable": true,
          "price": 500
        },
        {
          "id": 2,
          "name": "Premsons 608 Four Bearing Fidget Spinner",
          "description": "Perfect toy for fidgeters. Updated",
          "isAvailable": true,
          "price": 150
        },
        {
          "id": 3,
          "name": "Bahubali DVD",
          "description": "Raised in a remote tribal village, Shivudu grows up a carefree young man who relentlessly pursues his heart\"s desire.",
          "isAvailable": false,
          "price": 299
        }];
      service.getProducts().subscribe(products => {
          expect(products.length).toBe(3);
          expect(products).toEqual(dummyProducts);
      });
      const request = httpMock.expectOne(apiUrl);
      expect(request.request.method).toBe('GET');
      request.flush(dummyProducts);
      });
    
    
  });
});