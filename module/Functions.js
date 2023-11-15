var colors = require('@colors/colors');

class Functions {

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    shuffleArray = (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    static isObject (item) {
        if (typeof item !== 'object') {
            try {
                item = JSON.parse(item)
            } catch (error) {
                return false;
            }
    
        }
        if (typeof item === "object" && !Array.isArray(item) && item !== null) {
            return item;
        }
        
        return;
    }
      







}


module.exports = Functions;

