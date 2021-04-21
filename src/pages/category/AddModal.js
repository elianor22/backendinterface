import React, { Component } from "react";
import Modal from "react-modal";
import axios from "axios";



Modal.setAppElement("#root");

const customStyles = {
  content: {
    left: "25%",
    width: "50%",
    right: "auto",
    bottom: "auto",
  },
};

export default class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createCategory: {
        type: "",
        photo: "",
      },
    };
  }
  
  handleFormChange=(event)=> {
    let createCategoryNew = { ...this.state.createCategory };
    createCategoryNew[event.target.name] = event.target.value;
    this.setState({
      createCategory: createCategoryNew
    })
  }

  handleSave =()=> {

    const post = {
      type:this.state.createCategory
    }
   axios({
     method:'post',
     url:"http://localhost:9000/category/", 
     data:this.state.createCategory,
     headers: { "Content-Type": "multipart/form-data" },
    }).then(
     (res) => {
       console.log(res);
     },
     (err) => {
       console.log(err);
     }
   );

  }
  render() {
    return (
      <div>
        <Modal isOpen={this.props.open} style={customStyles}>
          <div className="form-group">
            <label htmlFor="type">Input Category</label>
            <input
              type="text"
              className="form-control"
              id="type"
              name="type"
              onChange={this.handleFormChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Chose Photo</label>
            <input
              type="file"
              className="form-control"
              id="photo"
              name="photo"
              onChange={this.handleFormChange}
            />
          </div>

          <div className="modal-footer">
            <button
              type="button"
              onClick={this.props.onClose}
              className="btn btn-secondary"
            >
              Close
            </button>
            <button
              type="button"
              onClick={this.handleSave}
              className="btn btn-primary"
            >
              Save changes
            </button>
          </div>
        </Modal>
        <div></div>
      </div>
    );
  }
}
