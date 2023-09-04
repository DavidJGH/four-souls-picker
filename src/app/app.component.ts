import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Char, charsBySet, sets} from './models/char.model';
import {inject} from '@vercel/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  readonly maxSelect = 5;
  readonly numbers: number[] = [];

  settingsOpen = false;

  charOptions: Char[] = [];

  loadIndex = 0;

  char: Char | undefined = undefined;

  genForm = new FormGroup({
    numGen: new FormControl(2)
  });

  sets = sets;

  settingsForm: FormGroup;

  get includedSets(): string[] {
    return sets.filter((set) => this.settingsForm.value["set-" + set])
  }

  get chars(): Char[] {
    let currentChars = this.includedSets.map((set) => charsBySet[set]).flat();

    if (this.settingsForm.value["exclude-threeplus"]) {
      currentChars = currentChars.filter((char) => !char.threePlus);
    }

    return currentChars;
  }

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
    this.numbers = Array(this.maxSelect).fill(0).map((x, i) => i + 1);
    this.settingsForm = new FormGroup({
      ...Object.fromEntries(sets.map(set => ["set-" + set, new FormControl(true)])),
      'exclude-threeplus': new FormControl(false)
    });
  }

  generateChars() {
    this.char = undefined;
    this.charOptions = [];

    this.changeDetectorRef.detectChanges();

    const numGen = this.genForm.value.numGen ?? 2;

    const chars = this.chars;

    if (numGen < chars.length) {
      const ids = [];
      while (ids.length < numGen) {
        const newIndex = Math.floor(Math.random() * chars.length);
        if (ids.indexOf(newIndex) === -1) ids.push(newIndex);
      }

      this.charOptions = ids.map((id) => chars[id]);
    } else {
      this.charOptions = chars;
    }

    this.loadIndex = 0;
  }

  pickChar(char: Char) {
    this.char = char;
  }

  back() {
    this.char = undefined
  }

  loadNext() {
    if (this.loadIndex < this.charOptions.length) {
      this.loadIndex++;
    }
  }

  ngOnInit() {
    inject();
  }
}
