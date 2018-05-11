/*
Name: tertium.tooltip
Description: Tooltip for html-fields.
Author: Vitaliy Balabanov
Email: tertiumnon@gmail.com
*/

function addTooltip(target, obj) {
  var div = document.createElement('div');
  div.classList.add('tertium-tooltip');
  if (obj.type === 'error') {
    div.classList.add('error');
    target.classList.add('tertium-tooltip-input-error');
  } else if (obj.type === 'success') {
    div.classList.add('success');
    target.classList.add('tertium-tooltip-input-success');
  } else if (obj.type === 'info') {
    div.classList.add('info');
    target.classList.add('tertium-tooltip-input-info');
  }
  div.innerHTML = obj.title;
  target.parentElement.appendChild(div);
}

function removeTooltip(target, obj) {
  if (obj.type === 'error') {
    target.classList.remove('tertium-tooltip-input-error');
  } else if (obj.type === 'success') {
    target.classList.remove('tertium-tooltip-input-success');
  } else if (obj.type === 'info') {
    target.classList.remove('tertium-tooltip-input-info');
  }
  var parent = target.parentElement;
  var tooltip = parent.querySelector('.tertium-tooltip');
  if (tooltip) parent.removeChild(tooltip);
}

export default function TertiumTooltip(obj) {
  var objects = obj.objects;
  if (objects.length) {
    for (var i = 0; i < objects.length; i++) {
      var target = objects[i];
      // property: onchange
      if (obj.onchange) {
        target.addEventListener('change', function (e) {
          var condition = obj.onchange(e.target);
          if (obj.result === true && condition || obj.result === false && !condition) {
            removeTooltip(e.target, obj);
            addTooltip(e.target, obj);
          } else {
            removeTooltip(e.target, obj);
          }
          // property: autoclose
          if (obj.autoclose) {
            if (obj.sto) {
              clearTimeout(obj.sto);
            }
            obj.sto = setTimeout(function (e) {
              removeTooltip(target, obj);
            }, obj.autoclose);
          }
        });
      }
    }
  }
}
