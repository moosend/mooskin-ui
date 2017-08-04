# MooSkin UI - Breadcrumbs 

The MooSkin Breadcrumbs are like a reries of steps each can have its own content.

___

### Usage

To start using the Breadcrumbs first you have to Import its two main components

```
Import {BreadcrumbsGroup, Breadcrumb} from 'mooskin';
```
or
```
import BreadcrumbsGroup, {Breadcrumb} from 'mooskin/lib/Breadcrumbs';
```

And then you can simply start using it by typing

```
<BreadcrumbsGroup>
    <Breadcrumb id="1" title="Title 1" active onCick={this.onClick}>
        <div style={{...style, backgroundColor: '#5CCDDF'}}>
            Content 1
        </div>
    </Breadcrumb>
    <Breadcrumb id="2" title="Title 2">
        <div style={{...style, backgroundColor: '#F48770'}}>
            Content 2
        </div>
    </Breadcrumb>
    <Breadcrumb id="3" title="Title 3">
        <div style={{...style, backgroundColor: '#F2C14A'}}>
            Content 3
        </div>
    </Breadcrumb>
</BreadcrumbsGroup>
```


Individual Breadcrumb components have a required 'title' prop which will be displayed in the breadcrumb header and a required unique id prop, the rest are optional. You can put whatever inside Breadcrumb tags, it will be displayed as content for that particular breadcrumb.

### Examples


Breadcrumbs with title, id, first on is 'active' and will be displayed, also has a onClick callback.

```
<BreadcrumbsGroup>
    <Breadcrumb id="1" title="Title 1" active onCick={this.onClick}>
        <div style={{...style, backgroundColor: '#5CCDDF'}}>
            Content 1
        </div>
    </Breadcrumb>
    <Breadcrumb id="2" title="Title 2">
        <div style={{...style, backgroundColor: '#F48770'}}>
            Content 2
        </div>
    </Breadcrumb>
</BreadcrumbsGroup>
```

Can be used without importing the Breadcrumb component with shorthand dot(.) notation.

```
Import {BreadcrumbsGroup} from 'mooskin';

<BreadcrumbsGroup>
    <BreadcrumbsGroup.Breadcrumb title="Title 1" id="1">
        <div style={{...style, backgroundColor: '#5CCDDF'}}>
            Content 1
        </div>
    </BreadcrumbsGroup.Breadcrumb>
    <BreadcrumbsGroup.Breadcrumb title="Title 2" id="2">
        <div style={{...style, backgroundColor: '#F48770'}}>
            Content 2
        </div>
    </BreadcrumbsGroup.Breadcrumb>
</BreadcrumbsGroup>
```

<div class="playground-doc">

## Supported attributes for BreadcrumbsGroup

* `className` - css class


## Supported attributes for Breadcrumb 

* `title` - (required) sets the title for the breadcrumb
* `id` -  (required) id
* `active` - sets which breadcrumb is active
* `onClick` - callback clicking on a breadcrumb, takes an id of the clicked breadcrumg as an argument

</div>

Allthough these attributes are supported, most of them are optional.

#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)