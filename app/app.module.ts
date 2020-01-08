import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { DialogcompComponent } from './dialogcomp/dialogcomp.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DialogcompComponent
  ],
  imports: [
      BrowserModule,
      MatDialogModule,
      HttpClientModule,
      BrowserAnimationsModule,
      AgGridModule.withComponents([])
  ],
  providers: [],
    bootstrap: [AppComponent],
    entryComponents: [DialogcompComponent]
})
export class AppModule { }
