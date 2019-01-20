import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

class CButton extends Component {
	state = {};

	handleSampleButtonPress = () => {
		console.log('Button Pressed');
	};
	render() {
		return (
			<View>
				<Text>Sample Button</Text>
				<Button title="Sample" onPress={this.handleSampleButtonPress} color="orange" />
			</View>
		);
	}
}

export { CButton };
