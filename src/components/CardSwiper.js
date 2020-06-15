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

function CardSwiper({ deck }) {
    const [ disabled, setDisabled ] = React.useState(false);

    if (deck.length === 0) {
        return (
            <View>
                <Text>No Deck</Text>
            </View>
        );
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
                onSwiped={() => setDisabled(false)}
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
    card: {}
});

export default CardSwiper;