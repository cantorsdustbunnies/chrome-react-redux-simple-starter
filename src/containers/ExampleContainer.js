import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initFromChromeStorage, saveToChromeStorage } from '../actions';

class ExampleContainer extends Component {
	componentWillMount() {
		this.props.initFromChromeStorage();
	}

	renderSelector() {
		return this.props.colors.map(color => (
			<option key={color} value={color}>
				{color}
			</option>
		));
	}

	handleSelectorChange(e) {
		this.props.saveToChromeStorage('selected', e.target.value);
	}

	render() {
		return (
			<div>
				<p>Choose your favorite color and refresh the page.</p>
				<select onChange={e => this.handleSelectorChange(e)} value={this.props.selected}>
					{this.renderSelector()}
				</select>
				<p>Cool, right? :)</p>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { chrome } = state;
	const { colors, selected } = chrome;
	return { colors, selected };
};

const mapDispatchToProps = dispatch => bindActionCreators({ initFromChromeStorage, saveToChromeStorage }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ExampleContainer);
