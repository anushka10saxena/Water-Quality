import React, { useEffect } from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends React.Component {
    state =
        {
            liveData: []
        }

    componentDidMount = () => {
        this.fetchDataFormDynamoDb()
        setInterval(this.fetchDataFormDynamoDb, 1000);
    }

    fetchDataFormDynamoDb = () => {
        axios.get('https://rvldugiq70.execute-api.us-west-2.amazonaws.com/live')
            .then((res) => {
                this.setState({ liveData: res.data[0] })
            }).catch((err) => {
                console.log(err);
            })
    }

    /*LiveData = (liveData) => {
        return liveData.map((data, i) => (
            <div key={i}>
                <div className="col-sm-3 col-md-3 col-6">
                    <Link to="/ph" >
                        <div id="box" data-aos="zoom-out">
                            <div id="heading">
                                <h2>PH </h2>
                                <h3>{data.pH}</h3>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-sm-3 col-md-3 col-6">
                    <Link to="/temp">
                        <div id="box" data-aos="fade-right">
                            <div id="heading">
                                <h2>Timestamp</h2>
                                <h3> {data.Time_stamp} <span>°C</span></h3>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-sm-3 col-md-3 col-6">
                    <Link to="/td">
                        <div id="box" data-aos="zoom-out">
                            <div id="heading">
                                <h2>TDS </h2>
                                <h3> {data.TDS} <span id="c">PPM</span></h3>
                            </div>
                        </div>
                    </Link>
                </div>



                <div className="col-sm-3 col-md-3 col-6">
                    <Link to="/temp">
                        <div id="box" data-aos="fade-right">
                            <div id="heading">
                                <h2>Temp.</h2>
                                <h3> {data.Temperature} <span>°C</span></h3>
                            </div>
                        </div>
                    </Link>
                </div>



                <div className="col-sm-3 col-md-3 col-6">
                    <Link to="/cond">
                        <div id="box" data-aos="fade-left">
                            <div id="heading">
                                <h2>Electroconductivity</h2>
                                <h3> {data.Electroconductivity}</h3>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        ))
    }*/


    render() {
        //console.log(this.state.liveData);
        return (
            <>
                <div id="home" className="container-fluid">
                    <div className="row" id="div1">
                        <div className="col-sm-12 col-md-12 col-6">
                            <div id="mainheading">
                                <h1> Water Quality Monitoring System</h1>
                            </div>
                        </div>

                        <div className="col-sm-4 col-md-4 col-8">
                            <Link to="/">
                                <div id="box" data-aos="fade-left">
                                    <div>
                                    </div>
                                    <div id="heading">
                                        <h2>Status </h2>
                                        <h3 style={{ "color": "#4BFF73" }}> Active</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-4 col-md-4 col-8">
                    <Link to="/" >
                        <div id="box" data-aos="zoom-out">
                            <div id="heading">
                                <h2>Device Id </h2>
                                <h3>{this.state.liveData.DeviceID}</h3>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-sm-4 col-md-4 col-8">
                    <Link to="/">
                        <div id="box" data-aos="fade-right">
                            <div id="heading">
                                <h2>Timestamp</h2>
                                <h3> {this.state.liveData.Time_stamp} <span>°C</span></h3>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-sm-3 col-md-3 col-6">
                    <Link to="/" >
                        <div id="box" data-aos="zoom-out">
                            <div id="heading">
                                <h2>PH </h2>
                                <h3>{this.state.liveData.pH}</h3>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-sm-3 col-md-3 col-6">
                    <Link to="/">
                        <div id="box" data-aos="zoom-out">
                            <div id="heading">
                                <h2>TDS </h2>
                                <h3> {this.state.liveData.TDS} <span id="c">PPM</span></h3>
                            </div>
                        </div>
                    </Link>
                </div>



                <div className="col-sm-3 col-md-3 col-6">
                    <Link to="/">
                        <div id="box" data-aos="fade-right">
                            <div id="heading">
                                <h2>Temp.</h2>
                                <h3> {this.state.liveData.Temperature} <span>°C</span></h3>
                            </div>
                        </div>
                    </Link>
                </div>



                <div className="col-sm-3 col-md-3 col-6">
                    <Link to="/">
                        <div id="box" data-aos="fade-left">
                            <div id="heading">
                                <h2>Electroconductivity</h2>
                                <h3> {this.state.liveData.Electroconductivity}</h3>
                            </div>
                        </div>
                    </Link>
                </div>
                        {/*this.LiveData(this.state.liveData)*/}

                    </div>
                </div>
            </>
        )
    }
}



export default Home;
