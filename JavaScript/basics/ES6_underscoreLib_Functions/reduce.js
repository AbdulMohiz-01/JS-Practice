const _ = {};

/**
 * 
 * @param {list} arr the list that you want to iterate on / Itratee.
 * @param {function} callback the function that you want to call on each element of the list.
 * @param {someValue} initial initail value that you want to pass to the function. if inital is not passed then it will be arr[0]
 * @returns returns the whole process into single value.
 */
_.reduce = function(arr, callback, initial){
    let flag = initial !== undefined ? true : false;
    if(!flag) initial = arr[0];
    arr.forEach((element) => {
        initial = callback(initial,element)
    })
    return flag ? initial : initial - arr[0];
}

console.log(_.reduce([1,2,2,2,3,10], function(sum,n){return sum+n}))

// Output: 

