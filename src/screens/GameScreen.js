import React from "react";
import {
    StyleSheet,
    View
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { LinearGradient } from "expo-linear-gradient";

import { shuffledDeck } from "../data/cards";
import { Context as GameContext } from "../context/gameContext";
import CardBack from "../components/CardBack";

import AppLogo from "../assets/images/app_logo.svg";

import {
    colors,
    sizes
} from "../constants/vars";
import CardFront from "../components/CardFront";

function GameScreen(props) {
    const { state: { deck }, setDeck } = React.useContext(GameContext);

    console.log(deck);

    React.useEffect(() => {
        const deck = shuffledDeck();
        setDeck(deck);
    }, []);

    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <LinearGradient
                colors={[ `${colors.primarySoft}`, `${colors.primary}` ]}
            >
                <View style={styles.container}>
                    {/*<CardBack />*/}
                    <CardFront />
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
}

GameScreen.navigationOptions = () => {
    return {
        title: "Game",
        tabBarIcon: <AppLogo height={24} width={24} />
    };
};

const styles = StyleSheet.create({
    container: {
        padding: sizes.spacer * 4
    }
});

export default GameScreen;