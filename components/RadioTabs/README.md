# MooSkin UI - RadioTabs Component

The MooSkin RadioTabs Component is like a tabbed window, with as many radio tabs as you like.

___

### Usage

To start using the RadioTabs Component first you have to Import its two main components

```
Import {RadioTabs, Content} from 'mooskin';
```
or
```
import RadioTabs, {Content} from 'mooskin/lib/RadioTabs';
```

And then you can simply start using it by typing

```
<RadioTabs>
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
</RadioTabs>
```


Individual <Content> components has a required 'title' prop which will be displayed in the radio header, the rest are optional. You can put whatever inside <Content> tags, it will be displayed as content for that particular tab.

### Examples

Can be used without importing the <Content> component with shorthand dot(.) notation.

```
Import {RadioTabs} from 'mooskin';

<RadioTabs>
    <RadioTabs.Content title="Title 1" iconClass="fa fa-icon">
        <div style={{...style, backgroundColor: '#5CCDDF'}}>
            Content 1
        </div>
    </RadioTabs.Content>
    <RadioTabs.Content title="Title 2" materialIcon="home">
        <div style={{...style, backgroundColor: '#F48770'}}>
            Content 2
        </div>
    </RadioTabs.Content>
</RadioTabs>
```

an alternative view style can be toggled by passing the `horizontal` attribute to the <RadioTabs> component

```
Import {Content, RadioTabs} from 'mooskin';

<RadioTabs horizontal>
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
</RadioTabs>
```

## Supported attributes for ```<RadioTabs/>```

* `id` - id of the element
* `className` - css class
* `style` - extra styles for the main container
* `horizontal` - horizontal style of view for the RadioTabs


## Supported attributes for ```<Content/>```

* `title` - (required) sets the title for the radio tab
* `active` - sets which radio tab is active, the first is active by default
* `style` -  extra styles 

Allthough these attributes are supported, most of them are optional.

___

#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)
