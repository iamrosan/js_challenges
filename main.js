//elements
let sum=0;
var count = 0;
const container = document.getElementById('container');
// functions
const create_div = (result, org_input)=>{
    // console.log(topic_detail)
    // console.log('div :'+div_box)
    // topics.forEach(element => {
    //     const creator = document.createElement('div');
    //     // creator.innerHTML='hello world';
    //     creator.classList.add('box');
    //     creator.innerHTML = "<h2>"+element.no+"."+" " + element.topic + "</h2> <br>"+"<h4>sentence: "+line+"</h4><br>"+div_box;
    //     // creator.textContent = div_box;
    //     container.appendChild(creator);
        
        
    // });
    const creator = document.createElement('div');
    creator.classList.add('box');
    if(count==0){
        console.log('sentence')
        creator.innerHTML = `
        <h2> ${topics[count].no}. ${topics[count].topic} </h2> 
         <h4>sentence: ${org_input} </h4>
         ${result}
         `;
        container.appendChild(creator);
        count+=1;
    }else{
    creator.innerHTML =`
    <h2> ${topics[count].no}. ${topics[count].topic} </h2>
    <h4>num: ${org_input} </h4>
    Result: ${result} 
     ` ;
    // creator.textContent = div_box;
    container.appendChild(creator);
    count+=1;
    };
}

const find = (org_input)=>{
    word = org_input.split(' ');
    characters = org_input.split('');
    lines = org_input.split('\n');
    var obj = {word:word.length,
        characters:characters.length,
        line:lines.length
        };
    create_div(JSON.stringify(obj), org_input);
    return obj;
}

const multiple = (num)=>{
    for(let i =1; i<num; i++){
        if(i%3==0 || i%5==0){
            sum += i
        }
    };
    console.log("sum:"+sum);
    create_div(sum,num);
    return sum;
}

const divideIntoOdd = num=>{
        let odd_array = [];
        // for (let i =num; i>0; i--){
        //     if(i%2!=1){
        //         continue;
        //     }else{
        //         // console.log(i)
        //         for(let j=i;j>0;j--){
        //             if(i+j==num && j%2==0){
        //                 odd_array.push(j)
        //                 odd_array.push(i)
        //             }
        //         }
        //     }
        // }
        // console.log(odd_array);
        let f_num = Math.floor(num/2);
        if(f_num%2==0){
            odd_array.push(f_num+1,num-(f_num+1));
            // odd_array.push()
            console.log(odd_array);
        }else{
            odd_array.push(f_num,num-f_num);
            // odd_array.push()
            console.log(odd_array);
        }
        create_div(odd_array,num);
        return odd_array;
}

// challenges
// C1 characters, words and lines
topics = [
    {
        no : 1,
        topic:"Count Characters, Words and Lines in a given sentence"
    },
    {
        no : 2,
        topic:"Sum of multiples; sum the no less than the given num if divisible by 3 or 5"
    },
    {
        no : 3,
        topic:"Even into odd"
    }
];
const input=['Hi I am roshan. Nice to meet you',10,10];
console.log(find(input[0]));
console.log(multiple(input[1]));
console.log(divideIntoOdd(input[2]));