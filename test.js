const data = {
  coffee: 0,
  totalCPS: 0,
  producers: [
    {
      id: 'chemex',
      price: 10,
      unlocked: false,
      cps: 1,
      qty: 0
    },
    {
      id: 'french_press',
      price: 50,
      unlocked: false,
      cps: 2,
      qty: 0
    },
    {
      id: 'mr._coffee',
      price: 100,
      unlocked: false,
      cps: 5,
      qty: 0
    },
    {
      id: 'ten_cup_urn',
      price: 500,
      unlocked: false,
      cps: 10,
      qty: 0
    },
    {
      id: 'espresso_machine',
      price: 1000,
      unlocked: false,
      cps: 20,
      qty: 0
    },
    {
      id: 'ten_gallon_urn',
      price: 5000,
      unlocked: false,
      cps: 50,
      qty: 0
    },
    {
      id: 'coffeeshop',
      price: 10000,
      unlocked: false,
      cps: 75,
      qty: 0
    },
    {
      id: 'coffee_factory',
      price: 50000,
      unlocked: false,
      cps: 100,
      qty: 0
    },
    {
      id: 'coffee_fountain',
      price: 100000,
      unlocked: false,
      cps: 200,
      qty: 0
    },
    {
      id: 'coffee_river',
      price: 500000,
      unlocked: false,
      cps: 500,
      qty: 0
    },
    {
      id: 'coffee_ocean',
      price: 1000000,
      unlocked: false,
      cps: 1000,
      qty: 0
    },
    {
      id: 'coffee_planet',
      price: 5000000,
      unlocked: false,
      cps: 2000,
      qty: 0
    }
  ]
};

// console.log(data)

// how to access produces
// console.log(data.producers)

// how to access chemex's unlocked value false?
// console.log(data.producers[0]["unlocked"])

// // change the cheme's unlocked value from false to true
// console.log(data.producers[0]["unlocked"] = true)

// // how to get coffee price?
// console.log(data.producers[0].price)

// test
let coffeeCount = 50;

const test = data.producers.forEach(element => {
  // console.log("price", element["price"])
  // console.log("price 1/2", element["price"]/2)


  if(coffeeCount >= element["price"]/2){
    element["unlocked"] = true
    
  }
});

// console.log(data)

// 1) returns an array of producer objects
// 2) filters out producer objects that are not unlocked

// const test2 = data.producers.map((element)=>{
//   return element
// })

// console.log(test2)

// const filterOutProducerObjects = data.producers.filter((element) => {
//   if(element["unlocked"] === false){
//     return element["id"]
//   }
  
// })

// console.log(filterOutProducerObjects)

// how to only return producers 0 id?

// console.log(data.producers[0]["id"])

// how to return only id?
// const hmm = data.producers.map((element)=>{
//   return element["id"]
// })

// console.log(hmm)

const testStrings = [
  'input_string',
  'mr._coffee',
  'Mr._Coffee',
  '10_gallon_urn'
];
// const results = testStrings.map(code.makeDisplayNameFromId);
// expect(results[0]).to.equal('Input String');
// expect(results[1]).to.equal('Mr. Coffee');
// expect(results[2]).to.equal('Mr. Coffee');
// expect(results[3]).to.equal('10 Gallon Urn');

// turn snake_string tp Title String

let str = "10_gallon_urn"; // => 10 Gallon Urn

let splitOutSnake = str.split("_")
console.log(splitOutSnake)
// output: [ '10', 'gallon', 'urn' ]

let mapOut = splitOutSnake.map((element)=> {
  return element[0].toUpperCase() + element.slice(1)
          // 'g' => 'G'            // 'allon'
          //  'G' + 'allon'
          // "Gallon"
})
console.log(mapOut)
// output: [ '10', 'Gallon', 'Urn' ]

let joinElements = mapOut.join(" ")
// console.log(joinElements)
// output: 10 Gallon Urn


// alternative
let ret = str
  .split("_")
  // .filter(x => x.length > 0)
  .map((x) => (x.charAt(0).toUpperCase() + x.slice(1)))
  .join(" ");
// console.log(ret);