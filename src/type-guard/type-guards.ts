export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`
}

console.log(add(1, 5))
console.log(add('a', 'b'))

type Person = { tipo: 'person'; nome: string }
type Animal = { tipo: 'animal'; cor: string }
type PersonOrAnimal = Person | Animal

export class Student implements Person {
  tipo: 'person' = 'person'
  constructor(public nome: string) {}
}

function showName(obj: PersonOrAnimal): void {
  if ('nome' in obj) console.log(obj.nome)
  if (obj instanceof Student) console.log(obj.nome)
  switch (obj.tipo) {
    case 'person':
      console.log(obj.nome)
      return
    case 'animal':
      console.log('Is a animal', obj.cor)
      return
  }
}

showName(new Student('John'))
showName({ tipo: 'animal', cor: 'Azul' })
