'use strict';

import ExtReactDOM from '@sencha/ext-react-modern';
import { FormPanel, CheckBoxField } from '@sencha/ext-react-modern';

const React = require('react');

class App extends React.Component {
	render() {
		return (
			<FormPanel shadow layout={{type: 'vbox', align: 'left'}} bodyPadding="10">
				<CheckBoxField boxLabel="Unchecked"/>
				<CheckBoxField boxLabel="Checked" checked/>
				<CheckBoxField boxLabel="Disabled" disabled/>
				<CheckBoxField boxLabel="Disabled (checked)" disabled checked/>
			</FormPanel>
		)
	}
}

class Fox extends React.Component {
	render() {
		return (
			<FormPanel shadow layout={{type: 'vbox', align: 'left'}} bodyPadding="10">
				<CheckBoxField boxLabel="ABCD"/>
				<CheckBoxField boxLabel="ABCD" checked/>
				<CheckBoxField boxLabel="ABCD" disabled/>
				<CheckBoxField boxLabel="ABCD (checked)" disabled checked/>
			</FormPanel>
		)
	}
}

const Ext = window['Ext'];
Ext.onReady(() => {
	ExtReactDOM.render(<App />, document.getElementById('react'));
	ExtReactDOM.render(<Fox />, document.getElementById('fox'));
});
