# MooSkin UI - Fieldset Component

The MooSkin Fieldset Component works similar to the normal HTML `<fieldset/>` element, but with pre-defined styling and attributes.

___

### Usage

To start using the Fieldset Component first you have to Import it

```
Import {Fieldset} from 'mooskin';
```

And then you can simply start using it by typing

```
<Fieldset legend="A form">
    <Button>Submit</Button>
</Fieldset>
```

For easy use, the components are named similar to normal HTML components but with a capital first letter.

Like the `<fieldset/>` element it will accept given attributes and render differently based on the given attributes

### Examples

Set the Fieldset legend

```
<Fieldset legend="Just a fieldset" />      //will work the HTML way aswell, but without styling.
```

Give it a class 

```
<Fieldset className={myStyle} />
```

or just give it a custom style

```
<Fieldset style={yourStyle} />
```

## Supported attributes

* `id` - id of the element
* `legend` - top fieldset text
* `className` - css class
* `style` - Fieldset style

Allthough these attributes are supported, all of them are optional.

#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)