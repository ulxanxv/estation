'use strict';

import ExtReactDOM from '@sencha/ext-react-modern';
import { FormPanel, CheckBoxField } from '@sencha/ext-react-modern';

const React = require('react');
const client = require('./client');

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

class EmployeeList extends React.Component{
	render() {
		const employees = this.props.employees.map(employee =>
			<Employee key={employee._links.self.href} employee={employee}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Description</th>
					</tr>
					{employees}
				</tbody>
			</table>
		)
	}
}

class Employee extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.employee.firstName}</td>
				<td>{this.props.employee.lastName}</td>
				<td>{this.props.employee.description}</td>
			</tr>
		)
	}
}

const Ext = window['Ext'];
Ext.onReady(() => {
	ExtReactDOM.render(<App />, document.getElementById('react'));
	ExtReactDOM.render(<Fox />, document.getElementById('fox'));
});
