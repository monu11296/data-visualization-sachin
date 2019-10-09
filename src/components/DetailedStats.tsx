import React, { useState, useEffect } from 'react'
import { data } from '../data'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import moment from 'moment'
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'


import { totalMatchesWon, teams, totalRunScored, matchesPlayed, wicketsTaken } from '../utils/functions'

import Chart from './Visualization/Chart'
import Bar from './Visualization/Bar'
import Area from './Visualization/Area'

const DetailedStats: React.FC = () => {

    const [currentTeam, setCurrentTeam] = useState(data[0].opposition)

    let [card, setCard]: any = useState([
        {
            title: "Total Matches Played",
            data: matchesPlayed(currentTeam)
        },
        {
            title: "Total Runs Scored",
            data: totalRunScored(currentTeam)
        },
        {
            title: "Matches Won",
            data: totalMatchesWon(currentTeam)
        },
        {
            title: "Wickets Taken",
            data: wicketsTaken(currentTeam)
        }
    ])

    const makeCards = (param: any) => {
        card = [
            {
                title: "Total Matches Played",
                data: matchesPlayed(param),
            },
            {
                title: "Total Runs Scored",
                data: totalRunScored(param)
            },
            {
                title: "Matches Won",
                data: totalMatchesWon(param)
            },
            {
                title: "Wickets Taken",
                data: wicketsTaken(param)
            }
        ]
        setCard(card)
    }


    const runsPerTeam = (team: any) => {
        let runs: any = []
        data.forEach((elm: any, i) => {
            if (elm.opposition === team) {
                runs.push({
                    match: i + 1,
                    Runs: isNaN(parseInt(elm.batting_score)) ? elm.batting_score : parseInt(elm.batting_score)
                })
            }
        })
        return runs
    }


    const yearlyPerformance = (team: any) => {
        let performanceData: any = []

        let yearSet: any = new Set([])
        data.forEach((elm: any) => {
            if (elm.opposition === team) {
                yearSet.add(moment(elm.date).year())
            }
        })
        yearSet.forEach((year: any) => {
            let won = 0
            let lost = 0
            let tied = 0
            let total = 0
            data.forEach((elm: any) => {
                if (elm.opposition === team && moment(elm.date).year() === year) {
                    total++
                    if (elm.match_result === 'won') won++
                    else if (elm.match_result === 'lost') lost++
                    else tied++
                }
            })
            performanceData.push({
                year: year,
                total: total,
                won: won,
                lost: lost,
                tied: tied
            })
        })

        return performanceData
    }

    const bowlingPerformance = (team: any) => {
        let performanceData: any = []
        data.forEach((elm: any, i) => {
            if (elm.opposition === team) {
                performanceData.push({
                    'Matches': i + 1,
                    'Runs Conceded': isNaN(parseInt(elm.runs_conceded)) ? 0 : parseInt(elm.runs_conceded),
                    'Wickets': isNaN(parseInt(elm.wickets)) ? 0 : parseInt(elm.wickets),
                })
            }
        })
        console.log(performanceData)
        return performanceData
    }


    const showData = (event: any, param: any) => {
        event.preventDefault()
        setCurrentTeam(param)
        makeCards(param)
    }


    return (
        <div className="row container-fluid font">
            <div className="col-12">
                <h1 className="mt-5 text-center">Detailed Statistics</h1>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Button>Back</Button>
                </Link>
                <div className="row">
                    <div className="col-3 mt-3">
                        <Card style={{ overflowY: 'auto', maxHeight: '45em' }}>
                            <Card.Body>
                                <Card.Title>Countries</Card.Title>
                                <ListGroup defaultActiveKey={'#' + teams()[0]}>
                                    {teams().map((elm: any, i: any) => {
                                        return (
                                            <ListGroup.Item key={i} href={'#' + elm} onClick={(event: any) => showData(event, elm)} >
                                                {elm}
                                            </ListGroup.Item>
                                        )
                                    })}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-9 mt-3 mb-5">
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    {card.map((elm: any) => {
                                        return (
                                            <div className="col-3 mb-2 text-white text-center">
                                                <Card bg="success">
                                                    <Card.Body>
                                                        <Card.Title>{elm.data}</Card.Title>
                                                        <Card.Text>{elm.title}</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        )
                                    })}
                                </div>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Runs Per Match</Card.Title>
                                        <Chart data={runsPerTeam(currentTeam)} />
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-6 mt-2">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Year Wise Stats</Card.Title>
                                        <Bar data={yearlyPerformance(currentTeam)} />
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-6 mt-2">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Bowling Stats</Card.Title>
                                        <Area data={bowlingPerformance(currentTeam)} />
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DetailedStats