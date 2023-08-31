import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CharPickerComponent } from './components/char-picker/char-picker.component';
import {CharDisplayComponent} from './components/char-display/char-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CharPickerComponent,
    CharDisplayComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
