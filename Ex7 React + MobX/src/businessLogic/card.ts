export type Img = {
    path: string,
    alt: string
}

export class Card {
    suit: Img;
    value: string;

    constructor(suit: Img, value: string) {
        this.suit = suit;
        this.value = value;
    }

    valueAsNumber(): number{
        switch (this.value) {
            case 'A':
                return 1;
            case 'J':
                return 11;
            case 'Q':
                return 12;
            case 'K':
                return 13;
            default:
               return parseInt(this.value);
        }
    }
}
