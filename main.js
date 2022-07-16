//elements
const container = document.getElementById('container');
// functions
const create_div = (div_box, line)=>{
    // console.log(topic_detail)
    console.log('div :'+div_box)
    const creator = document.createElement('div');
    creator.classList.add('box');
    creator.innerHTML = "<h2>"+topics[0].no+"."+" " + topics[0].topic + "</h2> <br>"+"<h4>sentence: "+line+"</h4><br>"+div_box;
    // creator.textContent = div_box;
    container.appendChild(creator)

}

const find = (line)=>{
    word = line.split(' ');
    characters = line.split('')
    lines = line.split('\n')
    var obj = {word:word.length,
        characters:characters.length,
        line:lines.length
        }
    create_div(JSON.stringify(obj), line)
    return obj
}

// challenges
// C1 characters, words and lines
topics = [
    {
        no : 1,
        topic:"Count Characters, Words and Lines in a given sentence"
    }
]
sentence ='Hi I am roshan. Nice to meet you';
console.log(find(sentence))