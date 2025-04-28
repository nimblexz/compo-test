import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompoComponent } from './compo/compo.component';
import { CatalogComponent } from './compo/catalog/catalog.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'compo',
    pathMatch: 'full'
  },
  {
    path: 'compo',
    component: CompoComponent,
    children: [{
      path: '', redirectTo: 'compo',
      pathMatch: 'full',
    }, {
      path: 'catalog',
      component: CatalogComponent,
    },
      {
        path: '**', redirectTo: 'catalog',
      }]
  },
  {
    path: '**',
    redirectTo: 'catalog',
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
