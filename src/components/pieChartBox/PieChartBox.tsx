import "./pieChartBox.scss"
import {Cell, Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";

type Props =
    {
        title: string;
        chartData: Array<{
            name: string;
            value: number;
            color: string;
            id: number;
        }>;
    }

const PieChartBox = (props: Props) => {
    return (
        <div className={"pieChartBox"}>
            <h1>{props.title}</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height={300}>
                    <PieChart>
                        <Tooltip contentStyle={{background: "white", borderRadius: "5px"}}/>
                        <Pie
                            data={props.chartData}
                            innerRadius={"70%"}
                            outerRadius={"90%"}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {props.chartData.map((item) => (
                                <Cell key={item.id} fill={item.color}/>
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="options">
                {props.chartData.map(item => (
                    <div className={"option"} key={item.id}>
                        <div className="title">
                            <div className="dot" style={{backgroundColor: item.color}}></div>
                            <span>{item.name}</span>
                        </div>
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PieChartBox;