import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  front: string | undefined = 'none';

  @Input()
  back: string | undefined = 'none';

  @Input()
  tappable = false;

  tapped = false;

  flipped = false;

  @Output()
  cardLoaded = new EventEmitter();

  frontDone = false;
  backDone = false;

  frontLoaded() {
    this.frontDone = true;
    if (this.back == 'none' || this.backDone) {
      this.cardLoaded.emit();
    }
  }

  backLoaded() {
    this.backDone = true;
    if (this.frontDone) {
      this.cardLoaded.emit();
    }
  }

  tap() {
    if (this.tappable) {
      this.tapped = !this.tapped;
    }
  }
}
