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
            loadChildren: () => import('../atelier/atelier.module').then(m => m.AtelierPageModule)
          }
        ]
      },
      {
        path: 'proiecte',
        children: [
          {
            path: '',
            loadChildren: () => import('../projects/projects.module').then(m => m.ProjectsPageModule)
          },
          {
            path: ':projectId',
            loadChildren: () => import('../projects/project-detail/project-detail.module').then(m => m.ProjectDetailPageModule)
          }
        ]
      },
      {
        path: 'publicatii',
        children: [
          {
            path: '',
            loadChildren: () => import('../publications/publications.module').then(m => m.PublicationsPageModule)
          },
          {
            path: ':publicationId',
            loadChildren: () => import('../publications/publication-detail/publication-detail.module').then(m => m.PublicationDetailPageModule)
          }
        ]
      },
      {
        path: 'competitii',
        children: [
          {
            path: '',
            loadChildren: () => import('../competitions/competitions.module').then(m => m.CompetitionsPageModule)
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
    loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
