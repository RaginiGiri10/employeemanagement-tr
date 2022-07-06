import { EmployeeListComponent } from './Directives/component-communication/employee-list/employeeList.component';
import { BiDirectionalComponent } from './Bindings/BidirectionalBinding/bidirectional.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'
import {InterpolationComponent} from './Bindings/Interpolation/interpolation.component'
import { PropertyBindingComponent } from './Bindings/PropertyBinding/propertbinding.component'
import {ClassBindingComponent} from './Bindings/ClassBinding/classbinding.component'
import { StyleBindingComponent } from './Bindings/StyleBinding/stylebinding.component'
import { EventBindingComponent } from './Bindings/EventBinding/EventBindingDemo/eventbinding.component';
import {TemplateReferenceComponent} from './Bindings/EventBinding/TemplateReferenceVariables/templateReference.compenent'
import { EmployeeComponent } from './Directives/IfDemo/employee.component';
import { EmployeeCountComponent } from './Directives/component-communication/employee-count/employeeCount.component';
import { EmployeeService } from './Directives/component-communication/employee-list/employeeService';
@NgModule({

  // All components must be declared here
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateReferenceComponent,
    BiDirectionalComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeCountComponent
    
  ],

  //Register external modules that are used in the application.
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeeService],

  // Mention the root component.
  bootstrap: [AppComponent]
})
export class AppModule { }
