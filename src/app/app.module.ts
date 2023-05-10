import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import {MatListModule } from "@angular/material/list";
import {MatButtonModule } from "@angular/material/button";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import { RegisterComponent } from './components/register/register.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { InvertoryInComponent } from './components/invertory-in/invertory-in.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import{ HTTP_INTERCEPTORS, HttpClientModule}from '@angular/common/http';
import {MatTooltipModule} from '@angular/material/tooltip';
// import { FormsModule }   from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { InvertoryOutComponent } from './components/invertory-out/invertory-out.component';
import { InvertoryComponent } from './components/invertory/invertory.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { InvertoryOutFormComponent } from './components/invertory-out-form/invertory-out-form.component';
import { InventoryOutItemComponent } from './components/inventory-out-item/inventory-out-item.component';
import Chart from 'chart.js/auto';
import { AuthInterceptor } from './Intercepter/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    SidenavComponent,
    HeaderComponent,
    ListItemComponent,
    ProductListComponent,
    InvertoryInComponent,
    AboutComponent,
    HomeComponent,
    InvertoryOutComponent,
    InvertoryComponent,
    InvertoryOutFormComponent,
    InventoryOutItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatRadioModule,
    MatMenuModule,
    MatSnackBarModule, 
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    HttpClientModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    MatSnackBarModule,
    NgSelectModule,
    

    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,
    multi:true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
