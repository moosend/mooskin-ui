# MooSkin UI - TabbedTable Component

The MooSkin TabbedTable Component is like a tabbed window, with as many tabs as you like.

___

### Usage

To start using the TabbedTable Component first you have to Import its two main components

```
Import {TabbedTable, TabTable} from 'mooskin';
```
or
```
import TabbedTable, {TabTable} from 'mooskin/lib/TabbedTable';
```

And then you can simply start using it by typing

```
<TabbedTable>
    <TabTable title="Title 1" active>
        <thead>
            <tr>
                <th>th 1</th>
                <th>th 2</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>td 1</td>
                <td>td 2</td>
            </tr>
            <tr>
                <td>td 1</td>
                <td>td 2</td>
            </tr>
        </tbody>
    </TabTable>
    <TabTable title="Title 2">
        <thead>
            <tr>
                <th>th 1</th>
                <th>th 2</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>td 1</td>
                <td>td 2</td>
            </tr>
            <tr>
                <td>td 1</td>
                <td>td 2</td>
            </tr>
        </tbody>
    </TabTable>
</TabbedTable>
```


Individual TabTable components have a required 'title' prop which will be displayed in the TabTable header, the rest are optional. The content of the TabTable should be table contents starting from `thead` or `tbody`.

### Examples

Can be used without importing the TabTable component with shorthand dot(.) notation.

```
Import {TabbedTable} from 'mooskin';

<TabbedTable>
    <TabbedTable.TabTable title="Title 1" iconClass="fa fa-icon">
        <div style={{...style, backgroundColor: '#5CCDDF'}}>
            Content 1
        </div>
    </TabbedTable.TabTable>
    <TabbedTable.TabTable title="Title 2" materialIcon="home">
        <div style={{...style, backgroundColor: '#F48770'}}>
            Content 2
        </div>
    </TabbedTable.TabTable>
</TabbedTable>
```

<div class="playground-doc">

## Supported attributes for TabbedTable

* `id` - id of the element
* `className` - css class
* `style` - extra styles for the main container

## Supported attributes for TabTable 

* `title` - (required) sets the title for the tab
* `active` - sets which TabTable is active, the first is active by default
* `value` - an optional numerical value displayed on the header
* `info` - another optional information displayed on the header
* `style` -  extra styles 
* `iconClass` - a class that will be added before the title to act as an icon, for example a font awesome class
* `materialIcon` - name of the material icon to be added before the title (material icons are provided out of the box)

</div>

Allthough these attributes are supported, most of them are optional.

___

#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)