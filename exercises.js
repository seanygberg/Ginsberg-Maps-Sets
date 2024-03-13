// hasDuplicate

const hasDuplicate = array => new Set(array).size !== array.length;

// vowelCount

function vowelCount(string) {
    const vowels = new Map();
    for (let character of string) {
        character = character.toLowerCase();
        if ("aeiou".indexOf(character) != -1) {
            let count = 1;
            if (vowels.has(character)) {
                count = vowels.get(character) + 1;
            }
            vowels.set(character, count)
        }
    }
    return vowels;
}