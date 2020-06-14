import React from "react";
import {
    StyleSheet,
    Text
} from "react-native";
import { SafeAreaView } from "react-navigation";
import AppLogo from "../assets/images/app_logo.svg";

import { shuffledDeck } from "../data/cards";


function GameScreen(props) {

    React.useEffect(() => {
        const deck = shuffledDeck();
        // console.log(deck);
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