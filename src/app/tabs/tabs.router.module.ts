import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
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
            loadChildren: '../texte/texte.module#TextePageModule'
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
