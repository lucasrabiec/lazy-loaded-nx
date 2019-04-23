import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'feature1', loadChildren: './feature1/feature1.module#Feature1Module' },
  { path: 'feature2', loadChildren: './feature2/feature2.module#Feature2Module' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class LazyModule {}
