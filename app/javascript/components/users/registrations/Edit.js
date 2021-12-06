import React from "react"
import PropTypes from "prop-types"
import axios from "axios";

class Edit extends React.Component {
  constructor(props){
      super(props);
      this.state ={
          email:'',
          phone:'',
          password:'',
          password_confirmation:'',
          current_password:''
      }
      this.sendFun = this.sendFun.bind(this);
      this.updateCheckValue = this.updateCheckValue.bind(this);
  }
  updateCheckValue(){
              this.setState({remember: !this.state.remember})
  }
  sendFun(){
    const token = document.querySelector('[name=csrf-token]').content;
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
    axios.put('/users', {
      user: {
        email: this.state.email,
        phone: this.state.phone,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation,
        current_password: this.state.current_password
      },
      commit: "Update"
    })
    .then(function(response){
      window.location.replace("/")
    })
    .catch(function(error){
      console.log(error)
    })
  }
  cancel(){
    const token = document.querySelector('[name=csrf-token]').content;
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
    axios.delete('/users')
    .then(function(response){
      window.location.replace("/")
    })
    .catch(function(error){
      console.log(error)
    })
  }
  render () {
    return (
      <React.Fragment>
      <div className="mainForm">
          <h1> Edit User </h1>
          <div>
              <input type="text" name="email" placeholder="email" onChange={(e) => {this.setState({email: e.target.value})}} />
          </div>
          <div>
              <input type="text" name="phone" placeholder="phone" onChange={(e) => {this.setState({phone: e.target.value})}} />
          </div>
          <div>
              <input type="password" name="password" placeholder="password" onChange={(e) => {this.setState({password: e.target.value})}} />
          </div>
          <div>
              <input type="password" name="password_confirmation" placeholder="password confirmation" onChange={(e) => {this.setState({password_confirmation: e.target.value})}} />
          </div>
          <div>
              <input type="password" name="current_password" placeholder="current password" onChange={(e) => {this.setState({current_password: e.target.value})}} />
          </div>
          <div>
              <button type="submit" name="submit_button" onClick={this.sendFun} >Update</button>
          </div>
          <div>
              <div>
                Unhappy?
              </div>
              <button type="submit" name="cancel_account" onClick={this.cancel} >Cancel my account</button>
          </div>
          <div>
            <a href="/posts/feed"> Back </a>
          </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Edit
