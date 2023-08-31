import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Char} from '../../models/char.model';

@Component({
  selector: 'app-char-picker',
  templateUrl: './char-picker.component.html',
  styleUrls: ['./char-picker.component.scss']
})
export class CharPickerComponent {
  @Input()
  char?: Char = undefined;

  @Output()
  pickChar = new EventEmitter<Char>();

  flipped = false;
}
