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
    var link = this.props.post_id;
    const token = document.querySelector('[name=csrf-token]').content;
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
    const formData = new FormData();
    formData.append('image', img);
    formData.append('privacy', prv);
    formData.append('hashtags', tags);
    axios.patch(link, formData)
        .then(response => {
            callback(response.data);
        }).catch(error => {
         console.log("*****  "+error)
    });
}

updateCheckValue(){
            this.setState({privacy: !this.state.privacy})
    }
  render () {
    return (
      <React.Fragment>
        <div className="mainForm">
            <div>
                Privacy:
                <input type="checkbox" name="privacy" onChange={this.updateCheckValue}/>
            </div>
            <div>
                Hashtags:
                <input type="text" name="hashtags" onChange={(e) => {this.setState({hashtags: e.target.value})}} />
            </div>
            <div>
                Image:
                <input type="file" accept="image/png, image/jpeg" name="image" onChange={(e) => {this.setState({image: e.target.files[0]})}}/>
            </div>
            <div>
                <button type="submit" name="submit_button" onClick={this.sendFun} >Send</button>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Form
