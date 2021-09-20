import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesdatalistComponent } from 'src/app/components/salesdatalist/salesdatalist.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DataServiceService } from './service/dataService/data-service.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md'
import { FormsModule } from '@angular/forms';
import { SpinalService } from './service/spinal.service';
import { ChartsModule } from 'ng2-charts';
import { BarchartComponent } from './components/barchart/barchart.component';
import { PiechartComponent } from './components/piechart/piechart.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component'




@NgModule({
  declarations: [
    AppComponent,
    SalesdatalistComponent,
    BarchartComponent,
    PiechartComponent,
    PagenotfoundComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    HttpClientModule,
    ChartsModule,
    FormsModule,
    NgxSpinnerModule

  ],
  
  providers: [DataServiceService, SpinalService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
