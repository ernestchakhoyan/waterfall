export const suits = ["spades", "diamonds", "clubs", "hearts"];
export const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];


function getDeck() {
    const deck = [];

    for(let i = 0; i < suits.length; i++)
    {
        for(let x = 0; x < values.length; x++)
        {
            let card = {Value: values[x], Suit: suits[i]};
            deck.push(card);
        }
    }

    return deck;
}
export function shuffledDeck() {
    let deck = getDeck();
    for (let i = 0; i < 1000; i++) {
        const location1 = Math.floor((Math.random() * deck.length));
        const location2 = Math.floor((Math.random() * deck.length));
        const tmp = deck[ location1 ];

        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }

    return deck;
}