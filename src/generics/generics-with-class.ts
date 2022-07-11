export class Pessoa<T, U> {
  constructor(public name: T, public age: U) {}
}

export class Stack<T> {
  private count = 0
  private element: { [k: number]: T } = {}

  push(element: T): void {
    this.element[this.count] = element
    this.count++
  }

  pop(): T | undefined {
    if (this.count < 0) return undefined

    this.count--
    const element = this.element[this.count]
    delete this.element[this.count]
    return element
  }

  isEmpty(): boolean {
    return this.count === 0
  }

  showStack(): void {
    for (const key in this.element) {
      console.log(this.element[key])
    }
  }
}

const stack = new Stack<number | string>()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push('string')
stack.showStack()

while (!stack.isEmpty()) {
  console.log(stack.pop())
}
