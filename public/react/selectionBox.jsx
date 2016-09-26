import React from 'react';

import Skills from './data/skills_data';

var Skill = React.createClass({
    getInitialState: function() {
        return { active: false };
    },

    toggleActive: function() {
        var becomingActive = !this.state.active;
        var name = this.props.name;
        var rating = 0;

        if (becomingActive) {
            rating = 5;
        }

        this.props.setRating(name, rating);

        this.setState({ active: becomingActive });
    },

    render: function() {
        var name = this.props.name;
        var active = this.state.active;

        var activeClass = "";
        if (active) {
            activeClass = " active";
        }

        return (
            <a href="#"
                className={"list-group-item" + activeClass}
                onClick={this.toggleActive}>
                { name }
            </a>
        );
    }
});

var SkillList = React.createClass({
    setRating: function(skillName, rating) {
        var skillGroup = this.props.name;

        this.props.setRating(skillGroup, skillName, rating);
    },
    render: function() {
        var name = this.props.name;
        var setRating = this.setRating;

        if (Skills[name] === undefined) {
            Skills[name] = [];
        }

        var skillsHtml = Skills[name].map(function(skill) {
            return (
                <Skill  key={skill}
                        name={skill}
                        setRating={setRating} />
            );
        });

        return (
            <div className="col-sm-4">
                <div className="skill-list">
                    <div className="skill-list__header">
                        <h4>{ name } <small>(selecione até {this.props.max})</small></h4>
                    </div>

                    <div className="skill-list__body">
                        <div className="list-group">
                            { skillsHtml }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var SelectionBox = React.createClass({
    getInitialState: function() {
        return {};
    },
    setSkill: function(skillGroup, skillName, skillRate) {
        var currentState = this.state;
        var currentSkills = currentState[skillGroup];

        if (currentSkills === undefined) {
            currentSkills = {};
        }

        currentSkills[skillName] = skillRate;
        currentState[skillGroup] = currentSkills;

        this.setState(currentState);
    },
    search: function() {
        this.props.search(this.state);
    },

    render: function() {
        return (
            <div className="col-sm-12">
                <div className="selection-box-container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="selection-box-container__header">
                                <h4 className="selection-box-container__title">Skills desejadas</h4>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="selection-box-container__body row">
                                <SkillList name="technical" max={5} setRating={this.setSkill} />
                                <SkillList name="ba-xd" max={5} setRating={this.setSkill} />
                                <SkillList name="language" max={3} setRating={this.setSkill} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="selection-box-container__footer">
                                <button className="btn btn-primary" onClick={this.search}>
                                    Buscar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default SelectionBox;
