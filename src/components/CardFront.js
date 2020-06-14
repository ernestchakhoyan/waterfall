import React from "react";
import {
    StyleSheet,
    Text,
    View
} from "react-native";
import {
    colors,
    sizes
} from "../constants/vars";

function CardFront(props) {
    return (
        <View style={styles.container}>
            <Text style={{ ...styles.cardValue, ...styles.topValue }}>J</Text>
            <Text style={{ ...styles.cardValue, ...styles.bottomValue }}>J</Text>

            <View style={styles.cardLogo}>
                <Text>Logo</Text>
            </View>
            <View>
                <Text style={styles.cardDescription}>Description</Text>
            </View>
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
        position: "relative"
    },
    cardValue: {
        color: colors.textColor,
        fontSize: sizes.titleFontSizeLg,
        fontFamily: "pathway-gothic",
        textTransform: "uppercase",
        position: "absolute"
    },
    topValue: {
        top: 15,
        left: 15
    },
    bottomValue: {
        bottom: 15,
        right: 15
    },
    cardLogo: {
        backgroundColor: "#fff",
        fontFamily: "roboto-regular",
        height: 150,
        width: "100%",
        marginHorizontal: sizes.spacer * 2
    },
    cardDescription: {
        color: "#fff"
    }
});

export default CardFront;