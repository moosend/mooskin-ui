# MooSkin UI - Grid Component

The MooSkin Grid Component consist of `Grid`, `Row` & `Col` components. Like other popular front-end libraries, it uses a 12 column grid system. 

Let's take a closer look at the grid below. The outter area that overlaps everything is the `Grid`, inside the `Grid` are two <Rows> which seperates into 12 <Cols>

```
G
---------------------------------------------------------
|                                                       |
|   -------------------------------------------------   |
| R |   |   |   |   |   |   |   |   |   |   |   |   |   |
|   | C | C | C | C | C | C | C | C | C | C | C | C |   |
|   -------------------------------------------------   |
| R |   |   |   |   |   |   |   |   |   |   |   |   |   |
|   | C | C | C | C | C | C | C | C | C | C | C | C |   |
|   -------------------------------------------------   |
|                                                       |
---------------------------------------------------------
```

The Grid system utilizes 4 main props, which are `lg`, `md`, `sm`, `xs`. These props are passed to the `Col` to tell it how many C's like above, should the `Col` take. IF a `Row` contains a single `Col`, then the `Col` will spread out throughout the whole `Row`. If you want it to use less, then insert "imaginary" `Col`'s into the row to take some of the C's.

### Usage

To start using the Grid Component first you have to Import it

```
Import {Col, Grid, Row} from 'mooskin';
```

And then you can simply start using it by typing

```
<Grid>
    <Row>
        <Col lg={6}>
            Col 6
        </Col>
        <Col lg={6}>
            Col 6
        </Col>
    </Row>
    <Row>
        <Col lg={8}>
            Col 8
        </Col>
        <Col lg={4}>
            Col 4
        </Col>
    </Row>
</Grid>
```

In the example above the end result would be:

```
G
---------------------------------------------------------
|                                                       |
|   -------------------------------------------------   |
| R |                       |                       |   |
|   |         Col 6         |         Col 6         |   |
|   -------------------------------------------------   |
| R |                               |           |   |   |
|   |              Col 8            |     Col 4     |   |
|   -------------------------------------------------   |
|                                                       |
---------------------------------------------------------
```

As you can see we got 2 `Row`'s inside the `Grid`, and each `Row` got 2 `Col`'s. The `lg` prop that we passed tells the `Col`'s inside the `Row` how many C's it should take. So on the first `Row`, the first `Col` got 6 and the second `Col` got 6, in the second `Row` though, the first `Col` got 8 and the second `Col` got 4. These are determined by passing the 4 main props mentioned above to the `Col`. Each of these props tells the Col how to behave on different screen sizes. `lg` is for large screens, like Desktops or Macs. `md` is for medium screens, like laptops. `sm` is for small screens, like tablets. And `xs` is for extra small screens like phones.

For easy use, the components are named similar to normal HTML components but with a capital first letter.
For better content management, there is the `FormGroup` available.


### More Examples

Say we want to have a responsive `Col`'s inside a `Row` that will take different amount of space depending on the screen size. Let's take the first `Row` on the `Grid` above.

```
<Grid>
    <Row>
        <Col lg={6} xs={12}>
            Col lg-6 xs-12
        </Col>
        <Col lg={6} xs={12}>
            Col lg-6 xs-12
        </Col>
    </Row>
</Grid>
```

As you can see, this passed we passed a second prop to the `Col`'s, which is `xs`. How will the columns behave? Exactly how their been told. So on large screens the `lg` prop does the work and the grid will look like this.

```
G
---------------------------------------------------------
|                                                       |
|   -------------------------------------------------   |
| R |                       |                       |   |
|   |   Col 6 lg-6 xs-12    |   Col 6 lg-6 xs-12    |   |
|   -------------------------------------------------   |
|                                                       |
---------------------------------------------------------
```

but when we visit this `Grid` on our phones which are extra small screens by standard, the `Grid` will look like this

```
G
---------------------------------------------------------
|                                                       |
|   -------------------------------------------------   |
|   |                                               |   |
|   |               Col 6 lg-6 xs-12                |   |
| R -------------------------------------------------   |
|   |                                               |   |
|   |               Col 6 lg-6 xs-12                |   |
|   -------------------------------------------------   |
|                                                       |
---------------------------------------------------------
```

So we told the `Col`'s that on extra small screens they must take 12 Columns, and that's what they did. The first one took all the space and pushed the second one below, practically they're still in the same `Row` though. If we passed 8 to the first `Col` `xs` prop and 4 to the second. In small screens, they would appear in the same row, the first one taking 8 Columns and the second one taking 4.

One more thing is, that if we dont pass any props to the `Col`'s, they will take the same amount of space in the `Row`. Let's have a look.

```
<Grid>
    <Row>
        <Col>
            Col
        </Col>
        <Col>
            Col
        </Col>
        <Col>
            Col
        </Col>
        <Col>
            Col
        </Col>
    </Row>
</Grid>
```

The code block above would generate the following `Grid`, and as you can see, no prop has been passed.

```
G
---------------------------------------------------------
|                                                       |
|   -------------------------------------------------   |
| R |           |           |            |          |   |
|   |    Col    |    Col    |    Col     |    Col   |   |
|   -------------------------------------------------   |
|                                                       |
---------------------------------------------------------
```


`Grid` and `Row` accept props aswell. For example:

```
<Grid className={myClass}>
    <Row style={{padding: 10}}>
        <Col lg={6} xs={12}>
            Col lg-6 xs-12
        </Col>
        <Col lg={6} xs={12}>
            Col lg-6 xs-12
        </Col>
    </Row>
</Grid>
```

## Supported `Grid` attributes

* `className` - add additional classes to the Grid container
* `style` - or additional styles

## Supported `Row` attributes

* `className` - add additional classes to the Row
* `style` - or additional styles

## Supported `Col` attributes

* `className` - add additional classes to the Col
* `style` - or additional styles
* `lg` - `Col` behaviour inside `Row` on large screens
* `md` - `Col` behaviour inside `Row` on medium screens
* `sm` - `Col` behaviour inside `Row` on small screens
* `xs` - `Col` behaviour inside `Row` on extra small screens

Allthough these attributes are supported, all of them are optional.

___

#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)