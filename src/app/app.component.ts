import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Char, chars} from './models/char.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly maxSelect = 5;
  readonly numbers: number[] = [];

  charOptions: Char[] = [];

  char: Char | undefined = undefined;

  genForm = new FormGroup({
    numGen: new FormControl(2)
  })

  constructor() {
    this.numbers = Array(this.maxSelect).fill(0).map((x, i) => i + 1);
  }

  generateChars() {
    this.char = undefined;

    const numGen = this.genForm.value.numGen ?? 2;

    if (numGen < chars.length) {
      const ids = [29];
      while (ids.length < numGen) {
        const newIndex = Math.floor(Math.random() * chars.length);
        if (ids.indexOf(newIndex) === -1) ids.push(newIndex);
      }

      this.charOptions = ids.map((id) => chars[id]);
    }
    else {
      this.charOptions = chars;
    }

    console.log(this.charOptions)
  }

  pickChar(char: Char) {
    this.char = char;
  }

  back() {
    this.char = undefined
  }
}
