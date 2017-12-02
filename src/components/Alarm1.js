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
	sliderChanged,
	switchChanged,
	songChanged,
	checkBoxChanged
} from '../actions/ValueSetActions';
//import MusicFiles from 'react-native-get-music-files';
//import BackgroundTimer from 'react-native-background-timer';

let level1 = 0;
const level2 = 100;
let level3 = 0;
let cod = '';
let dhaam = '';
let karuppana = '';

class Alarm1 extends Component<{}> {
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
					this.props.sliderValue === this.state.batteryLevel &&
					this.props.switchValue === true &&
					this.props.checkBoxValue === true
				) {
					Vibration.vibrate();
					if (this.props.songValue === 'cod') {
						cod.play(success => {
							if (success) {
								console.log('11successfully finished playing');
							} else {
								console.log('11playback failed due to audio decoding errors');
							}
						});
					} else if (this.props.songValue === 'dhaam') {
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

		if (this.props.checkBoxValue === false) {
			Vibration.cancel();
		}

		if (this.props.songValue === 'cod') {
			cod.stop();
		} else if (this.props.songValue === 'dhaam') {
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
		if (this.props.songValue === 'cod') {
			cod.stop();
		} else if (this.props.songValue === 'dhaam') {
			dhaam.stop();
		} else {
			karuppana.stop();
		}
	};

	render() {
		return (
			<Card>
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
							Set Battery Level: {this.props.sliderValue}
						</Text>
					</View>
					<View style={{ paddingLeft: 20, marginTop: 10 }}>
						<Switch
							value={this.props.switchValue}
							onValueChange={value => this.props.switchChanged(value)}
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
							value={this.props.sliderValue}
							onValueChange={level => this.props.sliderChanged(level)}
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
						selectedValue={this.props.songValue}
						onValueChange={selected => this.props.songChanged(selected)}
					>
						<Picker.Item label="codplay" value="cod" />
						<Picker.Item label="Dhaam Dhoom" value="dhaam" />
						<Picker.Item label="karuppana" value="karuppana" />
					</Picker>

					<View style={{ marginLeft: 35, marginBottom: 5 }}>
						<CheckBox
							label="Vibrate"
							labelStyle={{ color: '#007aff', fontWeight: 'bold' }}
							checked={this.props.checkBoxValue}
							onChange={checked => this.props.checkBoxChanged(checked)}
						/>
					</View>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = state => ({
	sliderValue: state.valueset.sliderValue,
	switchValue: state.valueset.switchValue,
	songValue: state.valueset.songValue,
	checkBoxValue: state.valueset.checkBoxValue
});

export default connect(mapStateToProps, {
	sliderChanged,
	switchChanged,
	songChanged,
	checkBoxChanged
})(Alarm1);
