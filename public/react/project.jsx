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

var SkillChart = React.createClass({
    render: function() {
        var barsHtml = this.props.data.map(function(skill) {
            var height = skill.stars * 20;
            var name = skill.name;

            return (<div className="bar"
                         style={{ 'height': height + '%' }}
                         key={name}>
                         <span className="bar__text">{ name }</span>
                    </div>);
        });

        return (
            <div className={ "project-card__chart " + this.props.name }>
                <h4 className="project-card__skillSetName">{ this.props.name }</h4>

                <div className="bar-chart">
                    { barsHtml }
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
                    <SkillChart name="technical" data={this.props.skills.tech} />

                    <SkillChart name="business" data={this.props.skills.business} />

                    <SkillChart name="languages" data={this.props.skills.language} />
                </div>

                { footerHtml }
            </div>
        );
    }
});

export default ProjectCard;
