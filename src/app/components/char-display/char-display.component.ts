import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Char} from '../../models/char.model';

@Component({
  selector: 'app-char-display',
  templateUrl: './char-display.component.html',
  styleUrls: ['./char-display.component.scss']
})
export class CharDisplayComponent {
  @Input()
  char?: Char = undefined;

  @Output()
  back = new EventEmitter();

  flipped = false;
}
