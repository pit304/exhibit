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
        path: 'publicatii',
        children: [
          {
            path: '',
            loadChildren: '../publications/publications.module#PublicationsPageModule'
          },
          {
            path: ':publicationId',
            loadChildren: '../publications/publication-detail/publication-detail.module#PublicationDetailPageModule'
          }
        ]
      },
      {
        path: 'competitii',
        children: [
          {
            path: '',
            loadChildren: '../competitions/competitions.module#CompetitionsPageModule'
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
    path: 'publicatii',
    redirectTo: '/tabs/publicatii',
    pathMatch: 'full'
  },
  {
    path: 'competitii',
    redirectTo: '/tabs/competitii',
    pathMatch: 'full'
  },
  {
    path: '/',
    redirectTo: '',
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
