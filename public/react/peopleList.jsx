import React from 'react';

import SkillRadar from './skillRadar';

var Person = React.createClass({
    render: function() {
        var skills = this.props.skills;
        var name = this.props.name;
        var matchRate = this.props.match * 100;

        return (
            <div className="person-card">
                <div className="person-card__header">
                    <span>{ name }</span>
                </div>

                <div className="person-card__body">
                    <SkillRadar name="technical" data={skills.tech} />

                    <SkillRadar name="business" data={skills.business} />

                    <SkillRadar name="languages" data={skills.language} />
                </div>

                <div className="person-card__footer">
                    <span>{ matchRate }% match rating</span>
                </div>
            </div>
        );
    }
});

var PeopleList = React.createClass({
    render: function() {
        var peopleHtml = this.props.data.map(function(person) {
            return (
                <Person
                    key={person.name}
                    name={person.name}
                    skills={person.skills}
                    match={person.match} />
            );
        });

        return (
            <div className="people-container">
                { peopleHtml }
            </div>
        )
    }
});

export default PeopleList;
