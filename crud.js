// TEST DATA
let mexican = [{id:1, name:'carnitas', price:21},{id:2, name:'asada',price:22}]

let american = [{id:1, name:'burgers', price:21},{id:2, name:'pizza rolls',price:22}]



//MAP
// foods:[{id:number,name:string, price:number},...]
/// returns array of formatted strings[] (you choose what these look like)

// const about = (foods)=>{
//   return mexican.map((f)=>{
//       return `${f.name} is ${f.price}.00$`
//   })
// }
// let foodStrings = about(mexican)
// console.log('Mexican Menu + Price: ', foodStrings)
 





// [...]
// foods:[{id:number,name:string, price:number},...]
// food: {id:number,name:string, price:number}
/// returns new array with food add

// const addFood1=(foods, food)=>{
//   return[...foods, food]
// }
// const addedFood1 = addFood1 (mexican, {id:3, name:'tacos', price: 15})
// console.log('Old Food Menu:', mexican)
// console.log('New Food Menu:', addedFood1 )




// [...]
// foods:[{id:number,name:string, price:number},...]
// id:number,
// name:string, 
// price:number
/// returns new array with food add

// const addFood2 = (foods, id,name,price)=>{
//   return [addedFood1,{ id, name, price}]
// }
//  const addedFood2 = addFood2(mexican,4,'empanada',7)
//  console.log('Old Food Menu:', addedFood1)
//  console.log('New Food Menu & Prices:', addedFood2 )






//MAP
// foods:[{id:number,name:string, price:number},...]
// id:number,
// price:number}
/// returns new array with the price updated with the id given

// const updateFood1=(foods, id, price)=>{
// //  // Update - Map
//   let updatedFood1Price = mexican.map((f)=>{
//     if(f.id === id){
//       return {...f, price: f.price+10}
//   }
//   return f
// })
// return updatedFood1Price
// }
// console.log('old food price', mexican)
// console.log('updated food prices: ', updateFood1(mexican, 2, 0))







//MAP
// foods:[{id:number,name:string, price:number},...]
// id:number,
// food:{id:number,name:string, price:number}}
/// returns new array with the food item updated with the id given

// const updateFoodItem=(foods, id, food)=>{
//   let updatedFoodItemName = foods.map((f)=>{
//     if(f.id === id){
//       return food
//   }
//   return f
// })
// return updatedFoodItemName
// }
// console.log('old food:', mexican)
// console.log('new food item added: ', updateFoodItem(mexican, 2, {id:2, name:'taquitos', price: 10}))



// FILTER
// foods:[{id:number,name:string, price:number},...]
// id:number,
// removes the food with the given the id

// const deleteFood1 = (foods,id)=>{
//   return foods.filter((f)=>{
//     return f.id !==1
//   })
// }
// console.log('removed id1: ', deleteFood1(mexican))




// FILTER
// foods:[{id:number,name:string, price:number},...]
// price:number,
// removes the food with price over price given

// const deleteFood2 = (foods,price)=>{
//   return foods.filter((f)=>{
//     return f.price === 21
//   })
// }
// console.log('Foods that are $21.00: ', deleteFood2(mexican))


