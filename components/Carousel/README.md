# MooSkin UI - Carousel Component

The MooSkin Carousel Component is component useful for sliding elements.

___

### Usage

To start using the Carousel Component first you have to Import it

```
Import {Carousel} from 'mooskin';
```
or modular import
```
// JS
import Carousel from 'mooskin/lib/Carousel';

// CSS
import 'mooskin/lib/Carousel/style.css';
```

And then you can simply start using it by typing

```
<Carousel attribute1="atr" attribute2="asd" >
    <div>
        <img src="imageURL" />
    </div>
    <div>
        <span>Well hello there</span>
    </div>
</Carousel>
```

### Examples

NOTE: Carousel children must be wrapped with a `div` tag.

Making it available with multiple active elements

```
<Carousel slidesToShow={3} >
    <div>
        <img src="imageURL" />
    </div>
    <div>
        <span>Well hello there</span>
    </div>
    <div>
        <img src="imageURL" />
    </div>
    <div>
        <span>Well hello there</span>
    </div>
</Carousel>
```

or make it an infinite slider with autoplay

```
<Carousel infinite autoplay >
    <div>
        <img src="imageURL" />
    </div>
    <div>
        <span>Well hello there</span>
    </div>
    <div>
        <img src="imageURL" />
    </div>
    <div>
        <span>Well hello there</span>
    </div>
</Carousel>
```

<div class="playground-doc">

## Supported attributes

* `id` - id of the element
* `className` - css class
* `onChange` - callback to be triggered on slider change
* `containerClassName` - Carousel wrapper classname
* `containerStyle` - Carousel wrapper style
* `dots` - dots to jump to slides
* `slidesToShow` - number of elements to appear in the carousel (default: 1)
* `slidesToScroll` - How many slides to scroll at once (default: 1)
* `arrows` - show or hide arrows (default: true)
* `autoplay` - autoplay carousel (default: false)
* `autoplaySpeed` - autoplay speed (default: 3000)
* `draggable` - makes the component draggable (default: true)
* `infinite` - infinite Carousel (default: true)
* `pauseOnHover` - Prevents autoplay while hovering (default: true)
* `animationSpeed` - animation speed in milliseconds (default: 500)
* `goTo` - callback when Carousel changes
* `onChange` - css class

</div>

Allthough these attributes are supported, all of them are optional.


#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)