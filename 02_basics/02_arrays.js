 const mrvlHeroes = ["Captain, IronMan, Thor"]
 const dcHeroes = ["Superman, Batman, Aquaman"]

 const allHeroes = mrvlHeroes.concat(dcHeroes)
const allNewHeroes = [...mrvlHeroes,...dcHeroes,...allHeroes]
 //console.log(allHeroes);
 //console.log(allNewHeroes.flat(Infinity));
 
 const scrmbldArray = [1,2,3,4,[1,2,3,4],1,2,3,[0,9,8,7,6,[7,6,5,4,[7,6,5,4,],8,8],6,],6]
 //console.log(scrmbldArray.flat(Infinity));

 // Check if array.
 //console.log(Array.isArray(scrmbldArray));

 // Convert to array.

 //console.log(Array.from("Ali Ejaz"));


 let points1 = 100
 let points2 = 250
 let points3 = 350

 console.log(Array.of(points1,points2,points3));
 
 
 
 