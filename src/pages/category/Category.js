import React, { useState, useEffect } from "react";
import Table from "./Table";
import Sidebar from "../../parts/layouts/Sidebar";
import AddModal from "./AddModal";
import axios from "axios";

export default function Category() {

  const [isLoading,setIsLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(false);
  const [data,setData] = useState(null)
  
  console.log(data);


  const rootPath = "http://localhost:9000"
  const path = 'category'
  useEffect(() => {
    getDataApi();

    return () => {};
  }, []);


  const getDataApi = async() =>{

    try {
      const categoryData = await axios.get(`${rootPath}/${path}`)
        const data = await categoryData.data
         setData(data.data);
         setIsLoading(false);
      
    } catch (error) {
       console.log(error);
    }
  }



  const handleRemove = (dataId) =>{
    axios
      .delete(`${rootPath}/${path}/${dataId}`)
      .then((result) => {
        // console.log(result);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <h1>Category</h1>
            <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
              Add Category
            </button>

            {isLoading === true ? (
              ""
            ) : (
              <Table
                modalOpen={() => setIsOpen(true)}
                categoryData={data}
                url={rootPath}
                remove={(dataId) => handleRemove(dataId)}
              />
            )}
          </div>
        </div>
        <AddModal
          open={isOpen}
          data={data}
          onClose={() => setIsOpen(false)}
          title={"category"}
          // addCategory={(category)=>putDataCategory(category)}
        />
      </div>
    </div>
  );
}

