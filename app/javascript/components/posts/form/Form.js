import React from "react"
import PropTypes from "prop-types"
import axios from "axios";

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            privacy: false,
            hashtags:'',
            image:[]
        }
        this.sendFun = this.sendFun.bind(this);
        this.updateCheckValue = this.updateCheckValue.bind(this);
    }
sendFun(){
    var img = this.state.image;
    var prv = this.state.privacy;
    var tags = this.state.hashtags;
    var link = "/posts/" + this.props.post_id;
    const token = document.querySelector('[name=csrf-token]').content;
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
    const formData = new FormData();
    if(this.state.img != null){
      formData.append('image', img);
    }
    formData.append('privacy', prv);
    formData.append('hashtags', tags);
    if(this.props.method == "patch"){
      axios.patch(link, formData)
          .then(response => {
            window.location.replace(link)
          })
          .catch(error => {
           console.log("*****  "+error)
      });
    }
    if(this.props.method == "post"){
      if(this.state.img != null){
        formData.append('user_id', this.props.user_id)
        axios.post("/posts", formData)
        .then(response => {
            window.location.replace("/posts")
        })
        .catch(error => {
         console.log("*****  "+error)
       });
      }
      else{
        alert("You have not uploaded the image!")
      }
    }
}

updateCheckValue(){
            this.setState({privacy: !this.state.privacy})
    }
  render () {
    return (
      <React.Fragment>
        <div className="mainForm">
          <div className="formBlock">
            <h1 className="pageName">
                {this.props.header}
            </h1>
            <div>
                Privacy:
                <input type="checkbox" name="privacy" onChange={this.updateCheckValue}/>
            </div>
            <div>
                <input type="text" name="hashtags" placeholder="#hashtags" onChange={(e) => {this.setState({hashtags: e.target.value})}} />
            </div>
            <div>
                <input type="file" accept="image/png, image/jpeg" name="image" onChange={(e) => {this.setState({image: e.target.files[0]})}}/>
            </div>
            <div>
                <button type="submit" name="submit_button" onClick={this.sendFun} >Send</button>
            </div>
            <div>
              <a href="/posts">Back</a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Form
