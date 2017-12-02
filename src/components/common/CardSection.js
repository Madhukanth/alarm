import React from 'react';
import { View } from 'react-native';

const CardSection = props => (
	<View style={[styles.containerStyle, props.style]}>{props.children}</View>
);

const styles = {
	containerStyle: {
		borderBottomWidth: 2,
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: 'black',
		position: 'relative',
		height: 60
	}
};
export { CardSection };
