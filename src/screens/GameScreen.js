import React from "react";
import {
    StyleSheet,
    Text
} from "react-native";
import { SafeAreaView } from "react-navigation";
import AppLogo from "../assets/images/app_logo.svg";

import { shuffledDeck } from "../data/cards";
import {Context as GameContext} from "../context/gameContext";
import { startGame } from "../actions/GameActions";

function GameScreen(props) {
    const {state: {deck}, setDeck} = React.useContext(GameContext);

    console.log(deck);

    React.useEffect(() => {
        const deck = shuffledDeck();
        setDeck(deck);
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
        tabBarIcon: <AppLogo height={24} width={24} />
    }
}

const styles = StyleSheet.create({});

export default GameScreen;