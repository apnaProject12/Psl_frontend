import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { InvertoryInComponent } from './invertory-in/invertory-in.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { InvertoryOutComponent } from './components/invertory-out/invertory-out.component';
import { InvertoryComponent } from './components/invertory/invertory.component';
import { InvertoryOutFormComponent } from './components/invertory-out-form/invertory-out-form.component';
import { InventoryOutItemComponent } from './components/inventory-out-item/inventory-out-item.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'sidenav',
    component: SidenavComponent,
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'list-item',
        component: ListItemComponent,
      },
      {
        path: 'product-list',
        component: ProductListComponent,
      },
      {
        path: 'invertory-in',
        component: InvertoryInComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'product-list/:id',
        component: ProductListComponent,
      },
      {
        path: 'Invertory-out',
        component: InvertoryOutComponent,
      },
      {
        path: 'Invertory',
        component: InvertoryComponent,
      },
      {
        path:'invertory-out-form',
        component:InvertoryOutFormComponent
      },
      {
        path:'inventory-out-item',
        component:InventoryOutItemComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
