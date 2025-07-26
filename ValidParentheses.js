var isValid = function(s) {
    let stack = [];
    let pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        let a = s.charAt(i);
        
        if (a === '(' || a === '{' || a === '[') {
            stack.push(a);
        } else {
            if (stack.length === 0 || stack.pop() !== pairs[a]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

console.log(isValid('([])'));
