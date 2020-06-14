import React from "react";
import {
    StyleSheet,
    Text
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { MaterialIcons } from "@expo/vector-icons";

function GameHistoryScreen(props) {
    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text>
                Game History
            </Text>
        </SafeAreaView>
    );
}

GameHistoryScreen.navigationOptions = () => {
    return {
        title: "History",
        tabBarIcon: ({tintColor}) => {
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

const styles = StyleSheet.create({});

export default GameHistoryScreen;