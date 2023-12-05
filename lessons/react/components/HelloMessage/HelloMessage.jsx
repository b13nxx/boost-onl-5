// Varsayılan olarak export edilen sadece 1 tane olabilir:
const countries = [
  { name: 'USA', capital: 'Washington DC' },
  { name: 'Germany', capital: 'Berlin' },
  { name: 'Turkey', capital: 'Ankara' }
]

export default countries

export /* default */ const languages = [
  { name: 'English', code: 'en' },
  { name: 'German', code: 'de' },
  { name: 'Turkish', code: 'tr' }
]

// React componentleri özünde birer fonksiyondur:
export function HelloMessage() {

  // React componentlerinde render edilecek parça JSX ile yazılır ve return edilir
  // JSX, HTML ile benzer özellikler gösterse de HTML değildir
  return <h1>Bu bir hello message'dir</h1>;
}
