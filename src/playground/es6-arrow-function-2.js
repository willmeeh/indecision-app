const add = (a, b) => {
    // console.log(arguments)
    return a + b;
}

console.log(add(1, 1));

const user = {
    name: 'William',
    cities: ['Santa Cruz', 'Novo Cabrais', 'Candelaria'],
    printPlacesLived() { // Funcao que funciona o this
        return this.cities.map((item, index, arr) => this.name + ' has living in ' + item);
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((item, key, arr) => item * this.multiplyBy);
    }
}

console.log(multiplier.multiply());