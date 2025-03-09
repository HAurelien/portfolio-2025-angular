import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendComponent } from './backend/backend.component';
import { FrontendComponent } from './frontend/frontend.component';



@NgModule({
  declarations: [
    BackendComponent,
    FrontendComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SkillsModule { }
