import { Component, OnInit } from '@angular/core';
import { TextEntry } from '../text-entry.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TextService } from '../text.service';

@Component({
  selector: 'app-text-detail',
  templateUrl: './text-detail.page.html',
  styleUrls: ['./text-detail.page.scss'],
})
export class TextDetailPage implements OnInit {
  text: TextEntry;

  constructor(private route: ActivatedRoute,
    private textService: TextService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('textId')) {
        this.navCtrl.navigateBack('/tabs/texte');
        return;
      }
      this.text = this.textService.getText(paramMap.get('textId'));
    });
  }

}
