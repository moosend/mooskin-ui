# MooSkin UI - LoadingBar Component

___

### Usage

To start using the LoadingBar Component first you have to Import it

```
Import {LoadingBar} from '@moosend/mooskin';
```
or modular import
```
// JS
import LoadingBar from '@moosend/mooskin/lib/LoadingBar';

// CSS
import '@moosend/mooskin/lib/LoadingBar/style.css';
```

And then you can simply start using it by typing

```
<LoadingBar attribute1="atr" attribute2="asd" />
```

Like most React components, it will accept given attributes and render differently based on the given attributes

### Examples

LoadingBar component requires a `progress` prop passed to it ranging from 0 to 100. Preferably passed from an application state.

```
<LoadingBar progress={this.state.progress} />
```

or pass it callback functions when the loader is completed, or when an error occurs

```
<LoadingBar progress={this.state.progress} error={this.state.someError} onProgressDone={yourFunc} onError={yourFunc} />
```

or just give it a custom style and class

```
<LoadingBar progress={this.state.progress} className="myClass" style={{color: 'green'}} />
```

<div class="playground-doc">

## Supported attributes

* `id` - id of the element
* `progress` - progress of the loading bar, numerical value from 0 to 100
* `direction` - direction of the loading bar (left or right)
* `className` - css class
* `style` - loading bar style
* `error` - boolean value, wether there's an error or not
* `onProgressDone` - callback to be triggered when loader is done (progress reached 100)
* `onError` - callback to be triggered when an error occurs (error prop is true)

</div>

Allthough these attributes are supported, only `progress` is mandatory.


#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)