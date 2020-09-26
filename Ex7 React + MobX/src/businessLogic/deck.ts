import {Card, Img} from "./card";

export class Deck {
    cards: Array<Card>;
    suits: Array<Img>;

    constructor() {
        this.cards = [];
        const diamonds = require('../../resources/diamonds.png');
        const hearts = require('../../resources/hearts.png');
        const spades = require('../../resources/spades.png');
        const clubs = require('../../resources/clubs.png');

        this.suits = [
            {
                path: diamonds.default,
                alt: 'diamonds'
            },
            {
                path: hearts.default,
                alt: 'hearts'
            },
            {
                path: spades.default,
                alt: 'spades'
            },
            {
                path: clubs.default,
                alt: 'clubs'
            }
        ];

        for (let j = 0; j < 4; j++) {
            for (let i = 1; i <= 13; i++) {
                let value = '';
                switch (i) {
                    case 1:
                        value = 'A';
                        break;
                    case 11:
                        value = 'J';
                        break;
                    case 12:
                        value = 'Q';
                        break;
                    case 13:
                        value = 'K';
                        break;
                    default:
                        value = i.toString();
                }
                this.cards.push(new Card(this.suits[j], value))
            }
        }

        this.shuffle();
    }

    shuffle(): void {
        // Fisher-Yates algorithm
        let i = this.cards.length;
        let array = [...this.cards];
        while (i--) {
            const ri = Math.floor(Math.random() * (i + 1));
            [array[i], array[ri]] = [array[ri], array[i]];
        }
        this.cards = array;
    }

    card(index: number): Card {
        return this.cards[index];
    }
}
