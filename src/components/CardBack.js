import React from "react";
import {
    ImageBackground,
    StyleSheet,
    Text,
    View
} from "react-native";
import AppLogo from "../assets/images/app_logo.svg";

function CardBack(props) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require("../assets/images/card_bg.jpg")} style={styles.wrapper}>
                <AppLogo height={80} width={80} />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        borderWidth: 10,
        borderColor: "#fff",
        borderRadius: 15,
        height: "100%",
        width: "100%"
    },
    wrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
    }
});

export default CardBack;