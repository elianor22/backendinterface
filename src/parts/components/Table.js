import React from "react";

export default function Table({ modalOpen }) {
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
            <tr>
              <th>1</th>
              <td>Cleaning Services</td>
              <td>
                <img
                  src="https://img.freepik.com/free-vector/cleaner-with-cleaning-products-housekeeping-service_18591-52057.jpg?size=338&ext=jpg"
                  alt="cleaning services"
                  style={{ width: 100 }}
                />
              </td>
              <td>
                <button className="btn" onClick={modalOpen}>
                  <span
                    style={{ fontSize: " 1.5rem", color: "rgb(245, 196, 106)" }}
                  >
                    <i className="fas fa-edit"></i>
                  </span>
                </button>
                <button className="btn">
                  <span style={{ fontSize: " 1.5rem", color: "Tomato" }}>
                    <i className="fas fa-trash-alt"></i>
                  </span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
