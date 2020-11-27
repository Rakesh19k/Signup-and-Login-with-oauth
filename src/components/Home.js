import { Link } from 'react-router-dom'
import React, { Component } from 'react'



const Bar = {
    color : "white",
    fontSize : 22,
    float : "left",
    textDecoration : "none" 
}


class Home extends Component {

    logout() {
        localStorage.clear();
        window.location.href = '/Login';
    }
    
    render() {
        return (
            <div className="home">
                <Link to="/home"/>
                    <nav className="navbar bg-dark mb-2">
                            <a href="#" type="button" data-toggle="collapse" data-target="#demo2" className="mx-4" style={Bar}>
                                <i className="fa fa-bars"/>
                                <div id="demo2" style={{fontSize:15, marginTop:5, marginBottom:5, marginLeft: -15}} className="collapse" onClick={this.logout}>Log Out</div>
                            </a>
                            {/* <a href="http://localhost:5000/auth/logout"> */}
                                <h4 className=" mx-4 mt-2" style={{color:"white", float: "right"}}>Home</h4>

                            {/* </a> */}
                    </nav>
                    
                    <div id="demo" className="carousel slide text-center my-2" data-ride="carousel">
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                        </ul>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://repository-images.githubusercontent.com/283241401/d1019080-d0ff-11ea-89b5-35aa5883e081" alt="Los Angeles" width="900" height="400"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://codepixelz.com/wp-content/uploads/2019/07/login-3938430_1920.jpg" alt="Los Angeles" width="900" height="400"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://wpacademy.pk/wp-content/uploads/2020/04/tml-hd.jpg" alt="Los Angeles" width="900" height="400"/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#demo" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                    </div>
                    {/* <div className="text-center my-5">
                        <h3>2020 &copy; Rakesh Kr</h3>
                    </div> */}

            </div>
        )
    }
}

export default Home
