import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ApplicationComponent} from './components/application/application';
import NavigationComponent from './components/navigation/navigation';
import FooterComponent from './components/footer/footer';
import ProductListComponent from './components/productlist/productlist';
import {ProductService} from './services/product.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    ApplicationComponent,
    FooterComponent,
    ProductListComponent,
    NavigationComponent],
  providers: [ProductService],
  bootstrap: [ApplicationComponent]
})
export class AppModule {
}
