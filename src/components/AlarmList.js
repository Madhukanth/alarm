import React, { Component } from 'react';
import { Vibration, Alert } from 'react-native';
import { connect } from 'react-redux';
import DeviceBattery from 'react-native-device-battery';
import Sound from 'react-native-sound';
import timer from 'react-native-timer';
import Alarm1 from './Alarm1';
import Alarm2 from './Alarm2';
import { Header, Card, CardSection, Button } from './common';
import { fetchValues, pickerValueChanged } from '../actions/ValueSetActions';
import { fetchValues2, picker2ValueChanged } from '../actions/ValueSetActions2';

let level1 = 0;
const level2 = 100;
let level3 = 0;
let cod = '';
let dhaam = '';
let karuppana = '';
class AlarmList extends Component<{}> {
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
		this.props.fetchValues();
		this.props.fetchValues2();
		this.getBatteryStatus();
	}

	getBatteryStatus = () => {
		timer.setInterval(
			this,
			'BatteryLevel',
			() => {
				if (this.props.sliderValue === this.props.slider2Value) {
					Alert.alert('Warning', 'Slider1 and Slider2 has same Value', [
						{
							text: 'OK'
						}
					]);
				}
				DeviceBattery.getBatteryLevel().then(level => {
					level1 = level.toFixed(2);
					level3 = level1 * level2;
					this.setState({ batteryLevel: level3 });
				});

				DeviceBattery.isCharging().then(isCharging => {
					this.setState({ charging: isCharging });
				});

				if (this.props.sliderValue === this.state.batteryLevel) {
					this.props.pickerValueChanged(true);
				}
				if (this.props.slider2Value === this.state.batteryLevel) {
					this.props.picker2ValueChanged(true);
				}
				if (
					(this.props.sliderValue === this.state.batteryLevel &&
						this.props.switchValue === true) ||
					(this.props.slider2Value === this.state.batteryLevel &&
						this.props.switch2Value === true)
				) {
					if (
						this.props.sliderValue === this.state.batteryLevel &&
						this.props.checkBoxValue === true
					) {
						Vibration.vibrate();
					}
					if (
						this.props.slider2Value === this.state.batteryLevel &&
						this.props.checkBox2Value === true
					) {
						Vibration.vibrate();
					}

					if (
						this.props.songValue === 'cod' ||
						this.props.song2Value === 'cod'
					) {
						cod.play(success => {
							if (success) {
								console.log('11successfully finished playing');
							} else {
								console.log('11playback failed due to audio decoding errors');
							}
						});
					} else if (
						this.props.songValue === 'dhaam' ||
						this.props.song2Value === 'dhaam'
					) {
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
			5000
		);

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
		if (this.props.sliderValue === this.state.batteryLevel) {
			this.props.pickerValueChanged(false);
		}
		if (this.props.slider2Value === this.state.batteryLevel) {
			this.props.picker2ValueChanged(false);
		}

		if (this.props.songValue === 'cod' || this.props.song2Value === 'cod') {
			cod.stop();
		} else if (
			this.props.songValue === 'dhaam' ||
			this.props.song2Value === 'dhaam'
		) {
			dhaam.stop();
		} else {
			karuppana.stop();
		}
	};

	render() {
		return (
			<Card>
				<Header headerText="BatteryAlarm" />

				<Alarm1 />

				<Alarm2 />

				<CardSection style={{ marginTop: 45, borderBottomWidth: 0 }}>
					<Button onPress={() => this.offAlarm()}>OFF THE ALARM</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = state => ({
	sliderValue: state.valueset.sliderValue,
	switchValue: state.valueset.switchValue,
	songValue: state.valueset.songValue,
	checkBoxValue: state.valueset.checkBoxValue,
	pickerValue: state.valueset.pickerValue,
	slider2Value: state.valueset2.slider2Value,
	switch2Value: state.valueset2.switch2Value,
	song2Value: state.valueset2.song2Value,
	checkBox2Value: state.valueset2.checkBox2Value,
	picker2Value: state.valueset2.picker2Value
});

export default connect(mapStateToProps, {
	fetchValues,
	fetchValues2,
	pickerValueChanged,
	picker2ValueChanged
})(AlarmList);
