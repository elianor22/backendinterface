import React, { Component } from "react";
import Modal from "react-modal";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    left: "25%",
    width: "50%",
    right: "auto",
    height: "800px",
    bottom: "auto",
  },
};

export default class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createCategory: {
        category: "",
        image: "",
      },
    };
  }

  handle

  handleFormChange = (event) => {
    let createCategoryNew = { ...this.state.createCategory };
    createCategoryNew[event.target.name] = event.target.value;
    this.setState({
      createCategory: createCategoryNew,
    });
  };

  handleSave = () => {
    console.log(this.state.createCategory, "sukses");
    axios.post("localhost:4000/users", {
      name: "asdasd",
    });
  };
  render() {
    return (
      <div>
        <Modal isOpen={this.props.open} style={customStyles}>
          <div style={{ overflow: "auto" }}>
            <div className="form-group">
              <label htmlFor="category">Input Category</label>
              <input
                type="text"
                className="form-control"
                id="category"
                name="category"
                onChange={this.handleFormChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Input Category</label>
              <input
                type="text"
                className="form-control"
                id="category"
                name="category"
                onChange={this.handleFormChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Chose Photo</label>
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                onChange={this.handleFormChange}
              />
            </div>

            <CKEditor editor={ClassicEditor} data="" />
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
          </div>
        </Modal>
        <div></div>
      </div>
    );
  }
}
