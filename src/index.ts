/**
 * Create a promise that resolves after some time
 * @param n number of milliseconds before promise resolves
 */
function timeout(n: number) {
  return new Promise((res) => setTimeout(res, n))
}

/**
 * Add three numbers
 * @param a first number
 * @param b second
 */
export async function addNumbers(a: number, b: number): Promise<number> {
  await timeout(500)
  return a + b
}

//== Run the program ==//
;(async () => {
  console.log(await addNumbers(3, 4))
})()

// Working with any typ
// between 500 and 1000
const RANDOM_WAIT_TIME = Math.round(Math.random() * 500) + 500

let startTime = new Date()
let endTime: Date

setTimeout(() => {endTime = new Date()}, RANDOM_WAIT_TIME)

function printCar(car: {
  make: string
  model: string
  year: number
  chargeVoltage?: number
}) {
  let str = `${car.make} ${car.model} (${car.year})`
  car.chargeVoltage
  //    ^?
  if (typeof car.chargeVoltage !== "undefined")
    str += `// ${car.chargeVoltage}v`
  //                 ^?
  console.log(str)
}

printCar({
  make: "Tesla",
  model: "Model 3",
  year: 2020,
  chargeVoltage: 220,
})

// const phones = {
//   home: { country: "+1", area: "211", number: "652-4515" },
//   work: { country: "+1", area: "670", number: "752-5856" },
//   fax: { country: "+1", area: "322", number: "525-4357" }
// }

const phones: {
  [k: string]: {
    country: string
    area: string
    number: string
  } | undefined
} = {}

phones.fax

const numPair: [number, number] = [4, 5]
numPair.push(6) // [4, 5, 6]
numPair.pop() // [4, 5]
numPair.pop() // [4]
numPair.pop() // []