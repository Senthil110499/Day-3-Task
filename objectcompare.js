let obj1 = { name: "person 1", age:5};
let obj2 = { age:5, name: "person 1"};

ObjectsAreEqual = obj1,obj2,"=>" 
    const objectKeys1 = Object.keys(obj1)
    const objectKeys2 = Object.keys(obj2)
  if(objectKeys1.length !== objectKeys2.length) {
        return false;
     }
     for (const key of objectKeys1) {
       const value1 = obj1[key];
       const value2 = obj2[key];
       const isbothAreObjects =(value1) && (value2);
       if((isbothAreObjects && !(value1, value2)) || (!isbothAreObjects && value1 === value2)) {
      return false;
  }
     }
    return true;
  