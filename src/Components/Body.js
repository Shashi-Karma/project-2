import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Body.css'
import Cards from './Cards'
import Table from './Table'
import Tdata from './Tdata'
import T2data from './T2data'
import T3data from './T3data'
import { faker } from '@faker-js/faker'


export default function Body() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  // const columns = [
    
  //   { field:"AC_Name", header:faker.address.city()},
  //   { field:"Total_Booth",header: "Total Booth"},
  //   { field:"Mapped_Booth",header: "Mapped Booth"},
  //   { field:"Unmapped_Booth",header: "Unmapped Booth"},
    

  // ];

  return (

    <>

<div className='box'>
      <div className="container-fluid p-0">
        
          <div className='box1'>

            <div className="card32" ><h5 className="text"><text>Booth Detailed Report </text></h5>


            </div>

            <div className='container' style={{ display: 'flex' }}>
              <Cards />
              
                  


            </div>
            <div className="bloc-tabs">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Booth Mapping Report
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Booth Designation Report
              </button>
              <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                Detaild Booth Report
              </button>
            </div>

            <div className="content-tabs">
              <div
                className={toggleState === 1 ? "content  active-content" : "content"}
              >
                <div><div className="t2" >
                  <div class="dropdown">

                    <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <h1 className="bt">Select AC</h1>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">Sadulshahar</a>
                      <a class="dropdown-item" href="#">Ganganagar</a>
                      <a class="dropdown-item" href="#">Karanpur</a>
                      <a class="dropdown-item" href="#">Raisinghnagar (SC)</a>
                    </div>

                  </div>
                  <Table/>
                  
                </div>
                </div>


              </div>

              <div
                className={toggleState === 2 ? "content  active-content" : "content"}
              >
                <div><div className="t2" >
                  <div class="dropdown">

                    <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <h1 className="bt">Select AC</h1>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">Sribijaynagar</a>
                      <a class="dropdown-item" href="#">Gharsana</a>
                      <a class="dropdown-item" href="#">Padampur</a>
                      <a class="dropdown-item" href="#">Kesrisinghpur</a>
                    </div>

                  </div>
                  {/* <Table data={T2data} columns={columns} /> */}
                  <Table/>
                </div>
                </div>


              </div>

              <div
                className={toggleState === 3 ? "content  active-content" : "content"}
              >
                <div><div className="t2" >
                  <div class="dropdown">

                    <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <h1 className="bt">Select AC</h1>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">Anupgarh</a>
                      <a class="dropdown-item" href="#">Hanumangarh</a>
                      <a class="dropdown-item" href="#">Sadulshahar</a>
                      <a class="dropdown-item" href="#">Rawatsar</a>
                    </div>

                  </div>
                  {/* <Table data={T3data} columns={columns} /> */}
                  <Table/>
                </div>
                </div>


              </div>
            </div>


          </div>
        </div>
      </div>










    </>
  )
}
