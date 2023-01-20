import React,{ useEffect,useState } from 'react';

import axios from 'axios';

function Table() {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=> {
            console.log(res.data)
            setData(res?.data)

        })
        .catch(err =>{
            alert('Something went wrong.')
        })
    },[])
    
// const Table = ({data, columns}) =>{
    
    return(
        <div>
            <table>
             <thead>
                <tr>
                    
              <th>AC Name</th>
              <th>Name</th>
              <th>E-Mail</th>
              <th>Phone Number</th>
                        
                </tr>
             
                </thead>
                {
                data.length > 0 &&
                data.map((props)=> {
                return(
                    <tbody>
                    <tr>
                        
                           <td>{props.name}</td>
                           <td>{props.username}</td>
                           <td>{props.website}</td>
                           <td>{props.phone}</td>
                        
                    </tr>
                    </tbody>
                )})}
             
            </table>
        </div>

    );
   };
export default Table;
 
