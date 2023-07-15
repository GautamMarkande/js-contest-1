/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  let arr2 = [
    { id: 4, name: "bhawana", age: "21", profession: "IAS" },
    { id: 5, name: "bhuri", age: "22", profession: "Finance manager" },
    { id: 6, name: "asra", age: "23", profession: "dancer" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(employee=>{
        if(employee.profession==="developer")
        console.log(employee)
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(employee=>{
        if(employee.profession==="developer")
        console.log(employee)
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    arr.push( {id:4,name:"susan",age:"20",profession:"intern"} );
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let fillterdarr = arr.filter(employee=>{
        return employee.profession!=="admin"
    })
    console.log(fillterdarr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let conctarr = arr.concat(arr2);
    console.log(conctarr);
    
  }