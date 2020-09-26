import {Deck} from "./deck";
import {Card} from "./card";
import {action, observable} from 'mobx';

export class Game {
    deck: Deck;
    @observable index: number; // Only observable for autorun()
    @observable score: number;
    @observable currentCard: Card;

    constructor() {
        this.deck = new Deck();
        this.score = 0;
        this.index = 0;
        this.currentCard = this.deck.card(this.index);
    }

    @action draw(prediction: string): void {
        this.index++;
        let lastCard = this.currentCard;
        this.currentCard = this.deck.card(this.index);

        if (prediction === 'higher') {
            if (this.currentCard.valueAsNumber() > lastCard.valueAsNumber()) {
                this.score++;
            }
        } else {
            if (this.currentCard.valueAsNumber() < lastCard.valueAsNumber()) {
                this.score++;
            }
        }
    }

    @action isOver(): boolean {
        if (!this.deck.card(this.index + 1)) {
            return true;
        }
    }
}
