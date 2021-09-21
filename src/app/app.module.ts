import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


//DEPENDENCIES
import { NgxPaginationModule } from 'ngx-pagination';

//COMPONENTS
import { EarthQueakeComponent } from './pages/earth-queake/earth-queake.component';

//PIPES
import { SearchEarthQuakePipe } from './pipes/search-earth-quake.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EarthQueakeComponent,
    SearchEarthQuakePipe,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
