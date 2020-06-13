import React from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import { enableScreens } from "react-native-screens";
import AppNavigation from "./src/navigation/AppNavigation";

enableScreens();

const fetchFonts = () => {
    return Font.loadAsync({
        "roboto-regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
        "pathway-gothic": require("./src/assets/fonts/PathwayGothicOne-Regular.ttf")
    });
};

export default function App() {
    const [ fontLoaded, setFontLoaded ] = React.useState(false);

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontLoaded(true)}
            />
        );
    }

    return (
        <AppNavigation />
    );
}
