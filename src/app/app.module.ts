import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CharPickerComponent } from './components/char-picker/char-picker.component';
import {CharDisplayComponent} from './components/char-display/char-display.component';
import { CardComponent } from './components/card/card.component';
import {NgOptimizedImage} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CharPickerComponent,
    CharDisplayComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
