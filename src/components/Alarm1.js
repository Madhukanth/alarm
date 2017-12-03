import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Switch } from 'react-native-switch';
import Slider from 'react-native-slider';
import CheckBox from 'react-native-checkbox';
import { Card, CardSection } from './common';
import {
	sliderChanged,
	switchChanged,
	songChanged,
	checkBoxChanged,
	pickerValueChanged
} from '../actions/ValueSetActions';
//import MusicFiles from 'react-native-get-music-files';
//import BackgroundTimer from 'react-native-background-timer';

class Alarm1 extends Component {
	render() {
		return (
			<Card>
				<CardSection style={{ height: 130, borderBottomWidth: 0 }}>
					<View style={{ width: 270 }}>
						<Text
							style={{ paddingLeft: 130, fontWeight: 'bold', fontSize: 20 }}
						>
							ALARM1
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
						enabled={this.props.pickerValue}
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
	checkBoxValue: state.valueset.checkBoxValue,
	pickerValue: state.valueset.pickerValue
});

export default connect(mapStateToProps, {
	sliderChanged,
	switchChanged,
	songChanged,
	checkBoxChanged,
	pickerValueChanged
})(Alarm1);
