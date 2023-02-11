 const nums = [0, 1, 2, 3, 4, 5,6, 7, 8, 9];

const allButtonClicked = ()=>{
    let generatedNumbers = []
    for (let index = 0; index < 10; index++) {
        generatedNumbers.push(index)  
    }

    return generatedNumbers.sort()
}


const evenButtonClicked = ()=>{
    let generatedNumbers = []
    for (let index = 0; index < 10; index++) {
        if(index % 2 === 0){
            generatedNumbers.push(index)  
        }
    }

    return generatedNumbers.sort()
}

const oddButtonClicked = ()=>{
    let generatedNumbers = []
    for (let index = 0; index < 10; index++) {
        if(index % 2 === 1){
            generatedNumbers.push(index)  
        }
    }

    return generatedNumbers.sort()
}


const smallButtonClicked = ()=>{
    return nums.filter(num => num < 5).sort()
}


const bigButtonClicked = ()=>{
    return nums.filter(num => num >= 5).sort()
}


export {
    allButtonClicked, 
    evenButtonClicked,
    oddButtonClicked,
    smallButtonClicked,
    bigButtonClicked
}