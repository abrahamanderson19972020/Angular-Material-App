import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactmanagerModule } from './contactmanager/contactmanager.module';

const routes: Routes = [
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then((m) => m.DemoModule),
  },
  {
    path: 'contactmanager',
    loadChildren: () =>
      import('./contactmanager/contactmanager.module').then(
        (m) => ContactmanagerModule
      ),
  },
  { path: '**', redirectTo: 'contactmanager' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
