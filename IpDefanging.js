/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) { 
    return address.replaceAll(/\./g, "[.]")
};

console.log(defangIPaddr("255.255.255.255"))