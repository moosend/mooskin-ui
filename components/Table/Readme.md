# MooSkin UI - Table Component

The MooSkin Button Component works similar to the normal HTML `<table/>` element, but with pre-defined styling and attributes.

___

### Usage

To start using the Table Component first you have to Import it

```
Import {Table} from 'mooskin';
```
or
```
import Table from 'mooskin/lib/Table';
```

Styles can also be imported this way, if they were not imported globaly and you want to import just the table styles to keep the css bundle size healthy: 

```
import 'mooskin/lib/Table/styles.css';
```

And then you can simply start using it by typing

```
<Table attribute1="atr" attribute2="asd" >
    <thead>
        <tr>
            <th>header 1</th>
            <th>header 2</th>
            <th>header 3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>td 1</td>
            <td>td 2</td>
            <td>td 3</td>
        </tr>
    </tbody>
</Table>
```
As you can see only the first `<Table>` element is a composite component, as its children you just use the usual dom element components used fot tables. 



For easy use, the components are named similar to normal HTML components but with a capital first letter.

Like the `<table/>` element it will accept given attributes and render differently based on the given attributes


## Supported attributes

* `id` - id of the element
* `className` - css class
* `style` - table styles

Allthough these attributes are supported, all of them are optional. normal `<table>` props can be used as well(like border, cellpadding etc.). They will just be passed to the underlying `<table>`. 

#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)