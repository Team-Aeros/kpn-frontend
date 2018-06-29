import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// Services
import { KpnApiService } from './kpn-api.service';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { LandingspageComponent } from './landingspage/landingspage.component';


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
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    LandingspageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false
            }
        )
  ],

  entryComponents: [
        HeaderComponent,
  ],

  providers: [KpnApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
