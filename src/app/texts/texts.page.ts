import { Component, OnInit } from '@angular/core';
import { TextService } from './text.service';
import { TextEntry } from './text-entry.model';

@Component({
  selector: 'app-texts',
  templateUrl: './texts.page.html',
  styleUrls: ['./texts.page.scss'],
})
export class TextsPage implements OnInit {
  loadedTexts: TextEntry[];

  constructor(private textService: TextService) { }

  ngOnInit() {
    this.loadedTexts = this.textService.texts;
  }

}
