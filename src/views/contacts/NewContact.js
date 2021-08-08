// This is an uncontrolled React form, which is way simpler than
// the normal React controlled form
// https://reactjs.org/docs/uncontrolled-components.html
//
// You can use browser form validation these days, and just
// get the values from the form on submit.

import React from 'react'

import './newContact.scss'

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
      }
  onSubmit = event => {
    event.preventDefault()
    const {name, phone,email, frequency} = event.target.elements
    const values = {
      name: name.value,
      phone: phone.value,
      email: email.value,
      frequency: frequency.value
    }
    console.log(values)
    debugger
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

    render() {    

    let name =this.state.name;
    let firstName  = name.split(" ")[0]
    let placeholderEmail = `${name.replaceAll(' ','.').toLowerCase()}@gmail.com`;
    
    return  <form className="form--new-contact" onSubmit={this.onSubmit}>

                <div className="form-title">
                    <h1>Create New Contact</h1>
                </div>
                <div className="input">
                    <label  htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="John Doe"       value={this.state.name} onChange={this.handleChange} />
                </div>
                <div className="input">
                    <label  htmlFor="phone">Phone</label>
                    <input type="text" name="phone"  placeholder="+1 365 688 2276"value={this.state.phone} onChange={this.handleChange} />
                </div>
                <div className="input">
                    <label  htmlFor="email">Email</label>
                    <input type="text" name="email" placeholder={placeholderEmail} value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className="input">
                    <label  htmlFor="freq">How ofter you want to contact {firstName}?</label>
                    <input type="text" name="freq" placeholder="Once in a week"value={this.state.freq} onChange={this.handleChange} />
                </div>

                <button type="submit">Add Contact</button>
                
            </form>
  }
}

export default PostForm
 