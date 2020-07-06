import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';
import { AppError } from '../common/app-error';
import { Observable, from, empty, throwError } from 'rxjs';


describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let service: ProductsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = new ProductsService(null);
    component = new ProductsComponent(service);
  });

  it('should set products property with the items returned from the server', () => {
    // Arrange - Setup
    const products: Product[] = [
      {
        id: 1,
        name: 'p1',
        description: 'p1 description',
        price: 10,
        isAvailable: true
      },
      {
        id: 2,
        name: 'p2',
        description: 'p2 description',
        price: 20,
        isAvailable: false
      },
      {
        id: 3,
        name: 'p3',
        description: 'p3 description',
        price: 30,
        isAvailable: true
      }
    ];

    spyOn(service, 'getProducts').and.callFake(() => {
      return from([products]);
    });

    // spyOn(service, 'getProducts').and.returnValue(Observable.from([products]));

    // Act - Make the actual call
    component.ngOnInit();

    // Assert - Check and report whether the test is pass or fail
    expect(component.products).toEqual(products);
  });


});
