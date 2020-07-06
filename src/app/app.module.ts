import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { MapComponent } from './map/map.component';
import { ProductsComponent } from './products/products.component';
// services
import { ProductsService } from './services/products.service';
import { TrackClickDirective } from './track-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    HomeComponent,
    NotFoundComponent,
    ProductDetailComponent,
    ProductFormComponent,
    MapComponent,
    ProductsComponent,
    TrackClickDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
