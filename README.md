# LazyLoadedNx

It is a sample repo with lazy loaded modules in Nx project.

## How to...

The following instruction shows how to load modules located:
* in the same project as an app
* in a separate lib (main module)
* in a separate lib (nested module)

In each of these cases, add routes and import RouterModule.forChild(routes) in a specific module file.

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

Also add path in main `tsconfig.json`

```typescript
"paths": {
  "@lazy-loaded-nx/lazy": ["libs/lazy/src/index.ts"]
}
```

### Module located in the same project as an app
To get it works just add path to `app/app-routing.module.ts`
```typescript
{ path: 'same', loadChildren: './same/same.module#SameModule' },
```

### Main module located in a separate lib

* Export module in main `index.ts`
```typescript
export * from './lib/lazy.module';
```

* Add include to this index file in `tsconfig.app.json` in app project
```typescript
"../../libs/lazy/src/index.ts",
```

* Add path to `app/app-routing.module.ts`
```typescript
  { path: 'lazy', loadChildren: '@lazy-loaded-nx/lazy#LazyModule' },
```

Notice that there is only `#LazyModule` not `lazy.module#LazyModule`. This is because we added export to main index.ts which exports all modules for us.

### Nested module located in a separate lib

* Export module in main `index.ts`
```typescript
export * from './lib/nested/nested.module'
```

* Also export module in nested `index.ts`
```typescript
export * from './nested.module'
```

* Add include to nested index file in `tsconfig.app.json` in app project
```typescript
"../../libs/lazy/src/lib/nested/index.ts"
```

* Add path to `app/app-routing.module.ts`
```typescript
  { path: 'nested', loadChildren: '@lazy-loaded-nx/lazy#NestedModule' }
```

___

This project was generated using [Nx](https://nx.dev).

<img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="50">
