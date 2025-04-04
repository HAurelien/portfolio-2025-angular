import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsRoutingModule } from './skills-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { GeneralComponent } from './general/general.component';



@NgModule({
  declarations: [
    GeneralComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    SharedModule
  ]
})
export class SkillsModule { }
