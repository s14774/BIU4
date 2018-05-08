import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonTableComponent } from './person-table/person-table.component';
import { PersonTableRowComponent } from './person-table-row/person-table-row.component';
import { PersonService } from "app/services/person-service";
import { PersonTablePagingComponent } from './person-table-paging/person-table-paging.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { PersonFilterComponent } from './person-filter/person-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonTableComponent,
    PersonTableRowComponent,
    PersonTablePagingComponent,
    MyComponentComponent,
    PersonFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    PersonService, 
    {
      provide: LOCALE_ID,
      useValue: 'pl-PL'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
