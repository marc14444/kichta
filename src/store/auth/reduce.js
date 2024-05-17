const result = [0,2,3].reduce((accumulator, currentItem)=>{
    return accumulator + currentItem;
}, 0);

const sum = (previous, current) =>{
    return previous + current;
}
const resu = [0,1,2,3].reduce(sum, 0);