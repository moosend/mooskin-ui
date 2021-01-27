# MooSkin UI - Accordion Component

The MooSkin Accordion Component is like a tabbed window, similar to RadioTabs component, with as many radio tabs as you like.

___

### Usage

To start using the Accordion Component first you have to Import its two main components

```
Import {RadioAccordion, RadioAccordionContent} from '@moosend/mooskin';
```
or modular import
```
// JS
import RadioAccordion, {RadioAccordionContent} from '@moosend/mooskin/lib/RadioAccordion';

// CSS
import '@moosend/mooskin/lib/RadioAccordion/style.css';
```

And then you can simply start using it by typing

```
<RadioAccordion>
    <RadioAccordionContent title="Title 1" active>
        <div style={{...style, backgroundColor: '#5CCDDF'}}>
            Content 1
        </div>
    </RadioAccordionContent>
    <RadioAccordionContent title="Title 2">
        <div style={{...style, backgroundColor: '#F48770'}}>
            Content 2
        </div>
    </RadioAccordionContent>
    <RadioAccordionContent title="Title 3">
        <div style={{...style, backgroundColor: '#F2C14A'}}>
            Content 3
        </div>
    </RadioAccordionContent>
</RadioAccordion>
```


Individual <RadioAccordionContent> components has a required 'title' prop which will be displayed in the radio header, the rest are optional. You can put whatever inside <Content> tags, it will be displayed as content for that particular tab.

### Examples

Can be used without importing the <RadioAccordionContent> component with shorthand dot(.) notation.

```
Import {RadioAccordion} from '@moosend/mooskin';

<RadioAccordion>
    <RadioAccordion.RadioAccordionContent title="Title 1" iconClass="fa fa-icon">
        <div style={{...style, backgroundColor: '#5CCDDF'}}>
            Content 1
        </div>
    </RadioAccordion.RadioAccordionContent>
    <RadioAccordion.Content title="Title 2" materialIcon="home">
        <div style={{...style, backgroundColor: '#F48770'}}>
            Content 2
        </div>
    </RadioAccordion.RadioAccordionContent>
</RadioAccordion>
```

```
Import {RadioAccordionContent, RadioAccordion} from '@moosend/mooskin';

<RadioAccordion horizontal>
    <RadioAccordionContent title="Title 1" iconClass="fa fa-icon">
        <div style={{...style, backgroundColor: '#5CCDDF'}}>
            Content 1
        </div>
    </RadioAccordionContent>
    <RadioAccordionContent title="Title 2" materialIcon="home">
        <div style={{...style, backgroundColor: '#F48770'}}>
            Content 2
        </div>
    </RadioAccordionContent>
</RadioAccordion>
```

<div class="playground-doc">

## Supported attributes for RadioAccordion 

* `id` - id of the element
* `alternate` - alternate styling for headers
* `className` - css class
* `style` - extra styles for the main container


## Supported attributes for RadioAccordionContent 

* `title` - (required) sets the title for the radio tab
* `active` - sets which radio tab is active, the first is active by default
* `onClick` - onClick callback when radio header is clicked
* `style` -  extra styles 

</div>

Allthough these attributes are supported, most of them are optional.

___

#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)