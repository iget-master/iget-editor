# Prerequisites

## Peer Dependencies

You must install all the following `peerDependencies` in order for `@iget/editor` to work:

* `angular/angular: "^9.0.0"`
* `angular/material: "^9.0.0"`

## Modules

For `ngModel` work properly, you must include `FormsModule` respectively in the same module that imports `IgetEditorModule`.

```ts
import { FormsModule } from '@angular/forms';
```
