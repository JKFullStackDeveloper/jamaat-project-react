import React from 'react'
import {member} from './MemberData.json'

function Member() {
    console.log(member[0].name)
    return (
        <>
        <div className=" bg-cover bg-no-repeat bg-left bg-[url('../images/bg-home.jpg')]  py-16 ">
            <table style={{border:"1px solid black", width:"50%", marginLeft:"20rem"}}>
                <thead style={{fontWeight:"bolder",textAlign:'center'}}>Member List</thead>
                <th style={{border:"1px solid black"}}>Member Name</th>
                <th style={{border:"1px solid black"}}>Address</th>
                <tbody> 
           {
            member.map((item)=>(
                <tr key={item.id}>
                   <td>{item.name}</td>
                   <td>{item.address}</td>  
                </tr>
            ))
           } 
           </tbody>
           </table>
        </div>
        </>
    );
}

export default Member
