import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text
} from "react-native";
import Swiper from "react-native-deck-swiper";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import CardFlip from "react-native-card-flip";
import { Context as GameContext } from "../context/gameContext";
import { sizes } from "../constants/vars";

function CardSwiper({ deck }) {
    const { addHistory } = React.useContext(GameContext);
    const [ disabled, setDisabled ] = React.useState(false);
    const [cardIndex, setCardIndex] =  React.useState(0);

    if (deck.length === 0) {
        return (
            <View style={styles.emptyView}>
                <Text>No deck</Text>
            </View>
        );
    }

    const remainingCards = deck.length - cardIndex;

    const handleCardChange = (index) => {
        setCardIndex(index);
        const card = deck[index];
        addHistory(card);
    }

    return (
        <View style={styles.container}>
            <Swiper
                cards={deck}
                renderCard={(card) => {
                    return (
                        <CardFlip style={styles.cardWrapper} ref={(crd) => card = crd}>
                            <TouchableOpacity
                                style={styles.card}
                                onPress={() => {
                                    card.flip();
                                    setDisabled(true);
                                }
                                }
                            >
                                <CardBack />
                            </TouchableOpacity>
                            <View style={styles.card}>
                                <CardFront card={card} />
                            </View>
                        </CardFlip>
                    );
                }}
                onSwiped={(index) => {
                    setDisabled(false);
                    handleCardChange(index);
                }}
                onSwipedAll={() => {
                    console.log("onSwipedAll");
                }}
                cardIndex={0}
                stackSize={3}
                backgroundColor={"transparent"}
                disableBottomSwipe={!disabled}
                disableLeftSwipe={!disabled}
                disableRightSwipe={!disabled}
                disableTopSwipe={!disabled}
            >
            </Swiper>
            <View style={styles.remainingText}>
                {
                    remainingCards
                        ? <Text>{remainingCards} {`card${remainingCards === 1 ? "" : "s"}`} remaining</Text>
                        : null
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "80%",
        width: 400,
        height: "100%",
        maxHeight: "80%",
        backgroundColor: "transparent"
    },
    cardWrapper: {
        width: "80%",
        marginVertical: "auto",
        height: 400,
        marginTop: -30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent"
    },
    remainingText: {
        position: "absolute",
        bottom: 0,
        left: 30
    },
    emptyView: {
        marginTop: sizes.spacer * 3,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default CardSwiper;