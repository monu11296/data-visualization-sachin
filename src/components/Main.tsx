import React from 'react'
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'

import Sachin from '../assets/sachin.jpg'

import '../App'

const Main: React.FC = () => {

    return (
        <div className="app row container-fluid font">
            <div className="col-12">
                <img className="avatar mb-5" src={Sachin} alt="sachin" />
                <br />
                <h1 className="mb-5 title">Sachin Tendulkar* 200</h1>
                <h5 className="mb-4">A Visualization on Sachin's Career</h5>
                <Link to="/summarized-stats" style={{ textDecoration: "none" }}>
                    <Button>View Summarized Stats</Button>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/detailed-stats" style={{ textDecoration: "none" }}>
                    <Button>View Detailed Stats</Button>
                </Link>
            </div>
        </div>
    )
}


export default Main