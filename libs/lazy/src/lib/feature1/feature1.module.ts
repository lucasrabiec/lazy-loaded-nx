import { NgModule } from '@angular/core';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: Component1Component },
  { path: 'component2', component: Component2Component }
];

@NgModule({
  declarations: [Component1Component, Component2Component],
  imports: [RouterModule.forChild(routes)]
})
export class Feature1Module { }
