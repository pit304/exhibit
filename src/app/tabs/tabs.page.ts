import { Component } from '@angular/core';
import { IonTabButton } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor() {}
  public selected: string = null;

  onTabsChange(tab: IonTabButton) {
    this.selected = tab.tab;
  }
}
