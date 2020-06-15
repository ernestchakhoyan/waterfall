import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";

import { shuffledDeck } from "../data/cards";
import { Context as GameContext } from "../context/gameContext";

import {
    colors,
    sizes
} from "../constants/vars";
import CardSwiper from "../components/CardSwiper";

function GameScreen({navigation}) {
    const { state: { deck }, setDeck, endGame } = React.useContext(GameContext);

    const handleNewGame = () => {
        endGame();
        navigation.navigate("Welcome");
    }

    React.useEffect(() => {
        const deck = shuffledDeck();
        setDeck(deck);
    }, []);

    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <LinearGradient
                colors={[ `${colors.primarySoft}`, `${colors.primary}` ]}
                style={styles.container}
            >
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleNewGame}
                >
                    <Text style={styles.text}>New game</Text>
                </TouchableOpacity>
                <View style={styles.content}>
                    <CardSwiper deck={deck || []} />
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
}

GameScreen.navigationOptions = () => {
    return {
        title: "Game",
        tabBarIcon: ({ tintColor }) => {
            return (
                <FontAwesome5 name="glass-whiskey" size={24} color={tintColor} />
            );
        }
    };
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100%"
    },
    swiperContainer: {
        height: "100%",
        backgroundColor: "blue"
    },
    cardContainer: {
        height: "100%"
    },
    button: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: 150,
        justifyContent: "center",
        backgroundColor: "#000",
        borderColor: "#000",
        padding: sizes.spacer,
        borderRadius: 4,
        marginTop: sizes.spacer

    },
    text: {
        color: "#fff",
        textAlign: "center",
        textTransform: "uppercase",
        fontFamily: "roboto-regular",
    }
});

export default GameScreen;