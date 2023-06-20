import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SideNavContentComponent } from './side-nav-content/side-nav-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    SideNavContentComponent
  ],
  imports: [
    BrowserModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
