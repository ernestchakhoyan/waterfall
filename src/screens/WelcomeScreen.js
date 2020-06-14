import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {
    colors,
    sizes
} from "../constants/vars";

function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Welcome to WaterFall Game!</Text>
                <View>
                    <Text>Logo</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Game")}>
                    <Text style={styles.button}>
                        Start a new game
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("GameRules")}>
                    <Text style={styles.button}>
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
        paddingTop: sizes.spacer,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primarySoft,
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
        color: "#fff"
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
        textAlign: "center",
        textTransform: "uppercase",
        backgroundColor: "#000",
        borderColor: "#000",
        color: "#fff",
        padding: sizes.spacer,
        borderRadius: 20,
        marginTop: sizes.spacer
    }
});

export default WelcomeScreen;