# MooSkin UI - Button Component

___

### Usage

To start using the TopNotification Component first you have to Import it

```
Import {TopNotification} from 'mooskin';
```
or
```
import TopNotification from 'mooskin/lib/TopNotification';
```

And then you can simply start using it by typing

```
<TopNotification attribute1="atr" attribute2="asd" />
```


### Examples


Custom type notification, with both buttons

```
<TopNotification
    text="Are you sure you want save this?"
    visible={true}
    type="custom"
    okButton
    cancelButton
/>
```

Error type

```
<TopNotification text="Save failed!!" visible={true} type="error"/>
```

You can give it callbacks for clicking on any of the buttons

```
<TopNotification text="Save failed!!" visible={true} type="error" onCLickOK={this.onClickOk} onCLickCancel={this.onClickOk}/>
```

<div class="playground-doc">

## Supported attributes

* `id` - id of the element
* `type` - notification type, can be 'error', 'success' or 'custom'
* `visible` - boolean to tell if the notification should be displayed or not
* `className` - css class
* `text` - text shown inside
* `style` - style
* `onClickOk` - callback to be triggered on OK button click
* `onClickCancel` - callback to be triggered on Cancel button click
* `okButtonLabel` - label shown on the ok button
* `okButton` - boolean to tell if the Ok button should appear
* `cancelButton` - boolean to tell if the Cancel button should appear

</div>

Allthough these attributes are supported, all of them are optional.


#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)