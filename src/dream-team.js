const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    let res = "";
    let flag = false;
    if (members == null) return false;
    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] == "string") {
            members[i] = members[i].trim();
            res += members[i][0];
            flag = true | flag;
        } else {
            flag = false | flag;
        }
    }
    return flag == true ? res.toUpperCase().split("").sort().join("") : false;
}

// console.log(createDreamTeam(undefined))

module.exports = {
    createDreamTeam,
};
