import React from "react";
import {
    ImageBackground,
    StyleSheet,
    Image,
    View
} from "react-native";


function CardBack(props) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require("../assets/images/card_bg.jpg")} style={styles.wrapper}>
                <Image
                    source={require("../assets/images/app_logo_white.png")}
                    style={styles.image}
                />
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
        width: "100%",
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
    },
    wrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
    },
    image: {
        width: 90,
        height: 80
    }
});

export default CardBack;