import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { CImage, CButton, CActivityIndicator, CDatePickerIOS } from './src/components';

export default class App extends React.Component {
	render() {
		return (
			<View>
				<Text>Image Component</Text>
				<CImage />
				<CButton />
				<CActivityIndicator />
				<CDatePickerIOS />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
