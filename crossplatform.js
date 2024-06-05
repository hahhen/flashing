import { Component } from 'react';
import SwitchComp from './switch';
import { StyleSheet, Text, View } from 'react-native';

export class CrossPlatform extends Component {

    constructor(props) {
        super(props);
        this.state = { value: false };
    }

    _onValueChange = (value) => {
        this.setState({ value: value });
    }

    render() {
        var colorClass = this.state.value ? styles.blueContainer : styles.redContainer;
        return (
            <View style={[styles.container, colorClass]}>
                <Text style={styles.welcome}>
                    Make me blue!
                </Text>
                <SwitchComp onValueChange={this._onValueChange} />
            </View>
        );
    }
};

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    blueContainer: {
        backgroundColor: '#5555FF'
    },
    redContainer: {
        backgroundColor: '#FF5555'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});