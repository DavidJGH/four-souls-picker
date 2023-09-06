import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {charsBySet, CharWithSet, customSets, SetInfo, sets} from './models/char.model';
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

  charOptions: CharWithSet[] = [];

  loadIndex = 0;

  char: CharWithSet | undefined = undefined;

  genForm = new FormGroup({
    numGen: new FormControl(2)
  });

  sets = sets;
  customSets = customSets;

  settingsForm: FormGroup;

  get allOfficialChecked(): boolean {
    return sets.every((set) => this.settingsForm.value["set-" + set]);
  }

  get allCustomChecked(): boolean {
    return customSets.every((set) => this.settingsForm.value["set-" + set.name]);
  }

  get includedSets(): SetInfo[] {
    return sets.map((name) => ({
      name,
      link: 'none',
      from: undefined
    } as SetInfo)).concat(customSets).filter((set) => this.settingsForm.value["set-" + set.name]);
  }

  get chars(): CharWithSet[] {
    let currentChars = this.includedSets.map((set) => charsBySet[set.name].map((char) => ({
      ...char,
      set
    } as CharWithSet))).flat();

    if (this.settingsForm.value["exclude-threeplus"]) {
      currentChars = currentChars.filter((char) => !char.threePlus);
    }

    return currentChars;
  }

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
    this.numbers = Array(this.maxSelect).fill(0).map((x, i) => i + 1);
    this.settingsForm = new FormGroup({
      ...Object.fromEntries(sets.map(set => ["set-" + set, new FormControl(true)])),
      ...Object.fromEntries(customSets.map(set => ["set-" + set.name, new FormControl(false)])),
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

  pickChar(char: CharWithSet) {
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

  officialSetsChange($event: Event) {
    const checked = ($event.target as HTMLInputElement).checked;
    this.settingsForm.patchValue(Object.fromEntries(sets.map(set => ["set-" + set, checked])))
  }

  customSetsChange($event: Event) {
    const checked = ($event.target as HTMLInputElement).checked;
    this.settingsForm.patchValue(Object.fromEntries(customSets.map(set => ["set-" + set.name, checked])))
  }
}
