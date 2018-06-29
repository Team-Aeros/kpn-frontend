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
    }
];

@NgModule({
  declarations: [
  	SubscriptionsComponent,
    AppComponent,
    HeaderComponent,
    MenuComponent,
    LandingspageComponent,
    PriceplanComponent,
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
