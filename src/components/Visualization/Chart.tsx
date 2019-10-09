import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'

const Chart: React.FC<{
  data: any
}> = props => {

  console.log(props.data)

  return (
    <span>
      <LineChart
        width={1200}
        height={250}
        data={props.data}
        margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
        style={{ color: "#FF7F50" }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis />
        <YAxis dataKey={Object.keys(props.data[0])[1]} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey={Object.keys(props.data[0])[1]}
          stroke="#FF7F50"
          strokeWidth="2"
        />
      </LineChart>
    </span>
  )
}


export default Chart