function deepEqual(first, second) {
    if (first === second) return true;
    
    if (typeof first == "object" && first !== null &&
        typeof second == "object" && second !== null) {

        let firstProps = Object.keys(first);
        let secondProps = Object.keys(second);

        if (firstProps.length != secondProps.length) return false;

        for (prop of firstProps) {
            if (!secondProps.includes(prop)) return false;
            if (!deepEqual(first[prop], second[prop])) return false;
        }

        return true;
    } else {
        return false;
    }
}
