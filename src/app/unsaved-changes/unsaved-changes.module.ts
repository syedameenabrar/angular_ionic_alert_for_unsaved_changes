import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnsavedChangesPageRoutingModule } from './unsaved-changes-routing.module';

import { UnsavedChangesPage } from './unsaved-changes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnsavedChangesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UnsavedChangesPage]
})
export class UnsavedChangesPageModule {}
