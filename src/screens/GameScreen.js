import React from "react";
import {
    StyleSheet,
    Text
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { MaterialIcons } from '@expo/vector-icons';

import { shuffledDeck } from "../data/cards";


function GameScreen(props) {

    React.useEffect(() => {
        const deck = shuffledDeck();
        console.log(deck);
    },[])

    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text>
                Game Screen
            </Text>
        </SafeAreaView>
    );
}

GameScreen.navigationOptions = () => {
    return {
        title: "Game",
        tabBarIcon: <MaterialIcons name="history" size={24} color="black" />
    }
}

const styles = StyleSheet.create({});

export default GameScreen;