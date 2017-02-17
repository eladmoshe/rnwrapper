import React, { PureComponent } from 'react';
import {
	WebView,
	Text,
} from 'react-native';

export default class MainWebView extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {}
		this.onError = this.onError.bind(this);
		this.onMessage = this.onMessage.bind(this);
		this.renderError = this.renderError.bind(this);
	}


	onError(e){
		console.error(e);
	}

	onMessage(msg){
		console.log(`received message from WebView: ${msg}`);
	}

	renderError(){
		return <Text>Failed to render</Text>
	}

	render() {
		return (
			<WebView
				source={this.props.source}
				style={{marginTop: 20}}
				onError={this.onError}
			    onMesage={this.onMessage}
				renderError={this.renderError}
				domStorageEnabled={true}

			/>
		);
	}
}