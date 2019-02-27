export default class Game {
    constructor(nbrPlayer, serveurName) {
        this.nbrPlayer = nbrPlayer;
        this.serveurName = serveurName;
        this.tentativeMax = initTentativeMax(nbrPlayer);
        this.nbrCouleur = initCouleur(nbrPlayer);
        this.tentative = 0;
        this.codeLength = 0;
        this.secretCode = initCode(nbrPlayer);
        this.thinkingTime = 30;
        this.resultTime = 5;
    }

    initTentativeMax(nbr) {
        return nbr > 3 ? 8 : 10;
    }

    initCouleur(nbr) {
        return nbr > 2 ? 8 : 6;
    }

    initCode(nbr) {
        let code = [];

        if (nbr === 4 || nbr === 3) {
            this.codeLength = 6;
        } else if (nbr === 2) {
            this.codeLength = 5;
        } else {
            this.codeLength = 4;
        }
        for (let i = 0; i < codeLength; i++) {
            code[i] = Math.floor(Math.random() * this.nbrCouleur);
        }
        return code;
    }
}
