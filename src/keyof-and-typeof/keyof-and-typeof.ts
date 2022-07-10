type TranslateColorsObj = typeof colorsObj
type ColorsKeys = keyof TranslateColorsObj

const colorsObj = {
  red: 'vermelho',
  green: 'verde',
  blue: 'azul',
  purple: 'roxo',
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
}

export function translateCor(color: ColorsKeys, colors: TranslateColorsObj) {
  return colors[color]
}

console.log(translateCor('vermelho', colorsObj))
console.log(translateCor('red', colorsObj))
console.log(translateCor('azul', colorsObj))
console.log(translateCor('blue', colorsObj))
