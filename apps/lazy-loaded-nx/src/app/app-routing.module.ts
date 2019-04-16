import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'same', loadChildren: './same/same.module#SameModule' },
  { path: 'lazy', loadChildren: '@lazy-loaded-nx/lazy#LazyModule' },
  { path: 'nested', loadChildren: '@lazy-loaded-nx/lazy#NestedModule' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
