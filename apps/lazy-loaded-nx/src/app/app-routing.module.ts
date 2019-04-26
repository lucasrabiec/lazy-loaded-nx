import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'same', loadChildren: './same/same.module#SameModule' },
  { path: 'feature1', loadChildren: '@lazy-loaded-nx/lazy#Feature1Module' },
  // { path: 'feature2', loadChildren: '@lazy-loaded-nx/lazy#Feature2Module' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
