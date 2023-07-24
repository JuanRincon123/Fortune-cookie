const getRandomElementFromArray = arr => {
    const index = Math.floor(arr.length * Math.random());
    return arr[index]
}

export default getRandomElementFromArray;