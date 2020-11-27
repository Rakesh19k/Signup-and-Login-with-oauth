import React, { Component } from 'react'
import './LogIn.css'
import axios from "axios"
import { Link } from 'react-router-dom'



var validEmailRe = RegExp( /@/ + /./  );

class LogIn extends Component {

    constructor() {
        super()
    
        this.state = {
            email: "",
            password: "",
            loading: true,
            errors: {
              email: "",
              password: ""
            }
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    validateUsername = userName => {
        return userName && userName.length >= 5;
    };
    

    onSubmit = e => {
        e.preventDefault();
        const loginDetails={
            email:this.state.email,
            password:this.state.password
        }
        axios.post('http://13.232.32.187:3050/login',loginDetails)
        .then(result=>{
            console.log(result,"login ddetailssss");
            if (result.data.result === true) {
                window.location.href = "/Home";
            }else{
                window.location.href = "/Login"
            }
        }).catch(err=>{console.log(err,"errr");})
        
    }

      onChange(e) {
        const { name, value } = e.target;
        let errors = this.state.errors;
        const newErros = { ...errors };
        switch (name) {
        case "email":
            newErros.email = validEmailRe.test(value)? "" : "Email is not valid";
            break;
        case "password":
            newErros.password =
            value.length < 8 ? "Must be 8 characters long!" : "";
            break;
        default:
            break;
        }
        
        this.setState({
            errors: newErros,
            [name]: value
        });
      }


    // create() {
    //     window.location.href = '/';
    // }


    render() {
        const { email, password } = this.state;
        const isEnabled = validEmailRe.test(email) && password.length;
        return (
            <div className="container-fluid text-center my-5">
                <h3 className="header">Log In</h3>
                <hr className="under-line"/>
                <form className="mx-4" noValidate onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col-lg-4 offset-md-4 my-2">
                            <input type="text" className="form-control" name="email" onChange={this.onChange} value={this.state.email} autoComplete="off" placeholder="Email"/>
                            <div className="error" >{this.state.errors.email}</div>

                        </div>

                        <div className="col-lg-4 offset-md-4 my-2">
                            <input type="password" className="form-control" name="password" onChange={this.onChange} value={this.state.password} autoComplete="off" placeholder="Password"/>
                            <div className="error">{this.state.errors.password}</div>

                        </div>

                        <div className="col-md-4 offset-md-4 mt-5">
                            <button className="btn btn-info w-100" type="submit" placeholder="LogIn" disabled={!isEnabled} >Log In</button>
                        </div>        
                    </div>
                </form>
                <div className="col-md-4 offset-md-4 my-2">
                    <Link to="/"><button className="btn btn-success w-100" type="submit" placeholder="Create new account" >Create new account</button></Link>
                </div>
                <div className="container row d-inline">
                        <div className="col-md-12">
                            <div className="my-1 ">
                                <a href="http://localhost:5000/auth/google">
                                    <button className="btn btn-dark w-25 hover-shadow">
                                        <i className="fa fa-google"></i>
                                        {/* Log In with Google */}
                                    </button>
                                </a>
                            </div>
                            <div className="my-1 ">
                                <a href="https://localhost:5000/auth/facebook">
                                    <button className="btn btn-primary w-25 hover-shadow">
                                        <i className="fa fa-facebook"></i>
                                        {/* Log In with Facebook */}
                                    </button>
                                </a>
                            </div>
                            <div className="my-1 ">
                                <a href="http://localhost:5000/auth/github">
                                    <button className="btn btn-secondary w-25 hover-shadow">
                                        <i className="fa fa-github"></i>
                                        {/* Log In with Github */}
                                    </button>
                                </a>
                            </div>
                            <div className="my-1 ">
                                <a href="http://localhost:5000/auth/linkedin">
                                    <button className="btn btn-info w-25 hover-shadow">
                                        <i className="fa fa-linkedin"></i>
                                        {/* Log In with Linkedin */}
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
        
            </div>
        )
    }
}

export default LogIn
