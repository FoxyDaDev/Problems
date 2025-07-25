// Recursive

function Euclid(high, low) { 
    const i = Math.floor(high / low);
    const multiplication = high - (i * low);
    
    if (low == 0) {
        return high;
    }

    return Euclid(high = low, low = multiplication)
}

console.log(Euclid(48,26));