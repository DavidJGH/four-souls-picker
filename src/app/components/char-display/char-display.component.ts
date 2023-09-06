import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {CharWithSet} from '../../models/char.model';

@Component({
  selector: 'app-char-display',
  templateUrl: './char-display.component.html',
  styleUrls: ['./char-display.component.scss']
})
export class CharDisplayComponent implements OnChanges {
  @Input()
  char?: CharWithSet = undefined;

  @Output()
  back = new EventEmitter();

  counter = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['char'] && this.char) {
      this.counter = this.char.startCounters;
    }
  }

  addCounter() {
    this.counter++;
  }

  subtractCounter() {
    if (this.counter > 0) {
      this.counter--;
    }
  }
}
