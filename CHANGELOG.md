## v13.2.1


### Bug Fixes

* remove unused `HttpClient` dependency ([483f371](https://github.com/iget-master/iget-editor/commit/483f3716e7960e1bc6c4866ffd8605386cb78301))

## v13.2.0

|         | Description                                                                    | Issue # |
|---------|--------------------------------------------------------------------------------|---------|
| Feature | Allow disabling resizer by passing `resizable: false` on options               |         |
| Feature | Added `toolbarPosition` option to show toolbar `before` or `after` the content | #10     |
| Docs    | Refresh and update the documentation                                           |         |

## v13.1.2

* Remove unwanted `console.log` calls

## v13.1.1

* Fix missing `@Output` initializer on `IgetEditorGrippieComponent`

## v13.1.0

* Renamed outputs: `blur` to `blured` and `focus` to `focused` 

## v13.0.0

* Make compatible with Angular 13

## v12.0.1

* Rename interface file to remove `.d` suffix to include it in bundle

## v12.0.0

* Make compatible with Angular 12

## v11.0.0

* Make compatible with Angular 11

## v10.0.0

* Make compatible with Angular 10

## v9.1.0

### Features

* Added 8x8 color palette for Text and Fill color buttons
* Toolbar configuration now works as intended to do, allowing
 manually set groups and buttons that should be enabled ([Issue #4](https://github.com/iget-master/iget-editor/issues/4))
* Font family button dropdown now shows a sample of each font
* Font size button dropdown now shows a sample of each size

### Fixes

* Fixed toolbar breaking line inside group ([Issue #1](https://github.com/iget-master/iget-editor/issues/1))
* Fixed resizing

### Internal improvements

* Removed unnecessary inputs. Now options relies only on `config` input
* Updated devDependencies to use Angular 9.1
* Textarea content now is bound using `[innerHtml]` instead of directly manipulating element innerHtml.
 

