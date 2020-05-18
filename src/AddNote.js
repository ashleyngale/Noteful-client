import React, { Component } from "react";
import ValidationError from "./ValidationError";

class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
              value: '',
              touched: false
            },
            info: {
              value: '',
              touched: false
            }
      };
    }

    updateName(name) {
        this.setState({name: {value: name, touched: true}});
    }

    updateName(info) {
        this.setState({name: {value: info, touched: true}});
    }

    handleSubmit(event) {
        event.preventDefault();
        const {name, password, repeatPassword} = this.state;
        console.log('info: ', info.value);
    }

    validateName() {
        const name = this.state.info.value.trim();
        if (info.length === 0) {
          return 'Folder name is required';
        } else if (name.length > 2000) {
          return 'This note is too long';
        }
      }


        render () {
            const nameError = this.validateInfo();

            {this.state.name.touched && (
                <ValidationError message={nameError} />
            )}

            return (
                <form className="newNote" onSubmit={e => this.handleSubmit(e)}>
                    <h2>Add a New Note</h2>
                    <div className="">* required field</div>  
                    <div className="form-group">
                        <label htmlFor="name">Note Name</label>
                        <input type="text" className="note-name"
                            name="name" id="name" onChange={e => this.updateName(e.target.value)}
                            />
                        <input type="text" className="note-info"
                            name="info" id="info" onChange={e => this.updateInfo(e.target.value)}
                            />
                            {this.state.info.touched && <ValidationError message={nameError} />}
                            <button
                            type="submit"
                            className="submit-button"
                            disabled={
                                this.validateName() ||
                                this.validateInfo() ||
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