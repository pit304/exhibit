import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'atelier',
        children: [
          {
            path: '',
            loadChildren: '../atelier/atelier.module#AtelierPageModule'
          }
        ]
      },
      {
        path: 'lucrari',
        children: [
          {
            path: '',
            loadChildren: '../lucrari/lucrari.module#LucrariPageModule'
          }
        ]
      },
      {
        path: 'texte',
        children: [
          {
            path: '',
            loadChildren: '../texts/texts.module#TextsPageModule'
          },
          {
            path: ':textId',
            loadChildren: '../texts/text-detail/text-detail.module#TextDetailPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/atelier',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/atelier',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
