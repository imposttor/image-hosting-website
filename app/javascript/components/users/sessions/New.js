import React from "react"
import PropTypes from "prop-types"
import axios from "axios";

class New extends React.Component {
  constructor(props){
      super(props);
      this.state ={
          remember: false,
          login:'',
          password:'',
          image:[]
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
    axios.post('/users/sign_in', {
      user: {
        login: this.state.login,
        password: this.state.password,
        remember_me: this.state.remember
      },
      commit: "Log in"
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
              <input type="text" name="login" placeholder="login" onChange={(e) => {this.setState({login: e.target.value})}} />
          </div>
          <div>
              <input type="password" name="password" placeholder="password" onChange={(e) => {this.setState({password: e.target.value})}} />
          </div>
          <div>
              <input type="checkbox" name="remember" onChange={this.updateCheckValue}/>
              Remember me
          </div>
          <div>
              <button type="submit" name="submit_button" onClick={this.sendFun} >Log in</button>
          </div>
          <div>
              <a href="/users/sign_up">Sign up</a>
          </div>
      </div>
      </React.Fragment>
    );
  }
}

export default New
