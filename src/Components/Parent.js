import React, { useState } from 'react'
import Child from './Child';
export let EmpContext=React.createContext();

function Parent() {
    const[emp,setEmp]=useState({id:101,name:'Amit',salary:20000.0});
  return (
    <div>
        <h2>This is a parent component</h2>
        
         Employee Salary:<b>{emp.salary}</b>
         <hr/>

         <EmpContext.Provider value={{data:emp , updateSalary:setEmp}}>

            <Child/>
         </EmpContext.Provider>
        
    </div>
  )
}

export default Parent;