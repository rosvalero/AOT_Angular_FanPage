import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AotFanpageComponent } from './aot-fanpage/aot-fanpage.component';

@NgModule({
  declarations: [
    AppComponent,
    AotFanpageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
