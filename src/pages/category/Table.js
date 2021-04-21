import React, { useState } from "react";

export default function Table({ modalOpen,categoryData,url,remove }) {

  const data = categoryData;




  
  
  return (
    <div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Category</th>
              <th scope="col">Image</th>
              <th scope="col">Option</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => {
              return (
                <>
                  <tr key={i+111}>
                    <th>{i+1}</th>
                    <td>{item.type}</td>
                    <td>
                      <img
                        src={`${url}/${item.photo}`}
                        alt="cleaning services"
                        style={{ width: 100 }}
                      />
                    </td>
                    <td>
                      <button className="btn" onClick={modalOpen}>
                        <span
                          style={{
                            fontSize: " 1.5rem",
                            color: "rgb(245, 196, 106)",
                          }}
                        >
                          <i className="fas fa-edit"></i>
                        </span>
                      </button>
                      <button className="btn" onClick={()=>remove(item._id)}>
                        <span style={{ fontSize: " 1.5rem", color: "Tomato" }}>
                          <i className="fas fa-trash-alt"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
