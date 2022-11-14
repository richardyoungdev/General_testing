const data = {
  coffee: 50,
  totalCPS: 0,
  producers: [
    {
      id: "chemex",
      price: 10,
      unlocked: false,
      cps: 1,
      qty: 0,
    },
    {
      id: "french_press",
      price: 50,
      unlocked: false,
      cps: 2,
      qty: 0,
    },
    {
      id: "mr._coffee",
      price: 100,
      unlocked: false,
      cps: 5,
      qty: 0,
    },
    {
      id: "ten_cup_urn",
      price: 500,
      unlocked: false,
      cps: 10,
      qty: 0,
    },
    {
      id: "espresso_machine",
      price: 1000,
      unlocked: false,
      cps: 20,
      qty: 0,
    },
    {
      id: "ten_gallon_urn",
      price: 5000,
      unlocked: false,
      cps: 50,
      qty: 0,
    },
    {
      id: "coffeeshop",
      price: 10000,
      unlocked: false,
      cps: 75,
      qty: 0,
    },
    {
      id: "coffee_factory",
      price: 50000,
      unlocked: false,
      cps: 100,
      qty: 0,
    },
    {
      id: "coffee_fountain",
      price: 100000,
      unlocked: false,
      cps: 200,
      qty: 0,
    },
    {
      id: "coffee_river",
      price: 500000,
      unlocked: false,
      cps: 500,
      qty: 0,
    },
    {
      id: "coffee_ocean",
      price: 1000000,
      unlocked: false,
      cps: 1000,
      qty: 0,
    },
    {
      id: "coffee_planet",
      price: 5000000,
      unlocked: false,
      cps: 2000,
      qty: 0,
    },
  ],
};

function canAffordProducer(data, producerId) {
  let arrayOfAnObj = data.producers.filter((element) => element["id"] === producerId);

  let producerIdsPrice = arrayOfAnObj[0].price;

  return data.coffee >= producerIdsPrice ? true : false;
}

function updateCPSView(cps) {
  const cpsContainer = document.querySelector("#cps")
  cpsContainer.innerText = cps;
}

function updatePrice(oldPrice) {
  return Math.floor(oldPrice * 1.25)
}

// - returns a boolean
// - returns false if the player cannot afford the producer
// - returns true if the player can afford the producer
// - increments the quantity of the producer in question only if the player can afford it
// - decrements the player's coffee by the *current* price of the producer, but only if the player can afford it
// - updates the price of the producer to 125% of the previous price, rounded down, but only if the player can afford the producer
// - updates the total CPS, but only if the player can afford the producer
// - does not modify data in any way if the player tries to buy something they can't afford



function attemptToBuyProducer(data, producerId) {


  if(canAffordProducer(data, producerId) === true){
    // if player can afford the producer, return true
    console.log("Player can afford producer!")
    // if player can afford producer, increment the quantity of producer in question

      // filter out object by producerId
      let arrayOfAnObj = data.producers.filter((element)=>{
        return element["id"] === producerId
      })

      console.log(arrayOfAnObj)

      // increment the quantity of producer in question
      // access producerId's qty value
      let producerIdsQtyValue = arrayOfAnObj[0].qty 
      console.log(producerIdsQtyValue)

      producerIdsQtyValue++
      // producerIdsQtyValue = producerIdsQtyValue + 1
      console.log(producerIdsQtyValue)

      console.log(arrayOfAnObj)
      // updates price of producer to 125% of previous price, rounded down
        // Hint: Use a function already written.
        // updatePrice(data)
  }

  else if (canAffordProducer(data, producerId) === false){
    console.log("false")
  }


    // updates the total CPS, but only if the player can afford the producer
      // Hint: Use a function already written.

}

attemptToBuyProducer(data, "chemex" )