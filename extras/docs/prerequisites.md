# Prerequisites

## Peer Dependencies

This package depends only on `@angular/angular` and `@angular/material`.

**Note:** The `@iget/editor` major version matches with the required major version of the peer dependencies.   

## FormsModule

For `ngModel` work properly, you must include `FormsModule` respectively in the same module that imports `IgetEditorModule`.

```ts
import { FormsModule } from '@angular/forms';

...
    imports: [
      FormsModule,
      IgetEditorModule,
    ],
...
```
