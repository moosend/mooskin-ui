# MooSkin UI - RadioTabs Component

The MooSkin RadioTabs Component is like a tabbed window, with as many radio tabs as you like.

___

### Usage

To start using the RadioTabs Component first you have to Import its two main components

```
Import {RadioTabs, RadioTabContent} from 'mooskin';
```
or
```
import RadioTabs, {RadioTabContent} from 'mooskin/lib/RadioTabs';
```

And then you can simply start using it by typing

```
<RadioTabs>
    <RadioTabContent title="Title 1" active>
        <div style={{...style, backgroundColor: '#5CCDDF'}}>
            Content 1
        </div>
    </RadioTabContent>
    <RadioTabContent title="Title 2">
        <div style={{...style, backgroundColor: '#F48770'}}>
            Content 2
        </div>
    </RadioTabContent>
    <RadioTabContent title="Title 3">
        <div style={{...style, backgroundColor: '#F2C14A'}}>
            Content 3
        </div>
    </RadioTabContent>
</RadioTabs>
```


Individual <RadioTabContent> components has a required 'title' prop which will be displayed in the radio header, the rest are optional. You can put whatever inside <Content> tags, it will be displayed as content for that particular tab.

### Examples

Can be used without importing the <RadioTabContent> component with shorthand dot(.) notation.

```
Import {RadioTabs} from 'mooskin';

<RadioTabs>
    <RadioTabs.RadioTabContent title="Title 1" iconClass="fa fa-icon">
        <div style={{...style, backgroundColor: '#5CCDDF'}}>
            Content 1
        </div>
    </RadioTabs.RadioTabContent>
    <RadioTabs.RadioTabContent title="Title 2" materialIcon="home">
        <div style={{...style, backgroundColor: '#F48770'}}>
            Content 2
        </div>
    </RadioTabs.RadioTabContent>
</RadioTabs>
```

an alternative view style can be toggled by passing the `horizontal` attribute to the <RadioTabs> component

```
Import {RadioTabContent, RadioTabs} from 'mooskin';

<RadioTabs horizontal>
    <RadioTabContent title="Title 1" iconClass="fa fa-icon">
        <div style={{...style, backgroundColor: '#5CCDDF'}}>
            Content 1
        </div>
    </RadioTabContent>
    <RadioTabContent title="Title 2" materialIcon="home">
        <div style={{...style, backgroundColor: '#F48770'}}>
            Content 2
        </div>
    </RadioTabContent>
</RadioTabs>
```

## Supported attributes for ```<RadioTabs/>```

* `id` - id of the element
* `className` - css class
* `style` - extra styles for the main container
* `horizontal` - horizontal style of view for the RadioTabs


## Supported attributes for ```<RadioTabContent/>```

* `title` - (required) sets the title for the radio tab
* `active` - sets which radio tab is active, the first is active by default
* `style` -  extra styles 

Allthough these attributes are supported, most of them are optional.

___

#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)
