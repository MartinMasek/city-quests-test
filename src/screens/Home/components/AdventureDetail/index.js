import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

export default class AdventureDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.headerStyle,this.props.parentStyles]}>Adventure Name:{this.props.adventureName}</Text>
                <Text>DETAIL of the Adventurelong long lngdsg </Text>
            </View>
        );
    }
}