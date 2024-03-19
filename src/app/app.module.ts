import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { StudentsPageComponent } from './students-page/students-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AsideNavComponent,
    StudentsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
