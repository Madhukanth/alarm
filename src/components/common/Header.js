import React from 'react';
import { Text, View } from 'react-native';

const Header = props => {
	const { textStyle, viewStyle } = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#007aff',
		justifyContent: 'center',
		height: 50,
		paddingTop: 5,
		marginTop: 2,
		//paddingLeft: 130,
		borderWidth: 1,
		borderRadius: 5,
		borderColor: '#007aff',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { Width: 1, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 1
	},
	textStyle: {
		fontSize: 23,
		alignSelf: 'center',
		color: 'white'
	}
};

export { Header };
