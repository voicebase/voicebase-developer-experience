var ToggleableButton = (function() {
  'use strict';

  var buttonOuterIdPrefix     = 'toggleable-button';
  var buttonInnerIdPrefix     = 'toggleable-button-inner';
  var buttonInnerTextIdPrefix = 'toggleable-button-inner-text';
  var buttonHandleIdPrefix    = 'toggleable-button-handle';
  var innerCheckboxIdPrefix   = 'toggleable-button-checkbox';
  var inputIds                = [];
  var buttonNodes             = [];
  var buttonStates            = [];
  var defaultButtonState      = true;
  var instanceCount           = 0;
  var onStateValue            = 'on';
  var offStateValue           = 'off';

  /**
   * Initializes the library
   */
  var init = function(options) {
    if (options !== undefined) {
      onStateValue  = (options.onStateValue  !== undefined) ? options.onStateValue  : onStateValue;
      offStateValue = (options.offStateValue !== undefined) ? options.offStateValue : offStateValue;
    }

    var buttonOuter;
    var buttonInner;
    var buttonInnerText;
    var buttonHandle;

    buttonNodes = document.querySelectorAll('.toggleable-button');

    instanceCount = buttonNodes.length;

    for (var i = 0; i < instanceCount; ++i) {
      buttonOuter = document.createElement('div');
      buttonOuter.setAttribute('id', buttonOuterIdPrefix + '_' + i);

      if (buttonNodes[i].className.search('tb-2x') > -1) {
        buttonOuter.setAttribute('class', 'toggleable-button-outer zoom-2');
      }
      else if (buttonNodes[i].className.search('tb-3x') > -1) {
        buttonOuter.setAttribute('class', 'toggleable-button-outer zoom-3');
      }
      else {
        buttonOuter.setAttribute('class', 'toggleable-button-outer');
      }

      buttonOuter.setAttribute('onclick', 'ToggleableButton.toggle("' + i + '")');

      buttonInner = document.createElement('div');
      buttonInner.setAttribute('id', buttonInnerIdPrefix + '_' + i);
      buttonInner.setAttribute('class', 'toggleable-button-inner');

      buttonInnerText = document.createElement('div');
      buttonInnerText.setAttribute('id', buttonInnerTextIdPrefix + '_' + i);
      buttonInnerText.setAttribute('class', 'toggleable-button-inner-text');

      buttonHandle = document.createElement('div');
      buttonHandle.setAttribute('id', buttonHandleIdPrefix + '_' + i);
      buttonHandle.setAttribute('class', 'toggleable-button-handle');

      buttonNodes[i].parentNode.insertBefore(buttonOuter, buttonNodes[i].nextSibling);
      document.getElementById(buttonOuterIdPrefix + '_' + i).appendChild(buttonInner);
      document.getElementById(buttonInnerIdPrefix + '_' + i).appendChild(buttonHandle);
      document.getElementById(buttonInnerIdPrefix + '_' + i).appendChild(buttonInnerText);

      if (buttonNodes[i].id === '') {
        buttonNodes[i].setAttribute('id', 'toggleable-button' + '_' + i);
      }

      inputIds[i] = buttonNodes[i].id;

      loadCurrentButtonState(i);
    }
  };

  /**
   * Loads current button state
   */
  var loadCurrentButtonState = function(instanceId) {
    var inputCheckbox = document.getElementById(inputIds[instanceId]);

    buttonStates[instanceId] = (inputCheckbox.checked !== false);

    setButtonPosition(buttonStates[instanceId], instanceId);
  };

  /**
   * Sets button position
   */
  var setButtonPosition = function(status, instanceId) {
    var buttonHandle    = document.getElementById(buttonHandleIdPrefix    + '_' + instanceId);
    var buttonInner     = document.getElementById(buttonInnerIdPrefix     + '_' + instanceId);
    var buttonInnerText = document.getElementById(buttonInnerTextIdPrefix + '_' + instanceId);
    var inputCheckbox   = document.getElementById(inputIds[instanceId]);

    if (status) {
      buttonInner.classList.remove('toggleable-button-off');
      buttonInner.classList.add('toggleable-button-on');
      buttonInnerText.innerHTML = onStateValue;
      inputCheckbox.click();
    } else {
      buttonInner.classList.remove('toggleable-button-on');
      buttonInner.classList.add('toggleable-button-off');
      buttonInnerText.innerHTML = offStateValue;
      inputCheckbox.click();
    }
  };

  /**
   * Toggles
   */
  var toggle = function(instanceId) {
    // Turn on
    buttonStates[instanceId] = (!buttonStates[instanceId]);

    setButtonPosition(buttonStates[instanceId], instanceId);
  };

  return {
    init   : function(options) { return init(options); },
    toggle : function(id) { return toggle(id); }
  };
})();
