import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'

const BarGraph: React.FC<{
    data: any
}> = props => {

    return (
        <span>
            <BarChart
                width={600}
                height={250}
                data={props.data}
                margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                style={{ color: "#8884d8" }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={Object.keys(props.data[0])[0]} />
                <YAxis />
                <Tooltip />
                <Bar dataKey={Object.keys(props.data[0])[2]} fill="#32CD32" />
                <Bar dataKey={Object.keys(props.data[0])[3]} fill="#FF0000" />
                <Bar dataKey={Object.keys(props.data[0])[4]} fill="#0000ff" />
            </BarChart>
        </span>
    )
}


export default BarGraph