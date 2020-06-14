import React from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import {
    colors,
    sizes
} from "../constants/vars";
import rules from "../data/rules";

const RuleItem = ({ title, description }) => {
    return (
        <View style={styles.ruleItem}>
            <Text style={styles.text}>
                <Text style={styles.ruleTitle}>{title} - </Text>
                <Text>{description}</Text>
            </Text>
        </View>
    );
};

function GameRulesScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Game Rules
                </Text>
            </View>
            <View style={styles.content}>
                <FlatList
                    data={rules}
                    renderItem={({ item }) => <RuleItem title={item.title} description={item.description} />}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
}

GameRulesScreen.navigationOptions = () => {
    return {
        title: "Rules",
        tabBarIcon: ({tintColor }) => {
            return (
                <MaterialIcons
                    name="settings"
                    size={24}
                    color={tintColor}
                />
            )
        }
    };
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: colors.gray,
    },
    header: {
        width: "100%",
        marginTop: sizes.spacer * 4,
    },
    title: {
        fontSize: sizes.titleFontSizeMd,
        marginHorizontal: sizes.spacer,
        fontFamily: "roboto-regular",
        color: colors.secondary,
        textTransform: "uppercase",
        fontWeight: "bold"
    },
    content: {
        flex: 1,
        padding: sizes.spacer
    },
    ruleItem: {
        width: "100%",
        flexDirection: "row",
        marginBottom: sizes.spacer
    },
    text: {
        color: colors.secondary,
        fontFamily: "roboto-regular",
        fontSize: sizes.fontSize
    },
    ruleTitle: {
        color: colors.primarySoft,
        fontSize: sizes.titleFontSizeSm,
        fontWeight: "bold"
    }
});

export default GameRulesScreen;