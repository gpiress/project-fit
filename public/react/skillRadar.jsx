import React from 'react';

import {
    Radar, RadarChart,
    PolarGrid, PolarAngleAxis, PolarRadiusAxis,
    RadialBarChart, RadialBar,
    Legend, Tooltip,
    ResponsiveContainer
} from 'Recharts';

var SkillRadar = React.createClass({
    colors: {
        'technical': '#8884d8',
        'business': '#82ca9d',
        'languages': '#d0ed57'
    },
    prepareData: function(data) {
        var preparedData = [].concat(data);

        while (preparedData.length < 5) {
            preparedData.push({ name: '', stars: 0 });
        }

        return preparedData;
    },
    render: function() {
        const data = this.prepareData(this.props.data);
        const skillSet = this.props.name;
        const color = this.colors[skillSet];

        return (
            <div className={ "project-card__chart " + skillSet }>
                <h4 className="project-card__skillSetName">{ skillSet }</h4>

                <div className="chart-container">
                    <ResponsiveContainer>
                    	<RadarChart data={data}>
                            <Radar name={skillSet} dataKey="stars" stroke={color} fill={color} fillOpacity={0.6}/>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="name" />
                            <PolarRadiusAxis axisLine={false} domain={[0, 5]}/>
                            <Tooltip />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        );
    }
});

export default SkillRadar;
