# MooSkin UI - Steps 

The MooSkin Steps component are like a series of steps where each can have its own content.

___

### Usage

To start using the Steps component first you have to Import its two main components

```
Import {Steps, Step} from '@moosend/mooskin';
```
or modular import
```
// JS
import Steps, {Step} from '@moosend/mooskin/lib/Steps';

// CSS
import '@moosend/mooskin/lib/Steps/style.css';
```

And then you can simply start using it by typing

```
<Steps>
    <Step id="1" title="Title 1" active onCick={this.onClick}>
        <div style={{...style, backgroundColor: '#5CCDDF'}}>
            Content 1
        </div>
    </Step>
    <Step id="2" title="Title 2">
        <div style={{...style, backgroundColor: '#F48770'}}>
            Content 2
        </div>
    </Step>
    <Step id="3" title="Title 3">
        <div style={{...style, backgroundColor: '#F2C14A'}}>
            Content 3
        </div>
    </Step>
</Steps>
```


Individual Step components have a required 'title' prop which will be displayed in the header and a required unique id prop, the rest are optional. You can put whatever inside Step tags, it will be displayed as content for that particular step.

### Examples


Steps with title, id, first on is 'active' and will be displayed, also has a onClick callback.

```
<Steps>
    <Step id="1" title="Title 1" active onCick={this.onClick}>
        <div style={{...style, backgroundColor: '#5CCDDF'}}>
            Content 1
        </div>
    </Step>
    <Step id="2" title="Title 2">
        <div style={{...style, backgroundColor: '#F48770'}}>
            Content 2
        </div>
    </Step>
</Steps>
```

Can be used without importing the Step component component with shorthand dot(.) notation.

```
Import {Steps} from '@moosend/mooskin';

<Steps>
    <Steps.Step title="Title 1" id="1">
        <div style={{...style, backgroundColor: '#5CCDDF'}}>
            Content 1
        </div>
    </Steps.Step>
    <Steps.Step title="Title 2" id="2">
        <div style={{...style, backgroundColor: '#F48770'}}>
            Content 2
        </div>
    </Steps.Step>
</Steps>
```

<div class="playground-doc">

## Supported attributes for Steps

* `className` - css class


## Supported attributes for Step 

* `title` - (required) sets the title for the step
* `id` -  (required) id
* `active` - sets which step is active
* `onClick` - callback clicking on a step, takes an id of the clicked step as an argument

</div>

Allthough these attributes are supported, most of them are optional.

#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)