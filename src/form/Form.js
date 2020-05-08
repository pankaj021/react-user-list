import React, {PureComponent} from 'react';
import axios from 'axios';
import './From.css'

export default class Form extends PureComponent {
    formSubmit = (event) => {
        event.preventDefault();
        console.log("from submit>>>>>>>>>>>>");
        console.log("this.name>>>>>>>>>>>>", this.name);
        console.log("this.address>>>>>>>>>>>>", this.address);
        console.log("this.gender>>>>>>>>>>>>", this.gender);
        if (this.name && this.address && this.gender) {
            axios
                .post('http://localhost:3001/users/', {
                name: this.name,
                address: this.address,
                gender: this.gender
            })
                .then(response => {
                    console.log("formSubmit response:::::::", response);
                    const newUser = response.data;
                    this
                        .props
                        .pushIntoUserlist(newUser);
                })
                .catch(error => {
                    console.log("formSubmit error:::::::", error);
                })
        }
    }
    render() {
        return (
            <form className='form' onSubmit={this.formSubmit}>
                <div className='form-item'>
                    <label className='f-item input-label'>Username</label>
                    <input
                        className='f-item input'
                        type='text'
                        onChange={(e) => this.name = e.target.value}/>
                    <span className='f-item input-error'></span>
                </div>
                <div className='form-item'>
                    <label className='f-item input-label'>Address</label>
                    <input
                        className='f-item input'
                        type='text'
                        onChange={(e) => this.address = e.target.value}/>
                    <span className='f-item input-error'></span>
                </div>
                <div className='form-item'>
                    <label className='f-item input-label'>Gender</label>
                    <select
                        className='f-item input-dd'
                        onChange={(e) => this.gender = e.target.value}>
                        <option></option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                    <span className='f-item input-error'></span>
                </div>
                <button className='button' type='submit'>Submit</button>
            </form>
        )
    }
}