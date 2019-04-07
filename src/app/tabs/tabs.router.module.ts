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
        path: 'proiecte',
        children: [
          {
            path: '',
            loadChildren: '../projects/projects.module#ProjectsPageModule'
          },
          {
            path: ':projectId',
            loadChildren: '../projects/project-detail/project-detail.module#ProjectDetailPageModule'
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
        redirectTo: '/',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'atelier',
    redirectTo: '/tabs/atelier',
    pathMatch: 'full'
  },
  {
    path: 'proiecte',
    redirectTo: '/tabs/proiecte',
    pathMatch: 'full'
  },
  {
    path: 'texte',
    redirectTo: '/tabs/texte',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    loadChildren: '../home/home.module#HomePageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
