import React, { Component } from "react";
import ValidationError from "./ValidationError";

class AddFolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
              value: '',
              touched: false
            }
      };
    }

    updateName(name) {
        this.setState({name: {value: name, touched: true}});
    }

    handleSubmit(event) {
        event.preventDefault();
        const {name, password, repeatPassword} = this.state;
        console.log('Name: ', name.value);
    }

    validateName() {
        const name = this.state.name.value.trim();
        if (name.length === 0) {
          return 'Folder name is required';
        } else if (name.length > 20) {
          return 'This name is too long';
        }
      }


        render () {
            const nameError = this.validateName();

            {this.state.name.touched && (
                <ValidationError message={nameError} />
              )}

            return (
                <form className="newFolder" onSubmit={e => this.handleSubmit(e)}>
                    <h2>Add a New Folder</h2>
                    <div className="">* required field</div>  
                    <div className="form-group">
                        <label htmlFor="name">Folder Name</label>
                        <input type="text" className="folder-name"
                            name="name" id="name" onChange={e => this.updateName(e.target.value)}
                            />
                            {this.state.name.touched && <ValidationError message={nameError} />}
                            <button
                            type="submit"
                            className="submit-button"
                            disabled={
                                this.validateName() ||
                            }
                         >
                            Save
                        </button>
                      </div>
                </form>
            );
    }

}

export default AddFolder;