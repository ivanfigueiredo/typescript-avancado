type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean

export function myFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const novoArray = []

  for (const value of array) {
    if (callbackfn(value)) {
      novoArray.push(value)
    }
  }

  return novoArray
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filteredArrayFromOriginal = array.filter((value) => value < 5)
console.log(filteredArrayFromOriginal)

const filteredArray = myFilter(array, (value) => value < 5)
console.log(filteredArray)
