import React from "react";
import {
    Button,
    StyleSheet,
    Text,
    View
} from "react-native";
import { sizes,  colors } from "../constants/vars";

function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to WaterFall Game!</Text>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} title="Start a new game" onPress={() => navigation.navigate("Game")} />
                <Button style={styles.button} title="See the rules" onPress={() => navigation.navigate("GameRules")} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: sizes.spacer,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primarySoft,
    },
    title: {
        fontSize: sizes.titleFontSizeMd,
        marginVertical: sizes.spacer,
        fontFamily: "roboto-regular"
    },
    buttonContainer: {
        width: "100%",
        flexDirection: "column",
        paddingHorizontal: sizes.spacer,
        marginTop: sizes.spacer * 2
    },
    button: {
        backgroundColor: "#000",
        borderColor: "#000",
        color: "#fff"
    }
});

export default WelcomeScreen;