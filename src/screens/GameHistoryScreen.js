import React from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Context as GameContext } from "../context/gameContext";
import rules from "../data/rules";
import {
    colors,
    sizes
} from "../constants/vars";

const renderTitle = (value) => {
    return rules.find(item => item.value === value).title;
};

const HistoryItem = ({ value }) => {
    return (
        <View style={styles.ruleItem}>
            <Text style={styles.text}>
                <Text style={styles.ruleTitle}>{value} - </Text>
                <Text>{renderTitle(value)}</Text>
            </Text>
        </View>
    );
};

function GameHistoryScreen() {
    const { state: { history } } = React.useContext(GameContext);
    const remainingCards = 52 - history.length;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Game History
                </Text>
            </View>
            {history.length > 0
                ? (
                    <View style={styles.content}>
                        <Text style={styles.remainingText}>{remainingCards} {`card${remainingCards > 1 ? "s" : ""}`} remaining</Text>
                        <FlatList
                            data={history}
                            renderItem={({ item }) => <HistoryItem value={item.value} />}
                            keyExtractor={item => `${item.value}-${Math.random()}`}
                        />
                    </View>
                )
                : (
                    <View style={styles.emptyView}>
                        <Text>No history</Text>
                    </View>
                )
            }
        </View>
    );
}

GameHistoryScreen.navigationOptions = () => {
    return {
        title: "History",
        tabBarIcon: ({ tintColor }) => {
            return (
                <MaterialIcons
                    name="history"
                    size={24}
                    color={tintColor}
                />
            );
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
    remainingText: {
        fontSize: sizes.fontSize,
        marginVertical: sizes.spacer,
        fontFamily: "roboto-regular",
        color: colors.secondary,
        fontWeight: "bold"
    },
    content: {
        flex: 1,
        padding: sizes.spacer
    },
    ruleItem: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
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
    },
    emptyView: {
        marginTop: sizes.spacer * 3,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default GameHistoryScreen;