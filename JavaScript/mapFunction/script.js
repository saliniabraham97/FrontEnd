//Complete the createUserObjects function
//Do not alter the starter Code
const ids = [1, 2, 3];
const names = ["John", "Jane", "Alice"];
const images = ["john.jpg", "jane.jpg", "alice.jpg"];
function createUserObjects(ids,names,images){
    //Implement your function here
    return ids.map((id, index) => ({
        id: id,
        name: names[index],
        image: images[index]
      }));
    // const user=ids.map((ids,names,images)=>{return {id:ids,name:names,image:images}});
    // console.log(user);
}

const user=createUserObjects(ids,names,images);
console.log(user);
