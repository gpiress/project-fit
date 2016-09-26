import React from 'react';

import SkillRadar from './skillRadar';

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
