import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendComponent } from './backend/backend.component';
import { FrontendComponent } from './frontend/frontend.component';
import { SkillsRoutingModule } from './skills-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    BackendComponent,
    FrontendComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    SharedModule
  ]
})
export class SkillsModule { }
