import {Component, Input} from '@angular/core';

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
}
