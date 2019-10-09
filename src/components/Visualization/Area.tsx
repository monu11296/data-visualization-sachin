import React from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'

const AreaGraph: React.FC<{
    data: any
}> = props => {

    console.log(props.data)


    return (
        <span>
            <AreaChart
                width={600}
                height={250}
                data={props.data}
                margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
                style={{ color: "#8884d8" }}
            >
            <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis />
                <YAxis dataKey={Object.keys(props.data[0])[1]} />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey={Object.keys(props.data[0])[1]}
                    stroke="#8884d8"
                    strokeWidth="1"
                    fillOpacity={1} 
                    fill="url(#colorUv)"
                />
                <Area
                    type="monotone"
                    dataKey={Object.keys(props.data[0])[2]}
                    stroke="#82ca9d"
                    strokeWidth="1"
                    fillOpacity={1} 
                    fill="url(#colorPv)"
                />

            </AreaChart>
        </span>
    )
}


export default AreaGraph