const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    chain: [],

    getLength() {
        return this.chain.length;
    },

    addLink(value) {
        if (String(value)) {
            this.chain.push("( " + value + " )");
            return this;
        }
        this.chain.push("( )");
        return this;
    },

    removeLink(position) {
        if (
            position > this.chain.length ||
            position <= 0 ||
            typeof position !== "number"
        ) {
            this.chain = [];
            throw new Error(`You can't remove incorrect link!`);
        }
        this.chain.splice(position - 1, 1);
        return this;
    },

    reverseChain() {
        this.chain.reverse();
        return this;
    },

    finishChain() {
        let chained = this.chain.join("~~");
        this.chain = [];
        return chained;
    },
};

// let value = 9;
module.exports = {
    chainMaker,
};
