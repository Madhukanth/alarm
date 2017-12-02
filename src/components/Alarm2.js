import React, { Component } from 'react';
import { Text, View, Picker, Vibration } from 'react-native';
import { connect } from 'react-redux';
import DeviceBattery from 'react-native-device-battery';
import { Switch } from 'react-native-switch';
import timer from 'react-native-timer';
import Slider from 'react-native-slider';
import Sound from 'react-native-sound';
import CheckBox from 'react-native-checkbox';
import { Card, CardSection } from './common';
import {
	slider2Changed,
	switch2Changed,
	song2Changed,
	checkBox2Changed
} from '../actions/ValueSetActions2';
//import MusicFiles from 'react-native-get-music-files';
//import BackgroundTimer from 'react-native-background-timer';

let level1 = 0;
const level2 = 100;
let level3 = 0;
let cod = '';
let dhaam = '';
let karuppana = '';

class Alarm2 extends Component<{}> {
	constructor(props) {
		super(props);

		DeviceBattery.getBatteryLevel().then(level => {
			level1 = level.toFixed(2);
			level3 = level1 * level2;
			this.setState({ batteryLevel: level3 });
		});

		cod = new Sound('codplay.mp3', Sound.MAIN_BUNDLE, error => {
			if (error) {
				console.log(error);
				return;
			}
			console.log(cod);
		});
		dhaam = new Sound('dhaam.mp3', Sound.MAIN_BUNDLE, error => {
			if (error) {
				console.log(error);
				return;
			}
			console.log(dhaam);
		});
		karuppana = new Sound('karuppana.mp3', Sound.MAIN_BUNDLE, error => {
			if (error) {
				console.log(error);
				return;
			}
			console.log(karuppana);
		});
	}
	state = {
		batteryLevel: null,
		charging: null
	};

	componentWillMount() {
		this.getBatteryStatus();
	}

	getBatteryStatus = () => {
		timer.setInterval(
			this,
			'BatteryLevel',
			() => {
				DeviceBattery.getBatteryLevel().then(level => {
					level1 = level.toFixed(2);
					level3 = level1 * level2;
					this.setState({ batteryLevel: level3 });
				});

				DeviceBattery.isCharging().then(isCharging => {
					this.setState({ charging: isCharging });
				});

				if (
					this.props.slider2Value === this.state.batteryLevel &&
					this.props.switch2Value === true &&
					this.props.checkBox2Value === true
				) {
					Vibration.vibrate();
					if (this.props.song2Value === 'cod') {
						cod.play(success => {
							if (success) {
								console.log('11successfully finished playing');
							} else {
								console.log('11playback failed due to audio decoding errors');
							}
						});
					} else if (this.props.song2Value === 'dhaam') {
						dhaam.play(success => {
							if (success) {
								console.log('22successfully finished playing');
							} else {
								console.log('22playback failed due to audio decoding errors');
							}
						});
					} else {
						karuppana.play(success => {
							if (success) {
								console.log('33successfully finished playing');
							} else {
								console.log('33playback failed due to audio decoding errors');
							}
						});
					}
				}
			},
			3000
		);

		if (this.props.checkBox2Value === false) {
			Vibration.cancel();
		}

		if (this.props.song2Value === 'cod') {
			cod.stop();
		} else if (this.props.song2Value === 'dhaam') {
			dhaam.stop();
		} else {
			karuppana.stop();
		}
		const onBatteryStateChanged = state => {
			console.log(state);
		};

		DeviceBattery.addListener(onBatteryStateChanged);
		// 	MusicFiles.get(
		// 		success => {
		// 			console.log(success);
		// 		},
		//
		// 		error => {
		// 			console.log(error);
		// 		}
		// 	);
	};
	offAlarm = () => {
		Vibration.cancel();
		if (this.props.song2Value === 'cod') {
			cod.stop();
		} else if (this.props.song2Value === 'dhaam') {
			dhaam.stop();
		} else {
			karuppana.stop();
		}
	};

	render() {
		return (
			<Card style={{ marginBottom: 300 }}>
				<CardSection style={{ height: 40, borderBottomWidth: 0 }}>
					<View style={{ width: 270 }}>
						<Text
							style={{
								fontSize: 17,
								fontWeight: 'bold',
								justifyContent: 'flex-start',
								paddingTop: 10,
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

const mapStateToProps = state2 => ({
	slider2Value: state2.valueset2.slider2Value,
	switch2Value: state2.valueset2.switch2Value,
	song2Value: state2.valueset2.song2Value,
	checkBox2Value: state2.valueset2.checkBox2Value
});

export default connect(mapStateToProps, {
	slider2Changed,
	switch2Changed,
	song2Changed,
	checkBox2Changed
})(Alarm2);
