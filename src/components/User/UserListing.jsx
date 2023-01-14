import React, { createElement, useEffect, useState } from "react";
import './css/userlisting.css'
function userlisting() {
    const [page,setpage] = useState(0);
    const [list,setlist] = useState([]);
    const [total_pages,settotal_pages] = useState([]);
    function mappingobject(pager,jsonobject) {
        let page_number = pager.page;
        let offset = page_number + 5
        const sliced = Object.entries(jsonobject).slice(page_number, offset);
        return sliced;
    }
    async function getdata() {
        let response = await fetch('https://fakestoreapi.com/products');
        let result =  await response.json();
        let final_result = mappingobject({page},result);
        var total_page = result.length/5;
        var numbers = [];
        for (var i = 0; i < total_page; i++) {
            numbers.push(i);
        }
        settotal_pages(numbers);
        setlist(final_result);
    }
    function handlePrevious(){
        setpage(page - 5);
    }
    function handleNext() {
        setpage(page + 5);        
    }
     useEffect(() => { 
        getdata();
      });
    return (<>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
         <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-box clearfix">
                <div className="table-responsive">
                  <table className="table user-list">
                    <thead>
                      <tr>
                        <th>
                          <span>Id</span>
                        </th>
                        <th>
                          <span>Product Name</span>
                        </th>
                        <th className="text-center">
                          <span>Price</span>
                        </th>
                        <th>
                          <span>Description</span>
                        </th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                        list.map((item) =>
                            
                            <tr>
                               <td>{item[1].id}</td>
                               <td>{item[1].title}</td>
                               <td>{item[1].price}</td>
                               <td>{item[1].description}</td> 
                            </tr>
                        )

                    }
                        
                    </tbody>
                  </table>
                </div>
                    <button type = 'button' onClick = {()=>handlePrevious()}>Previous</button>
                    {
                        total_pages.map((item) =>
                          <button  onClick = {()=>setpage(item * 5)}>{item+1}</button>
                        )
                    }
                    <button  type = "button " onClick = {()=>handleNext()} >Next</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default userlisting;