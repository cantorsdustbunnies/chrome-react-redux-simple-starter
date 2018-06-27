import React, { Component } from 'react';
import { connect } from 'react-redux';

class ExampleContainer extends Component {
	render() {
		console.log('props on ExampleContainer', this.props);

		return <div />;
	}
}

const mapStateToProps = state => ({ state });

export default connect(
	mapStateToProps,
	null
)(ExampleContainer);
