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
import Cognac from "../assets/images/cognac_icon.svg";
import Margarita from "../assets/images/margarita_icon.svg";
import Wine from "../assets/images/wine_icon.svg";
import Beer from "../assets/images/beer_icon.svg";
import rules from "../data/rules";

function CardFront({ card }) {
    const { value } = card;

    const renderTitle = () => {
        return rules.find(item => item.value === value).title;
    };

    const renderIcon = () => {
        switch (value) {
            case "A":
                return (
                    <View style={styles.icon}>
                        <Cognac />
                    </View>
                );
            case "K":
                return (
                    <View style={styles.icon}>
                        <Margarita />
                    </View>
                );
            case "Q":
                return (
                    <View style={styles.icon}>
                        <Wine />
                    </View>
                );
            case "J":
                return (
                    <View style={styles.icon}>
                        <Beer />
                    </View>
                );
            default:
                let array = [];
                for (let i = 0; i < value; i++) {
                    array.push(i);
                }

                return array.map((item) => {
                    return (
                        <View
                            style={styles.icon}
                            key={`card-icon${item}`}
                        >
                            <Shooter />
                        </View>
                    );
                });

        }
    };

    return (
        <View style={styles.container}>
            <Text style={{ ...styles.cardValue, ...styles.topValue }}>{value}</Text>
            <Text style={{ ...styles.cardValue, ...styles.bottomValue }}>{value}</Text>

            <View style={styles.cardLogo}>
                {renderIcon()}
            </View>
            <View>
                <Text style={styles.cardTitle}>{renderTitle()}</Text>
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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: sizes.spacer,
        width: 40
    },
    cardTitle: {
        color: colors.primarySoft,
        fontSize: sizes.titleFontSizeSm
    }
});

export default CardFront;