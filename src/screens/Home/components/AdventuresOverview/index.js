import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import styles from './styles'

export default class AdventuresOverview extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0, word: "" };
        this._incrementCounter = this._incrementCounter.bind(this)
        this._addLetter=this._addLetter.bind(this)
    }


    _incrementCounter() {
        this.setState({ counter: this.state.counter + 1 })
    }

    _addLetter() {
        this.setState({ word: this.state.word + "A" })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>OVERVIEW</Text>
                <Button title="Increase number" onPress={this._incrementCounter} />
                <Text>Counter: {this.state.counter}</Text>
                <Button title="Add letter" onPress={this._addLetter} />
                <Text>Word: {this.state.word}</Text>
            </View>
        );
    }
}