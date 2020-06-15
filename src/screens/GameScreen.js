import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    View
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from '@expo/vector-icons';

import { shuffledDeck } from "../data/cards";
import { Context as GameContext } from "../context/gameContext";
import CardSwiper from "../components/CardSwiper";

import {
    colors,
    sizes
} from "../constants/vars";

function GameScreen() {
    const { state: { deck }, setDeck } = React.useContext(GameContext);
    let card;

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
                    <CardSwiper />
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
}

GameScreen.navigationOptions = () => {
    return {
        title: "Game",
        tabBarIcon: ({tintColor}) => {
            return (
                <FontAwesome5 name="glass-whiskey" size={24} color={tintColor} />
            )
        }
    };
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    cardContainer: {
        height: "100%"
    }
});

export default GameScreen;