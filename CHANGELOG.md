# Changelog

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
 

