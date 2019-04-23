# LazyLoadedNx

It is a sample repo with lazy loaded modules in Nx project.

## How to...

The following instruction shows how to load modules:
* from module located in the same project as an app
* from module located in a separate lib

### Module located in the same project as an app

First you need to add routes and import RouterModule.forChild(routes) in a module file.
```typescript
<imports...>

const routes: Routes = [
  { path: '', component: Component1Component },
  { path: 'component2', component: Component2Component }
];

@NgModule({
  declarations: [Component1Component, Component2Component],
  imports: [RouterModule.forChild(routes)]
})
export class ...
```

To get it works just add path to `app/app-routing.module.ts`
```typescript
{ path: 'same', loadChildren: './same/same.module#SameModule' },
```

### Module located in a separate lib

In each feature's module file add routes and import RouterModule.forChild(routes).
```typescript
<imports...>

const routes: Routes = [
  { path: '', component: Component1Component },
  { path: 'component2', component: Component2Component }
];

@NgModule({
  declarations: [Component1Component, Component2Component],
  imports: [RouterModule.forChild(routes)]
})
export class ...
```

In main lib's module add routes and import RouterModule.forChild(routes) for specific feature.
```typescript
<imports...>

const routes: Routes = [
  { path: 'feature1', loadChildren: './feature1/feature1.module#Feature1Module' },
  { path: 'feature2', loadChildren: './feature2/feature2.module#Feature2Module' }
];

@NgModule({
  declarations: [Component1Component, Component2Component],
  imports: [RouterModule.forChild(routes)]
})
export class ...
```

Then add path to `app/app-routing.module.ts`
```typescript
{ path: 'lazy', loadChildren: '@lazy-loaded-nx/lazy#LazyModule' }
```

Export modules in main lib's `index.ts`
```typescript
export * from './lib/lazy.module';
export * from './lib/feature1/feature1.module';
export * from './lib/feature2/feature2.module';

```

Add lib path to main `tsconfig.json`
```typescript
"paths": {
  "@lazy-loaded-nx/lazy": ["libs/lazy/src/index.ts"]
}
```

To get it builds without errors you need add path to main lib's index.ts file to include's array in `tsconfig.app.json` in app project
```typescript
"../../libs/lazy/src/index.ts",
```
___

This project was generated using [Nx](https://nx.dev).

<img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="50">
