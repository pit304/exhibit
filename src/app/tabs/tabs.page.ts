import { Component, ViewChild, EventEmitter } from '@angular/core';
import { IonTabs, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor(private navCtrl: NavController) {}
  @ViewChild(IonTabs) tabs: IonTabs;

  onTabsChange() {
    this.navCtrl.navigateRoot('/tabs/' + this.tabs.getSelected());
  }
}
