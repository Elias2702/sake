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
        this.listTentative = [];
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

    getFirstCombinaison(listCombinaison) {
        if (listCombinaison.length === 0) {
            console.log("ESLINT m'embête");
        } else {
            let temp = "";

            listCombinaison.array.forEach(combinaison => {
                if (!temp) {
                    temp = combinaison;
                } else if (temp.timestamp > combinaison.timestamp) {
                    temp = combinaison;
                }
            });
            this.listTentative.push(temp);
        }
    }

    /*   checkCombinaison(combinaison){
        for(let i=0;i<combinaison.length;i++){
            
        }
    } */
}
