import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'skills', loadChildren: () => import('./features/skills/skills.module').then(m => m.SkillsModule)
  },
  {
    path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
