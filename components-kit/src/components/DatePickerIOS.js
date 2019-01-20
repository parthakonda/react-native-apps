import React, { Component } from 'react';
import { View, DatePickerIOS } from 'react-native';

class CDatePickerIOS extends Component {
	state = {};
	render() {
		return (
			<View>
				<DatePickerIOS />
			</View>
		);
	}
}

export { CDatePickerIOS };
