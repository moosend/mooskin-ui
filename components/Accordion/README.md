# MooSkin UI - Accordion Component

The MooSkin Accordion Component is like a tabbed window, similar to RadioTabs component, with as many radio tabs as you like.

___

### Usage

To start using the Accordion Component first you have to Import its two main components

```
Import {RadioTabs, Content} from 'mooskin';
```
or
```
import Accordion, {Content} from 'mooskin/lib/Accordion';
```

And then you can simply start using it by typing

```
<Accordion>
    <Content title="Title 1" active>
        <div style={{...style, backgroundColor: '#5CCDDF'}}>
            Content 1
        </div>
    </Content>
    <Content title="Title 2">
        <div style={{...style, backgroundColor: '#F48770'}}>
            Content 2
        </div>
    </Content>
    <Content title="Title 3">
        <div style={{...style, backgroundColor: '#F2C14A'}}>
            Content 3
        </div>
    </Content>
</Accordion>
```


Individual <Content> components has a required 'title' prop which will be displayed in the radio header, the rest are optional. You can put whatever inside <Content> tags, it will be displayed as content for that particular tab.

### Examples

Can be used without importing the <Content> component with shorthand dot(.) notation.

```
Import {Accordion} from 'mooskin';

<Accordion>
    <Accordion.Content title="Title 1" iconClass="fa fa-icon">
        <div style={{...style, backgroundColor: '#5CCDDF'}}>
            Content 1
        </div>
    </Accordion.Content>
    <Accordion.Content title="Title 2" materialIcon="home">
        <div style={{...style, backgroundColor: '#F48770'}}>
            Content 2
        </div>
    </Accordion.Content>
</Accordion>
```

```
Import {Content, Accordion} from 'mooskin';

<Accordion horizontal>
    <Content title="Title 1" iconClass="fa fa-icon">
        <div style={{...style, backgroundColor: '#5CCDDF'}}>
            Content 1
        </div>
    </Content>
    <Content title="Title 2" materialIcon="home">
        <div style={{...style, backgroundColor: '#F48770'}}>
            Content 2
        </div>
    </Content>
</Accordion>
```

## Supported attributes for ```<Accordion/>```

* `id` - id of the element
* `className` - css class
* `style` - extra styles for the main container


## Supported attributes for ```<Content/>```

* `title` - (required) sets the title for the radio tab
* `active` - sets which radio tab is active, the first is active by default
* `style` -  extra styles 

Allthough these attributes are supported, most of them are optional.

___

#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)