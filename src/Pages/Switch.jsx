import React from 'react';
import SwitchToggle from '@rakuten-rex/switch';
import SwitchToggleGroup from '@rakuten-rex/switch/SwitchToggleGroup';

export default function Index() {
  return (
    <>
      <h1>Switch</h1>
      <h2>Single</h2>
      <SwitchToggle id='switch1' label='Toggle this switch element' name='pet' value='dog' className='customClasss' />
      <h2>Group</h2>
      <SwitchToggleGroup options={[{ "id": "choice1", "name": "setting", "value": "airplane", "label": "Airplane Mode", "checked": false, "disabled": false, "ariaChecked": false }, { "id": "choice2", "name": "setting", "value": "notification", "label": "Notification", "checked": true, "disabled": false, "ariaChecked": true }, { "id": "choice5", "name": "setting", "value": "onoff", "label": "Show lists", "checked": false, "disabled": true, "ariaChecked": false }]} />
      <h2>Theme</h2>
      <SwitchToggleGroup options={[{ "id": "choice1", "name": "setting", "value": "airplane", "label": "Airplane Mode", "className": "customClasss", "checked": false, "disabled": false, "ariaChecked": false }, { "id": "choice2", "name": "setting", "value": "notification", "label": "Notification", "className": "customClasss", "checked": true, "disabled": false, "ariaChecked": true }, { "id": "choice5", "name": "setting", "value": "onoff", "label": "Show lists", "className": "customClasss", "checked": false, "disabled": true, "ariaChecked": false }]} style={{
        "--rex-switch-theme": "#bf0000",
        "--rex-switch-default": "#cccccc",
        "--rex-switch-label": "#333333",
        "--rex-switch-disabled-text": "#d1d1d1",
        "--rex-switch-disabled-background": "#dddddd"
      }} />
    </>
  );
}
