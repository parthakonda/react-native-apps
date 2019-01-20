import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

class CActivityIndicator extends Component {
	state = {};
	render() {
		return (
			<View>
				<ActivityIndicator size="large" color="orange" />
			</View>
		);
	}
}

export { CActivityIndicator };
