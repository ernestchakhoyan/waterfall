import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { Context as GameContext } from "../context/gameContext";

import {
    colors,
    sizes
} from "../constants/vars";

import AppLogo from "../assets/images/app_logo.svg";

function WelcomeScreen({ navigation }) {
    const { state: { gameIsStarted }, startGame } = React.useContext(GameContext);

    const handleGameStart = () => {
        if (!gameIsStarted) {
            startGame();
        }
        navigation.navigate("Game");
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Welcome to Waterfall Game!</Text>
                <View style={styles.logo}>
                    <AppLogo height={80} width={80} />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleGameStart}
                    style={styles.button}
                >
                    <Text style={styles.text}>
                        {!gameIsStarted ? "Start a new game" : "Resume"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("GameRules")}
                    style={styles.button}
                >
                    <Text style={styles.text}>
                        See the rules
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primarySoft,
        paddingVertical: sizes.spacer * 4
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: sizes.spacer
    },
    title: {
        fontSize: sizes.titleFontSizeMd,
        marginVertical: sizes.spacer,
        fontFamily: "roboto-regular",
        color: "#000"
    },
    buttonContainer: {
        width: "100%",
        flexDirection: "column",
        paddingHorizontal: sizes.spacer,
        marginTop: sizes.spacer * 2,
        marginBottom: sizes.spacer * 2
    },
    button: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        borderColor: "#000",
        padding: sizes.spacer,
        borderRadius: 20,
        marginTop: sizes.spacer
    },
    text: {
        color: "#fff",
        textAlign: "center",
        textTransform: "uppercase",
        fontFamily: "roboto-regular",
    }
});

export default WelcomeScreen;