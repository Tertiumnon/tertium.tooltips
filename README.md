# tertium.tooltips

## Installation

~~~~
<link href="~/tertium.tooltips.css" rel="stylesheet">
<script src="~/tertium.tooltips.js"></script>
~~~~

## Parameters

* objects // object: inputs array
* title // string: result message
* type // string: 'success', 'error', 'info'
* autoclose // integer: milliseconds
* result // boolean: result you need
* onchange // function(i): event 'on change' (return boolean)

## Example

### HTML

<input type="text" name="itext" class="inputText" placeholder="Enter Hello, world!">

### JS

~~~~
TertiumTooltip({
  objects: document.getElementsByClassName('inputText'),
  title: 'Success! Congratulations!<br/>This message will close automatically close after 10 sec.',
  type: 'success',
  autoclose: 10000,
  result: true,
  onchange: function (i) {
    if (i.value === "Hello, world!") {
      return true;
    }
  }
});
~~~~
