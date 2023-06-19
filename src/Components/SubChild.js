import React, { useContext } from 'react';
import { EmpContext } from './Parent';

function SubChild() {
    let context=useContext(EmpContext);

    function incrementSalary(){

        let newSal=context.data.salary+context.data.salary*0.1;
        context.updateSalary({...context.data,salary:newSal});
    }


  return (
    <>
    <h2>This is subchild component</h2>
    Employee Id:<b>{context.data.id}</b>
    <br/>
    Employee Name:<b>{context.data.name}</b>
    <br/>
    Employee Salary:<b>{context.data.salary}</b>
    <br/>
    <button onClick={incrementSalary}>Increment</button>

    </>
  )
}

export default SubChild;