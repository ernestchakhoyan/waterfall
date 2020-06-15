import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Swiper from "react-native-deck-swiper";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import CardFlip from "react-native-card-flip";

function CardSwiper({ props }) {
    const [disabled, setDisabled] = React.useState(false);

 return (
     <View style={styles.container}>
         <Swiper
             cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
             renderCard={(card) => {
                 return (
                     <CardFlip style={styles.cardWrapper} ref={(crd) => card = crd}>
                         <TouchableOpacity
                             onPress={() => {
                                     card.flip();
                                     setDisabled(true);
                                 }
                             }
                         >
                             <CardBack />
                         </TouchableOpacity>
                         <View style={styles.card}>
                             <CardFront title={card} />
                         </View>
                     </CardFlip>
                 )
             }}
             onSwiped={() => setDisabled(false)}
             onSwipedAll={() => {console.log('onSwipedAll')}}
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
 );}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        maxHeight: "80%",
        backgroundColor: "transparent"
    },
    cardWrapper: {
        width: "80%",
        marginVertical:"auto",
        height: 400,
        marginTop: -30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent"
    },
    card: {
        // height: "100%",
        // width: "100%"
    }
});

export default CardSwiper;