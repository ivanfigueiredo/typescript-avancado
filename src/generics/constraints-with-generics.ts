type GetKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K]

const getKey: GetKeyFn = (object, key) => object[key]

const animal = {
  cor: 'Amarelo',
  vacinas: ['vacina 1', 'vacina 2'],
  idade: 10,
}

const vacinas = getKey(animal, 'vacinas')
const cor = getKey(animal, 'cor')

console.log(vacinas, cor, getKey(animal, 'idade'))
