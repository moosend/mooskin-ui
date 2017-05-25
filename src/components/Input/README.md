# MooSkin UI - Input Component

The MooSkin Input Component works similar to the normal HTML <input/> element, but with pre-defined styling and attributes.

### Prerequisites

MooSkin Ui must be installed on your project

```
npm install mooskin
```

### Usage

To start using the Input Component first you have to Import it

```
Import {Input} from 'mooskin';
```

And then you can simply start using it by typing

```
<Input></Input>
```

For easy use the component is named similar to normal HTML components but with a capital first letter.

Like the <input/> element it will accept given attributes and render differently based on the given attributes

## Examples

Passing the placeholder attribute

```
<Input placeholder="username" />
```

or making it disabled with a value, in this case the proper disabled class will be loaded (ex. disabling cursor)

```
<Input value="This one is disabled" disabled />
```

or pass it a function for event handling

```
<Input onChange={yourFunc} />
```

or just give it a custom style

```
<Input style={yourStyle} />
```

## Supported attributes

* type
* name
* value
* placeholder
* size
* minlength
* maxlength
* disabled
* required
* style

# For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)