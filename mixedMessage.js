const oneVerbPresent = ['run', 'jump', 'cry', 'laugh', 'swim', 'shine', 'dance'];
const twoVerbPresent = ['wallow', 'wither', 'ponder', 'pretend', 'glisten'];

const oneVerbPast = ['ran', 'jumped', 'cried', 'laughed', 'swam', 'shone', 'danced', 'washed'];
const twoVerbPast = ['wallowed', 'withered', 'pondered', 'glistened', 'wandered', 'arose'];

const oneNoun = ['tree', 'stream', 'field', 'shade', 'path', 'spring', 'fall'];

const twoNoun = ['water', 'river', 'meadow', 'winter', 'summer', 'autumn'];
const twoNounPlural = ['waters', 'rivers', 'meadows']

const oneAdj = ['wet', 'sad', 'loud', 'calm','tall', 'fat', 'big', 'sad', 'green', 'rich', 'old', 'young',
'hard', 'soft', 'high', 'long', 'late', 'low', 'dark', 'strong', 'black', 'white'];
const twoAdj = ['stormy', 'happy', 'serene', 'quiet', 'shady', 'worried', 'welcome'];

const twoPresentParticiple = ['weeping', 'dying', 'crying', 'smiling', 'daring', 'caring', 'thinking', 'running', 'laughing'];
const threePresentParticiple = ['travelling', 'explaining', 'carrying', 'flourishing', 'existing'];

const twoAdverb = ['again', 'smoothly', 'plainly']
const threeAdverb = ['blissfully', 'quietly', 'peacefully', 'patiently', 'gratefully'];

const prepositionSpacial = ['behind', 'along', 'across', 'around'];
const article = ['the', 'a'];
const prep = ['as', 'while', 'in']

const callRandom = (num) => {
    let gen = Math.floor(Math.random() * num);
    if (gen === 0) {
        return gen += 1;
    } else {
        return gen;
    }
}



const genLineStructure = (numSyl) => {
    // This function will generate a sentence structure from a few
    // pre-configured sentence layouts
    
    const structure1 = [article[callRandom(article.length)], twoAdj[callRandom(twoAdj.length)], twoNoun[callRandom(twoNoun.length)]];
    const structure2 = [article[callRandom(article.length)], oneAdj[callRandom(oneAdj.length)], oneNoun[callRandom(oneNoun.length)], twoVerbPast[callRandom(twoVerbPast.length)]];
    const structure3 = [threePresentParticiple[callRandom(threePresentParticiple.length)], ',', oneAdj[callRandom(oneAdj.length)], oneNoun[callRandom(oneNoun.length)]];
    const structure4 = [twoPresentParticiple[callRandom(twoPresentParticiple.length)], ',' , article[callRandom(article.length)], oneNoun[callRandom(oneNoun.length)], oneVerbPast[callRandom(oneVerbPast.length)]];
    const structure5 = [twoVerbPresent[callRandom(twoVerbPresent.length)], threeAdverb[callRandom(threeAdverb.length)]];
    const structure6 = [twoAdverb[callRandom(twoAdverb.length)], threePresentParticiple[callRandom(threePresentParticiple.length)]];
    const structure7 = [prep[callRandom(prep.length)], article[callRandom(article.length)], twoNoun[callRandom(twoNoun.length)], oneVerbPast[callRandom(oneVerbPast.length)]]

    const structure11 = [twoAdverb[callRandom(twoAdverb.length)], prepositionSpacial[callRandom(prepositionSpacial.length)], oneAdj[callRandom(oneAdj.length)], twoNounPlural[callRandom(twoNounPlural.length)]];
    const structure12 = [prep[callRandom(prep.length)], twoPresentParticiple[callRandom(twoPresentParticiple.length)], twoNounPlural[callRandom(twoNounPlural.length)], twoVerbPresent[callRandom(twoVerbPresent.length)]];
    const structure13 = [article[callRandom(article.length)], twoAdj[callRandom(twoAdj.length)], oneNoun[callRandom(oneNoun.length)], threePresentParticiple[callRandom(threePresentParticiple.length)]]

    const structure21 = [oneVerbPast[callRandom(oneVerbPast.length)], article[callRandom(article.length)], twoPresentParticiple[callRandom(twoPresentParticiple.length)],oneNoun[callRandom(oneNoun.length)]]


    if (numSyl === 5) {

        let num = callRandom(8);
        console.log(num);

        switch (num) {
            case 1:
                return structure1.join(' ');
                break;
            case 2:
                return structure2.join(' ');
                break;
            case 3: 
                return structure3.join(' ');
                break;
            case 4: 
                return structure4.join(' ');
                break;
            case 5: 
                return structure5.join(' ');
                break;
            case 6: 
                return structure6.join(' ');
                break;
            case 7: 
                return structure7.join(' ');
                break;
        }

    } else if (numSyl === 7) {
        
        let num = callRandom(4);
        console.log(num);

        switch(num) {
            case 1:
                return structure11.join(' ');
                break;
            case 2:
                return structure12.join(' ');
                break;
            case 3:
                return structure13.join(' ');
                break;
        }
    }
}


const fiveSyllableLine = () => {
    return genLineStructure(5);
}

const sevenSyllableLine = () => {
    return genLineStructure(7);
}




const genHaiku = () => {
    // console.log(fiveSyllableLine(),'\n', sevenSyllableLine(),'\n', fiveSyllableLine());
    return fiveSyllableLine() + "<br/>" + sevenSyllableLine() + "<br/>" + fiveSyllableLine();
    
}

let button = document.getElementById("generator-button")
let reader = document.getElementById("reader")

button.onclick = function() {
    reader.innerHTML = genHaiku();
}

// NEW FUNCTIONALITY TO ADD
//
// Add a button to save current Haiku
// 
// Add 3 buttons, one to randomize each line
// If you don't like one line you can re-generate it
// 
// 
// 
// 
// 