import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Switch } from 'react-native-switch';
import Slider from 'react-native-slider';
import CheckBox from 'react-native-checkbox';
import { Card, CardSection } from './common';
import {
	slider2Changed,
	switch2Changed,
	song2Changed,
	checkBox2Changed,
	picker2ValueChanged
} from '../actions/ValueSetActions2';
//import MusicFiles from 'react-native-get-music-files';
//import BackgroundTimer from 'react-native-background-timer';

class Alarm2 extends Component<{}> {
	render() {
		return (
			<Card style={{ marginBottom: 300 }}>
				<CardSection style={{ height: 130, borderBottomWidth: 0 }}>
					<View style={{ width: 270 }}>
						<Text
							style={{ paddingLeft: 130, fontWeight: 'bold', fontSize: 20 }}
						>
							ALARM2
						</Text>
						<Text
							style={{
								fontSize: 17,
								fontWeight: 'bold',
								justifyContent: 'flex-start',
								paddingTop: 60,
								paddingLeft: 50
							}}
						>
							Set Battery Level: {this.props.slider2Value}
						</Text>
					</View>
					<View style={{ paddingLeft: 20, marginTop: 10 }}>
						<Switch
							value={this.props.switch2Value}
							onValueChange={value => this.props.switch2Changed(value)}
							backgroundInactive={'red'}
							inActiveText={'Off'}
							barHeight={30}
							backgroundActive={'#007aff'}
							circleSize={30}
							circleBorderWidth={0}
						/>
					</View>
				</CardSection>
				<CardSection style={{ height: 25, borderBottomWidth: 0 }}>
					<View
						style={{
							justifyContent: 'center',
							paddingLeft: 5
						}}
					>
						<Slider
							minimumValue={0}
							maximumValue={100}
							step={1}
							style={{
								width: 230,
								height: 40
							}}
							value={this.props.slider2Value}
							onValueChange={level => this.props.slider2Changed(level)}
							thumbTintColor={'#007aff'}
							minimumTrackTintColor={'#007aff'}
							maximumTrackTintColor={'grey'}
							thumbTouchSize={{ width: 100, height: 90 }}
						/>
					</View>
				</CardSection>

				<CardSection style={{ height: 40 }}>
					<Picker
						style={{
							color: '#007aff',
							borderWidth: 5,
							borderColor: '#007aff',
							width: 235,
							height: 40
						}}
						selectedValue={this.props.song2Value}
						onValueChange={selected => this.props.song2Changed(selected)}
						enabled={this.props.picker2Value}
					>
						<Picker.Item label="codplay" value="cod" />
						<Picker.Item label="Dhaam Dhoom" value="dhaam" />
						<Picker.Item label="karuppana" value="karuppana" />
					</Picker>

					<View style={{ marginLeft: 35, marginBottom: 5 }}>
						<CheckBox
							label="Vibrate"
							labelStyle={{ color: '#007aff', fontWeight: 'bold' }}
							checked={this.props.checkBox2Value}
							onChange={checked => this.props.checkBox2Changed(checked)}
						/>
					</View>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = state => ({
	slider2Value: state.valueset2.slider2Value,
	switch2Value: state.valueset2.switch2Value,
	song2Value: state.valueset2.song2Value,
	checkBox2Value: state.valueset2.checkBox2Value,
	pickerValue: state.valueset2.picker2Value
});

export default connect(mapStateToProps, {
	slider2Changed,
	switch2Changed,
	song2Changed,
	checkBox2Changed,
	picker2ValueChanged
})(Alarm2);
