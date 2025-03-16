import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackendComponent } from './backend/backend.component';
import { FrontendComponent } from './frontend/frontend.component';

const routes: Routes = [
  {
    path: 'back', component: BackendComponent,
  },
  {
    path: '**', redirectTo: 'back'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
