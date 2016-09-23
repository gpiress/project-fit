import React from 'react';

import {
  // main component
  Chart,
  // graphs
  Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title,
  // wrappers
  Layer, Animate, Transform, Handlers,
  // helpers
  DropShadow, Gradient, helpers
} from 'rumble-charts';

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
    render: function() {
        const data = this.props.data;
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

var SkillRainbow = React.createClass({
    render: function() {
        const data = this.props.data;
        const skillSet = this.props.name;

        const style = {
          	top: 0,
          	left: 350,
          	lineHeight: '24px'
        };

        return (
            <div className={ "project-card__chart " + skillSet }>
                <h4 className="project-card__skillSetName">{ skillSet }</h4>

                <div className="chart-container">
                    <ResponsiveContainer>
                        <RadialBarChart innerRadius={20} outerRadius={140} barSize={10} data={data}>
                            <RadialBar minAngle={15} label background clockWise={true} dataKey="stars"/>
                            <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style}/>
                        </RadialBarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        );
    }
});

var ProjectCard = React.createClass({
    makeFooterHtml: function(allocated, vacancies) {
        if (allocated === undefined || allocated === null) {
            allocated = 0;
        }

        if (vacancies === undefined || vacancies === null) {
            vacancies = 0;
        }

        if (vacancies > 0) {
            return (
                <div className="project-card__footer">
                    <span>{ allocated || 0 } people currently allocated</span>
                    <span> - { vacancies } open spot(s)!</span>
                </div>
            );
        } else {
            return (
                <div className="project-card__footer">
                    <span>{ allocated || 0 } people currently allocated</span>
                </div>
            );
        }
    },
    render: function() {
        var footerHtml = this.makeFooterHtml(this.props.people, this.props.vacancy);

        return (
            <div className="project-card">
                <div className="project-card__header">
                    <span>{ this.props.name }</span>
                </div>

                <div className="project-card__body">
                    <SkillRadar name="technical" data={this.props.skills.tech} />

                    <SkillRadar name="business" data={this.props.skills.business} />

                    <SkillRadar name="languages" data={this.props.skills.language} />
                </div>

                { footerHtml }
            </div>
        );
    }
});

export default ProjectCard;
