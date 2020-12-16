# MooSkin UI - Table Component

The MooSkin Button Component works similar to the normal HTML `<table/>` element, but with pre-defined styling and attributes.

___

### Usage

To start using the Table Component first you have to Import it

```
Import {Table, TableHeader} from '@moosend/mooskin';
```
or modular import
```
// JS
import Table, {TableHeader} from '@moosend/mooskin/lib/Table';

// CSS
import '@moosend/mooskin/lib/Table/style.css';
```

Styles can also be imported this way, if they were not imported globaly and you want to import just the table styles to keep the css bundle size healthy: 

```
import '@moosend/mooskin/lib/Table/styles.css';
```

And then you can simply start using it by typing

```
const data = [
    {
        name: 'Geralt of Rivia',
        weapon: 'Aerondight',
        abilities: 'Sword fighting, Quen Signs',
        profession: 'Witcher',
        allegience: 'School of the Wolf'
    },
    {
        name: 'John Shepard',
        weapon: 'Vindicator',
        abilities: 'Weapons, Biotics',
        profession: 'Commander',
        allegience: 'Alliance, Citadel'
    }
];

<Table data={data}>
    <TableHeader dataField="name" >Name</TableHeader>
    <TableHeader dataField="profession" hideSmall >Profession</TableHeader>
    <TableHeader dataField="weapon" hideSmall >Weapon</TableHeader>
    <TableHeader dataField="abilities" >Abilities</TableHeader>
    <TableHeader dataField="allegience" hideSmall >Allegience</TableHeader>
</Table>
```
Basically the table accepts an array of objects as a prop, those objects it will assign to rows and columns. One object is a row and an object property is a column. Table accepts `TableHeader` components and children, where you can assign which property to which column should be assigned. For example the `abilities` property from the objects will be assigned to the 4th column of the table determined by `TableHeader` component and the `dataField` prop.

Table component can recieve many props. The `sortable` prop for example
```
<Table data={data}>
    <TableHeader dataField="property1" sortable >Header 1</TableHeader>
    <TableHeader dataField="property2" >Header 2</TableHeader>
    <TableHeader dataField="property3" >Header 3</TableHeader>
</Table>
```
This will make the first column sortable by clicking on the header.

A custom sort function can be passed aswell to headers.

```
<Table data={data}>
    <TableHeader dataField="property1" sortable sortfn={this.sortIt} >Header 1</TableHeader>
    <TableHeader dataField="property2" >Header 2</TableHeader>
    <TableHeader dataField="property3" >Header 3</TableHeader>
</Table>

sortIt(a, b, order, sortBy) {

    let comparison = 0;

    if (order === 'desc'){

        console.log('desc called');

        if (a[sortBy] > b[sortBy]){
            comparison = -1;
        } else if (a[sortBy] < b[sortBy]){
            comparison = 1;
        }
        return comparison;
    } else if (order === 'asc') {

        console.log('asc called');

        if (a[sortBy] < b[sortBy]){
            comparison = -1;
        } else if (a[sortBy] > b[sortBy]){
            comparison = 1;
        }
        return comparison;
    }

}
```
The custom sort function must accept 4 arguments, `a` and `b` being the compared objects, `order` must bo `asc` or `desc` and `sortBy` is the object property to be compared.

The table can also be paginated using the `paginate` props,

```
<Table data={data} paginate={3}>
    <TableHeader dataField="property1" sortable sortfn={this.sortIt} >Header 1</TableHeader>
    <TableHeader dataField="property2" >Header 2</TableHeader>
    <TableHeader dataField="property3" >Header 3</TableHeader>
</Table>
```
in this case the table will be paginated, showing only three rows since a value of 3 is passed, and pagination buttons will appear.

### Row styles via data

Specific rows can be styled by passing a `style` key through the object in the `data` prop.

```
const data = [
    {
        name: 'Geralt of Rivia',
        weapon: 'Aerondight',
        abilities: 'Sword fighting, Quen Signs',
        profession: 'Witcher',
        allegience: 'School of the Wolf'
    },
    {
        name: 'John Shepard',
        weapon: 'Vindicator',
        abilities: 'Weapons, Biotics',
        profession: 'Commander',
        allegience: 'Alliance, Citadel',
        style: {color: '#5ccdde'}
    }
];

<Table data={data}>
    <TableHeader dataField="name" >Name</TableHeader>
    <TableHeader dataField="profession" hideSmall >Profession</TableHeader>
    <TableHeader dataField="weapon" hideSmall >Weapon</TableHeader>
    <TableHeader dataField="abilities" >Abilities</TableHeader>
    <TableHeader dataField="allegience" hideSmall >Allegience</TableHeader>
</Table>
```

