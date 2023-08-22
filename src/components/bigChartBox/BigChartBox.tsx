import "./bigChartBox.scss"
import {Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

type Props = {
    title: string;
    chartData: object[]
}

const BigChartBox = (props: Props) => {
    return (
        <div className={"bigChartBox"}>
            <h1>{props.title}</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height="100%">
                    <AreaChart
                        data={props.chartData}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Area type="monotone" dataKey="electronic" stackId="1" stroke="#8884d8" fill="#8884d8"/>
                        <Area type="monotone" dataKey="clothes" stackId="1" stroke="#82ca9d" fill="#82ca9d"/>
                        <Area type="monotone" dataKey="books" stackId="1" stroke="#ffc658" fill="#ffc658"/>
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};


export default BigChartBox;