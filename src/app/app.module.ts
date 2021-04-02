import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { HeadcomponentComponent } from './components/headcomponent/headcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbDropdownModule,
    FormsModule,
    NgbModule
    // BsDropdownModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
