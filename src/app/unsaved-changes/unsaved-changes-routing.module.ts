import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnsavedChangesPage } from './unsaved-changes.page';

const routes: Routes = [
  {
    path: '',
    component: UnsavedChangesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnsavedChangesPageRoutingModule {}
