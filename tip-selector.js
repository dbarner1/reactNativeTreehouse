import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  TextInput,
  SegmentedControlIOS
} from 'react-native';


class TipSelector extends Component {

	state = {
		selectedIndex:0,
		values:['Ok 15%', 'Good 18%', 'Great 20%', 'Wow 25%'],
		percentages: [0.15,0.18,0.20,0.25]
	}

	static PropTypes = {
		selectionChanged: React.PropTypes.func.isRequired
	}

	render () {
		return (
			<View>
				<SegmentedControlIOS
				  values={this.state.values}
				  selectedIndex={this.state.selectedIndex}
				  onChange={(event) => {
				   var _selectedIndex = event.nativeEvent.selectedSegmentIndex;
				   this.setState({selectedIndex: _selectedIndex});
				    this.props.selectionChanged(this.state.percentages[_selectedIndex]);
  				  }}
  				  tintColor={"#60b7e2"}
  				  style={styles.segmentedControl}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  segmentedControl: {
  	marginTop:20,
  	margin:10,
  	height:50
  }
 });

export default TipSelector;