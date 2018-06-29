import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
// Services
import { KpnApiService } from './kpn-api.service';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { LandingspageComponent } from './landingspage/landingspage.component';
import { PriceplanComponent } from './priceplan/priceplan.component';
import { DiscountComponent } from './discount/discount.component';
import { SubscriptionDetailsComponent } from './subscription-details/subscription-details.component';
import { PriceplanDetailsComponent } from './priceplan-details/priceplan-details.component';
import { DiscountDetailsComponent } from './discount-details/discount-details.component';
import { DiscountTypeDetailsComponent } from './discount-type-details/discount-type-details.component';
import { ProductComponent } from './product/product.component';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: LandingspageComponent
    },
    {
    	path: 'subscriptions',
    	component: SubscriptionsComponent
    },
    {
    	path: 'priceplan',
    	component: PriceplanComponent
    },
    {
    	path: 'discount',
    	component: DiscountComponent
    },
    {
    	path: 'subscription-details/:subscriptionId',
    	component: SubscriptionDetailsComponent
    },
    {
    	path: 'priceplan-details/:priceplanId',
    	component: PriceplanDetailsComponent
    },
    {
        path: 'discount-details/:discountId',
        component: DiscountDetailsComponent
    },
    {
        path: 'discount-type-details/:name/:id',
        component: DiscountTypeDetailsComponent
    },
    {
        path: 'products',
        component: ProductComponent
    },
];

@NgModule({
  declarations: [
  	SubscriptionsComponent,
    AppComponent,
    HeaderComponent,
    MenuComponent,
    LandingspageComponent,
    PriceplanComponent,
    DiscountComponent,
    SubscriptionDetailsComponent,
    PriceplanDetailsComponent,
    DiscountDetailsComponent,
    DiscountTypeDetailsComponent,
    ProductComponent,
  ],

  entryComponents: [
  		HeaderComponent,
     	SubscriptionsComponent,
   ],

  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false
            }
        )
  ],

  providers: [KpnApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
