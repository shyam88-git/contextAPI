import React, { useContext } from 'react';
import SubChild from './SubChild';
import { EmpContext } from './Parent';

function Child() {
    let context=useContext(EmpContext);
  return (
    <div>
        <h2>This is child component</h2>
       
        Employee Id:<b>{context.data.id}</b>
        <br/>
        Employee Name:<b>{context.data.name}</b>
        <br/>
        Employee Salary:<b>{context.data.salary}</b>
        <br/>
        <hr/>
        <SubChild/>

    </div>
  )
}

export default Child;