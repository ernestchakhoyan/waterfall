import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    View
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { LinearGradient } from "expo-linear-gradient";

import { shuffledDeck } from "../data/cards";
import { Context as GameContext } from "../context/gameContext";
import CardBack from "../components/CardBack";

import { FontAwesome5 } from '@expo/vector-icons';

import {
    colors,
    sizes
} from "../constants/vars";
import CardFront from "../components/CardFront";

import CardFlip from "react-native-card-flip";

function GameScreen(props) {
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
                    <CardFlip style={styles.cardContainer} ref={(crd) => card = crd}>
                        <TouchableOpacity style={styles.card} onPress={() => card.flip()}>
                            <CardBack />
                        </TouchableOpacity>
                        <View style={styles.card}>
                            <CardFront />
                        </View>
                    </CardFlip>
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
        padding: sizes.spacer * 4
    },
    cardContainer: {
        height: "100%"
    }
});

export default GameScreen;