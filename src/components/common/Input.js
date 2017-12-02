import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
	const { inputStyle, lableStyle, containerStyle } = styles;
	return (
		<View style={containerStyle}>
			<Text style={lableStyle}>
				{label}
			</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	);
};

const styles = {
	inputStyle: {
		color: 'black',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 20,
		lineHeight: 5,
		flex: 2,
		height: 40
	},
	lableStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1,
		color: 'black'
	},
	containerStyle: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
};
export { Input };