in this case, the second object in the array has a style key value, that style will be applied to the second row of the Table, more precicly to all cells in that specific row.

### Row (Cell) callback functions via data

Specific rows can have callback functions by passing a `onClick` key through the object in the `data` prop.

```
const data = [
    {
        name: 'Geralt of Rivia',
        weapon: 'Aerondight',
        abilities: 'Sword fighting, Quen Signs',
        profession: 'Witcher',
        allegience: 'School of the Wolf'
    },
    {
        name: 'John Shepard',
        weapon: 'Vindicator',
        abilities: 'Weapons, Biotics',
        profession: 'Commander',
        allegience: 'Alliance, Citadel',
        onClick: (e, data) => console.log(e, data);
    }
];

<Table data={data}>
    <TableHeader dataField="name" >Name</TableHeader>
    <TableHeader dataField="profession" hideSmall >Profession</TableHeader>
    <TableHeader dataField="weapon" hideSmall >Weapon</TableHeader>
    <TableHeader dataField="abilities" >Abilities</TableHeader>
    <TableHeader dataField="allegience" hideSmall >Allegience</TableHeader>
</Table>
```

the callback will return two args, `e` for event & `data` which is an object consisting of the relevant `dataLabel` of the cell, `label` which is the text, or content, of the clicked cell, `index` is the index of the row in the data array & `content` which is the inner content of the cell

### Expanded sections for Rows

As each row is represented by a object in the array that is passed to the `data` prop, an expanded section can be added to the Row, similar to the [List](https://github.com/moosend/mooskin-ui/tree/master/components/List) component. The expanded section will be rendered by the `expandable` property of the Rows object. The `expandable` property should be an object, consisting of two mandatory properties (`expanded`: boolean, `content`: a TD JSX element, or an array of such elements. When rendered, the props, key & children of the element/s will be the same, though the first cell will have the style of `position: 'relative'` passed to it, since its required to render the absolute section arrow, also on the first cell, apart from its children, the arrow will be added as a child. 'colSpan' table cell prop should be used to navigate/style cells in the row. The optional ones being (`className`: string, `style`: CSS properties). The proper way to change the `expandable` section properties, is by using the above mentioned `onClick` callbacks for Rows.

Example:
```
const data = [
    {
        name: 'Geralt of Rivia',
        weapon: 'Aerondight',
        abilities: 'Sword fighting, Quen Signs',
        profession: 'Witcher',
        allegience: 'School of the Wolf',
        expandable: {
            expanded: true,
            content: <div style={{background: 'red'}}>This section is expandable</div>
        }
    },
    {
        name: 'John Shepard',
        weapon: 'Vindicator',
        abilities: 'Weapons, Biotics',
        profession: 'Commander',
        allegience: 'Alliance, Citadel',
        onClick: (e, data) => console.log(e, data);
    }
];

<Table data={data}>
    <TableHeader dataField="name" >Name</TableHeader>
    <TableHeader dataField="profession" hideSmall >Profession</TableHeader>
    <TableHeader dataField="weapon" hideSmall >Weapon</TableHeader>
    <TableHeader dataField="abilities" >Abilities</TableHeader>
    <TableHeader dataField="allegience" hideSmall >Allegience</TableHeader>
</Table>
```


<div class="playground-doc">

## Supported attributes for Table

* `id` - id of the element
* `data` - array of objects to be assigned to the Table
* `rowStyles` - styles to be applied on the table Rows
* `rowClasses` - classes to be applied on the table Rows
* `className` - css class
* `style` - table styles
* `alternate` - alternate table view
* `smallCollapse` - adds another header and column on small screens where the whole row can be collapsed
* `collapseHeaderClassName` - classes for popover header
* `collapseHeaderStyle` - styles for popover header
* `containerStyle` - styling applied to the div containing the table
* `paginate` - paginate table, with the number of rows passed to this prop
* `paginationProps` - an object describing table pagination props
* `dragAndDrop` - an object that enables drag and drop functionality and includes position property in which column the drag icon should show, a function that tracks hover information and returns dragIndex and hoverIndex values while dragging a table row, and a drop function which will be called once we drop the row being dragged

## Supported attributes for TableHeader

* `dataField` - which object property of the data array should be assigned to this column
* `hideSmall` - Hides the column on small screens
* `colClasses` - classes to be applied to this column cells
* `colStyles` - styles to be applied to this column cells
* `sortable` - wether this column should be sortable or not
* `sortfn` - custom sort function for row sorting, requires `sortable`
* `arrowDirection` - determines the direction of the sorting arrow
* `className` - css class
* `style` - table styles

Allthough these attributes are supported, only `data` for Table and `dataField` for TableHeader are required.

</div>

#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)
