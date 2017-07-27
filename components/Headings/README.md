# MooSkin UI - Heading Components

The MooSkin Heading Components works similar to the normal HTML `<h1/>`,`<h2/>`...etc elements, but with pre-defined styling and attributes.

___

### Usage

To start using the Heading Components first you have to Import the desired heading

```
Import {H1} from 'mooskin';
```

And then you can simply start using it by typing

```
<H1>My Header</H1>
```

For easy use, the components are named similar to normal HTML components but with a capital first letter.

Like the normal HTML elements, they can accept given attributes and render differently based on the given attributes

### Examples

Passing an `id` attribute

```
<H1 id="main">Main</H1>
```

or give it a custom `style`

```
<H2 style={yourStyle}>My Style</H2>
```

<div class="playground-doc">

## Supported attributes

* `id` - id of the element
* `style` - heading style
* `className` - name of the extra class

</div>

Allthough these attributes are supported, all of them are optional.

___

#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)