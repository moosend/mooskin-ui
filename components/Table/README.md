# MooSkin UI - Table Component

The MooSkin Button Component works similar to the normal HTML `<table/>` element, but with pre-defined styling and attributes.

___

### Usage

To start using the Table Component first you have to Import it

```
Import {Table, TR, TH, TD, THead, TBody} from 'mooskin';
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
    <THead>
        <TR>
            <TH>header 1</TH>
            <TH>header 2</TH>
            <TH>header 3</TH>
        </TR>
    </THead>
    <TBody>
        <TR>
            <TD>td 1</TD>
            <TD>td 2</TD>
            <TD>td 3</TD>
        </TR>
    </TBody>
</Table>
```
As you can see only the first `<Table>` element is a composite component, as its children are just the usual dom element with capital letters.


For easy use, the components are named similar to normal HTML components but with a capital first letter.

Like the `<table/>` element it will accept given attributes and render differently based on the given attributes

<div class="playground-doc">

## Supported attributes 

* `id` - id of the element
* `className` - css class
* `style` - table styles

Allthough these attributes are supported, all of them are optional. normal `<table>` props can be used as well(like border, cellpadding etc.). They will just be passed to the underlying `<table>`. 

</div>

#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)
