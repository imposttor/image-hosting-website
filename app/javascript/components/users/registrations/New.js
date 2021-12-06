import React from "react"
import PropTypes from "prop-types"
import axios from "axios";

class New extends React.Component {
  constructor(props){
      super(props);
      this.state ={
          email:'',
          phone:'',
          password:'',
          password_confirmation:''
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
      let that = this
    axios.post('/users', {
      user: {
        email: this.state.email,
        phone: this.state.phone,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation
      },
      commit: "Sing up"
    })
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
          <h1> Log in </h1>
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
              <button type="submit" name="submit_button" onClick={this.sendFun} >Sign up</button>
          </div>
          <div>
              <a href="/users/sign_in">Sign in</a>
          </div>
      </div>
      </React.Fragment>
    );
  }
}

export default New
