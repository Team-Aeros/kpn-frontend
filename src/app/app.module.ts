import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Services
import { KpnApiService } from './kpn-api.service';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
    	path: 'subscriptions',
    	component: SubscriptionsComponent
    },
];
@NgModule({
  declarations: [
  		AppComponent,
  		SubscriptionsComponent,
  ],
  entryComponents: [
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
export class AppModule { }
