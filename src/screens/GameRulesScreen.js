import React from "react";
import {
    StyleSheet,
    Text
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { MaterialIcons } from "@expo/vector-icons";

function GameRulesScreen(props) {
    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text>
                Game Rules
            </Text>
        </SafeAreaView>
    );
}

GameRulesScreen.navigationOptions = () => {
    return {
        title: "Rules",
        tabBarIcon: <MaterialIcons name="settings" size={24} color="black" />
    };
};

const styles = StyleSheet.create({});

export default GameRulesScreen;