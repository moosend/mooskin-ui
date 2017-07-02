# MooSkin UI - TabbedContent Component

The MooSkin TabbedContent Component is like a tabbed window, with as many tabs as you like.

___

### Usage

To start using the TabbedContent Component first you have to Import its two main components

```
Import {TabbedContent, Tab} from 'mooskin';
```
or
```
import TabbedContent, {Tab} from 'mooskin/lib/TabbedContent';
```

And then you can simply start using it by typing

```
<TabbedContent>
    <Tab title="Title 1" active>
        <div style={{...style, backgroundColor: '#5CCDDF'}}>
            Content 1
        </div>
    </Tab>
    <Tab title="Title 2">
        <div style={{...style, backgroundColor: '#F48770'}}>
            Content 2
        </div>
    </Tab>
    <Tab title="Title 3">
        <div style={{...style, backgroundColor: '#F2C14A'}}>
            Content 3
        </div>
    </Tab>
</TabbedContent>
```


Individual Tab components have a required 'title' prop which will be displayed in the tab header, the rest are optional. You can puut whatever inside Tab tags, it will be displayed as content for that particular tab.

### Examples


TabbedContent with material icon or font icon class in headers. Material icons are provided out of the box. The rese are up to you.

```
<TabbedContent>
    <Tab title="Title 1" iconClass="fa fa-icon">
        <div style={{...style, backgroundColor: '#5CCDDF'}}>
            Content 1
        </div>
    </Tab>
    <Tab title="Title 2" materialIcon="home">
        <div style={{...style, backgroundColor: '#F48770'}}>
            Content 2
        </div>
    </Tab>
</TabbedContent>
```

Can be used without importing the Tab component with shorthand dot(.) notation.

```
Import {TabbedContent} from 'mooskin';

<TabbedContent>
    <TabbedContent.Tab title="Title 1" iconClass="fa fa-icon">
        <div style={{...style, backgroundColor: '#5CCDDF'}}>
            Content 1
        </div>
    </TabbedContent.Tab>
    <TabbedContent.Tab title="Title 2" materialIcon="home">
        <div style={{...style, backgroundColor: '#F48770'}}>
            Content 2
        </div>
    </TabbedContent.Tab>
</TabbedContent>
```

## Supported attributes for ```<TabbedContent/>```

* `id` - id of the element
* `className` - css class
* `style` - extra styles for the main container


## Supported attributes for ```<Tab/>```

* `title` - (required) sets the title for the tab
* `active` - sets which tab is active, the first is active by default
* `style` -  extra styles 
* `iconClass` - a class that will be added before the title to act as an icon, for example a font awesome class
* `materialIcon` - name of the material icon to be added before the title (material icons are provided out of the box)

Allthough these attributes are supported, most of them are optional.

#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)