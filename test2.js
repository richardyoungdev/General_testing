
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
// console.log(splitOutSnake)
// output: [ '10', 'gallon', 'urn' ]

let mapOut = splitOutSnake.map((element)=> {
  return element[0].toUpperCase() + element.slice(1)
          // 'g' => 'G'            // 'allon'
          //  'G' + 'allon'
          // "Gallon"
})
// console.log(mapOut)
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

function getProducerById(data, producerId) {
  // your code here

  return data.producers.reduce((producer, currentValue)=>{


     if(producer.id === producerId){
      currentValue = producer

      return currentValue
     }


     return currentValue
     
  })


}

// console.log(getProducerById(data, 'coffeeshop'))

function canAffordProducer(data, producerId) {
  // access data.coffee
  data.coffee
  // console.log("data.coffee:", data.coffee)

  // access producerId's price
  data.producers[0].price
  console.log(data.producers[0].price)

  // filter out object by producerId
  let obj = data.producers.filter((element)=>{
    return element["id"] === producerId
  })

  // console.log("producerId Obj:",obj)
  // console.log("producerId's price:", obj[0].price)
  
  let producerIdsPrice = obj[0].price
  // console.log(producerIdsPrice)

  // if data.coffee is equal to or greater than producerId's price, return true;
    if(data.coffee >= producerIdsPrice){
      console.log("true")
      return true;
    }
  // if data.coffee is less than producerId's price, return false;
    else {
      console.log("false")
      return false;
    }
}