import React, { Component } from 'react'
import "./SignUp.css"
import { Link } from 'react-router-dom'
import axios from "axios"

var validEmailRe = RegExp( /@/ + /./  );

class SignUp extends Component {

    constructor() {
        super()
    
        this.state = {
            Username: "",
            email: "",
            password: "",
            errors: {
                Username: "",
                email: "",
                password: ""
              }
             
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    validateUsername = (userName) => {
        return userName && userName.length >= 4;
    };
    

    onChange = e => {
        const { name, value } = e.target;
        let errors = this.state.errors;
        const newErros = { ...errors };
        switch (name) {
            case "Username":
                newErros.Username = this.validateUsername(value)? "": "5 characters long!";
                break;
            case "email":
                newErros.email = validEmailRe.test(value) ? "" : "Email is not valid!";
                break;
            case "password":
                newErros.password = value.length < 8 ? "Password must be 8 characters long!" : "";
                break;
            default:
                break;
        }
        this.setState({
          errors: newErros,
          [name]: value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        const newuser = {
          name: this.state.Username,
          email: this.state.email,
          password: this.state.password
        };
        console.log(newuser,"hellooo");
        axios.post("http://13.232.32.187:3050/register",newuser)
        .then(response => {
            console.log(response,"backenddddddddd")
             if (response.data.result === true){
                window.location.href="/Login"
            }else{
                window.location.href="/"
            }
        });
      };

   


    render() {

        const { email, Username, password } = this.state;
            // console.log(this.state);

        const isEnabled =
            validEmailRe.test(email) && password.length > 6 && Username.length > 3;
        return (
            <div className="container-fluid text-center my-5">
            <h3 className="header">SignUp</h3>
            <hr className="under-line"/>
            <form className="mx-4" noValidate onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col-lg-4 offset-md-4 my-2">
                            <input type="text" className="form-control"  name="Username" value={this.state.Username} autoComplete="off" placeholder="Username" onChange={this.onChange}/>
                            <div className="error" >{this.state.errors.Username}</div>
                        </div>

                        <div className="col-lg-4 offset-md-4 my-2">
                            <input type="email" className="form-control" name="email" value={this.state.email} autoComplete="off" placeholder="Email" onChange={this.onChange}/>
                            <div className="error">{this.state.errors.email}</div>
                        </div>

                        <div className="col-lg-4 offset-md-4 my-2">
                            <input type="password" className="form-control" name="password" value={this.state.password} autoComplete="off" placeholder="Password" onChange={this.onChange}/>
                            <div className="error">{this.state.errors.password}</div>
                        </div>
                        <div className="col-md-4 offset-md-4 mt-5">
                            <Link to="/"><button type="submit" className="btn btn-info" onClick={this.onSubmit} placeholder="SignUp" disabled={!isEnabled}>Sign Up</button></Link>
                            <Link to="/login"><button className="btn btn-info ml-2"  placeholder="LogIn">Log In</button></Link>
                        </div>
                    </div>
            </form>
        </div>
        )
    }
}

export default SignUp


