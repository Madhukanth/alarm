import React, { Component } from 'react';
import { View } from 'react-native';
import Alarm1 from './Alarm1';
import Alarm2 from './Alarm2';
import { Header, Card, Button } from './common';

class AlarmList extends Component<{}> {
	render() {
		return (
			<Card>
				<Header headerText="BatteryAlarm" />
				<Alarm1 />
				<Alarm2 />
				<View
					style={{
						justifyContent: 'center',

						height: 30
					}}
				>
					<Button onPress={() => this.offAlarm()}>OFF THE ALARM</Button>
				</View>
			</Card>
		);
	}
}
export default AlarmList;
