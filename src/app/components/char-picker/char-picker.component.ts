import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {CharWithSet} from '../../models/char.model';

@Component({
  selector: 'app-char-picker',
  templateUrl: './char-picker.component.html',
  styleUrls: ['./char-picker.component.scss']
})
export class CharPickerComponent implements OnChanges {
  @Input()
  char?: CharWithSet = undefined;

  @Input()
  waitForLoad = true;

  @Output()
  pickChar = new EventEmitter<CharWithSet>();

  @Output()
  loaded = new EventEmitter();

  readonly minLoadTime = 1;

  charDone = false;
  itemDone = false;

  cardsDone = false;

  minLoadDone = false;

  fullyDone = false;

  @Input()
  skipLoad = false;

  charLoaded() {
    this.charDone = true;
    if (this.char?.item == 'none' || this.itemDone) {
      this.cardsLoaded();
    }
  }

  itemLoaded() {
    this.itemDone = true;
    if (this.charDone) {
      this.cardsLoaded();
    }
  }

  cardsLoaded() {
    this.cardsDone = true;
    if (this.minLoadDone) {
      this.fullyLoaded();
    }
  }

  minLoaded() {
    this.minLoadDone = true;
    if (this.cardsDone) {
      this.fullyLoaded();
    }
  }

  fullyLoaded() {
    this.fullyDone = true;
    this.loaded.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['waitForLoad']) {
      if((changes['waitForLoad'].previousValue || changes['waitForLoad'].firstChange) && !changes['waitForLoad'].currentValue && !this.skipLoad) {
        setTimeout(() => this.minLoaded(),this.minLoadTime * 1000);
      }
    }

    if (this.skipLoad) {
      this.fullyDone = true;
    }
  }
}
