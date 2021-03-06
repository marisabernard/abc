import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { PageComponent } from './page';
import { EmployeeListComponent } from './employeeList';
import { EmployeeDetailComponent } from './employeeDetail';
import { EmployeeDisplayComponent } from './employeeDisplay';

@NgModule({
  declarations: [
    PageComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  bootstrap: [PageComponent]
})
export class AppModule { }
