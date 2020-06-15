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
import Shooter from "../assets/images/shooter_icon.svg";

function CardFront(props) {
    return (
        <View style={styles.container}>
            <Text style={{ ...styles.cardValue, ...styles.topValue }}>J</Text>
            <Text style={{ ...styles.cardValue, ...styles.bottomValue }}>J</Text>

            <View style={styles.cardLogo}>
                <View style={styles.icon}>
                    <Shooter />
                </View><View style={styles.icon}>
                <Shooter />
            </View><View style={styles.icon}>
                <Shooter />
            </View><View style={styles.icon}>
                <Shooter />
            </View><View style={styles.icon}>
                <Shooter />
            </View><View style={styles.icon}>
                <Shooter />
            </View><View style={styles.icon}>
                <Shooter />
            </View><View style={styles.icon}>
                <Shooter />
            </View><View style={styles.icon}>
                <Shooter />
            </View><View style={styles.icon}>
                <Shooter />
            </View>
            </View>
            <View>
                <Text style={styles.cardTitle}>Title</Text>
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
        position: "relative",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
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
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        fontFamily: "roboto-regular",
        width: "80%",
        marginHorizontal: sizes.spacer * 2
    },
    icon: {
        marginVertical: sizes.spacer,
        width: 40
    },
    cardTitle: {
        color: "#fff"
    }
});

export default CardFront;