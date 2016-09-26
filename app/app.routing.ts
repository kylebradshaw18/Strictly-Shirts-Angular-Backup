import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';



import { LoginComponent } from './Login/login.component';
import { ClothesComponent } from './Clothes/clothes.component';
import { AboutComponent } from './About/about.component';
import { CartComponent } from './Cart/cart.component';




const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/clothes',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'clothes',
    component: ClothesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [DashboardComponent, 
                                 HeroesComponent, 
                                 HeroDetailComponent, 
                                 LoginComponent, 
                                 ClothesComponent, 
                                 AboutComponent, 
                                 CartComponent];
