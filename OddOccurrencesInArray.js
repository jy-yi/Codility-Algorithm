var HashMap = function() {
    this.map = new Array();
};

HashMap.prototype = {
    put: function(key, value) {
        return this.map[key] = value;
    },
    get: function(key) {
        return this.map[key];
    },
    getOrDefault: function(key, defaultValue) {
        if (this.map[key]) {
            return this.map[key]
        } else {
            return defaultValue
        }
    }
};

/**
 * Find value that occurs in odd number of elements.
 * @param {*} A
 */
function solution(A) {
    let map = new HashMap();

    for(let i in A) {
        map.put(A[i], map.getOrDefault(A[i], 0) + 1);
    }

    let result = 0;

    for(let i in A) {
        // all but one of the values in A occur an even number of times.
        if (map.get(A[i]) % 2 != 0) {
            result = A[i];
        }
    }

    return result;
}