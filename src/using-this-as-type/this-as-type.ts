export class Calculator {
  constructor(public number: number) {}

  add(n: number): this {
    this.number += n
    return this
  }

  sub(n: number): this {
    this.number -= n
    return this
  }

  div(n: number): this {
    this.number /= n
    return this
  }

  mul(n: number): this {
    this.number *= n
    return this
  }
}

export class SubCalculator extends Calculator {
  pow(n: number): this {
    this.number **= n
    return this
  }
}

const cal = new Calculator(10)
cal.add(5).mul(2).div(2).sub(5)

const subCal = new SubCalculator(10)
subCal.add(5).mul(2).div(2).sub(5).pow(2)

console.log(cal)
console.log(subCal)

// Design Pattern Build - Gof

type Method = typeof methods
type MethodKeys = keyof Method
const methods = {
  get: 'get',
  post: 'post',
}

type Url = {
  url: string
}
export class RequestBuilder {
  private method: string | null = null
  private url: string | null = null

  setMethod(methodKeys: MethodKeys, method: Method): this {
    this.method = method[methodKeys]
    return this
  }

  setUrl(value: Url): this {
    value.url ? (this.url = value.url) : (this.url = 'undefined')
    return this
  }

  send(): void {
    console.log(`Send data via ${this.method} to ${this.url}`)
  }
}

const request = new RequestBuilder()
request
  .setUrl({ url: 'https://www.google.com' })
  .setMethod('get', methods)
  .send()
