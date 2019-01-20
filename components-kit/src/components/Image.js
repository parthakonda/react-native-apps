import React, { Component } from 'react';

import { Image, View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	ImageStyle: {
		height: 50,
		width: 50,
		borderRadius: 50
	}
});
class CImage extends Component {
	render() {
		return (
			<View>
				<Text> Raw Image from local resource</Text>
				<Image source={require('../../assets/partha.jpg')} />

				<Text> Image with style</Text>
				<Image
					source={require('../../assets/partha.jpg')}
					style={{ height: 40, width: 40, borderRadius: 50 }}
				/>

				<Text> Image with stylesheet</Text>
				<Image source={require('../../assets/partha.jpg')} style={styles.ImageStyle} />
			</View>
		);
	}
}

export { CImage };
