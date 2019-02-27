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

    countcolor(combinaison) {
        let count = [],
            y = 0;

        for (let i = 0; i < this.nbrCouleur; i++) {
            y = 0;
            for (let x = 0; x < combinaison.length; x++) {
                if (combinaison[x] === i) {
                    y++;
                }
            }
            count[x] = y;
        }
        return count; // tableau du nombre de fois que chaque couleur est dans "combinaison"
    }

    judgetheproposal(proposal) {
        let prop = countcolor(proposal),
            code = countcolor(this.secretCode),
            correctcolor = [0, 0];

        for (let x = 0; x < this.nbrCouleur; x++) {
            if (proposal[x] === this.secretCode[x]) {
                correctcolor[1]++;
            }
        }
        for (let x = 0; x < this.secretCode.length; x++) {
            if (code[x] !== 0 && prop[x] !== 0) {
                if (code[x] < prop[x]) {
                    correctcolor[0] = correctcolor[0] + code[x];
                    correctcolor[1] = correctcolor[1] - code[x];
                } else {
                    correctcolor[0] = correctcolor[0] + prop[x];
                    correctcolor[1] = correctcolor[1] + prop[x];
                }
            }
        }
        return correctcolor;
    }
}
