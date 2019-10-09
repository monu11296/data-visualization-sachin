import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'

import { data } from '../data'
import { totalRunScored, totalCatches, totalMatchesWon, wicketsTaken, notOut, hundreds, fifties } from '../utils/functions'

const SummarizedStats: React.FC = () => {

    let [card, setCard]: any = useState([])

    useEffect(() => {
        makeCards()
        totalRunScored()
    }, [])

    const makeCards = () => {
        card = [
            {
                title: "Total Matches Played",
                data: data.length
            },
            {
                title: "Total Runs Scored",
                data: totalRunScored()
            },
            {
                title: "Total Catches",
                data: totalCatches()
            },
            {
                title: "Matches Won",
                data: totalMatchesWon()
            },
            {
                title: "Wickets Taken",
                data: wicketsTaken()
            },
            {
                title: "Number of Not Outs",
                data: notOut()
            },
            {
                title: "Number of Centuries",
                data: hundreds()
            },
            {
                title: "Number of Half Centuries",
                data: fifties()
            }
        ]
        setCard(card)
    }



    return (
        <div className="row bg-dark text-white text-center font">
            <div className="col-2"></div>
            <div className="col-8 mb-5">
                <h1 className="mt-5">Summarized Statistics</h1>
                <div className="row mt-5 mb-5">
                    {card.map((elm: any) => {
                        return (
                            <div className="col-3">
                                <Card bg="primary">
                                    <Card.Body>
                                        <Card.Title><h2>{elm.data}</h2></Card.Title>
                                        <Card.Text>{elm.title}</Card.Text>
                                    </Card.Body>
                                </Card>
                                <br />
                            </div>
                        )
                    })}

                </div>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Button>Back</Button>
                </Link>
            </div>
            <div className="col-2"></div>
        </div>
    )
}


export default SummarizedStats