import React from 'react';

import Skills from './data/skills_data';

var Skill = React.createClass({
    getInitialState: function() {
        return { active: false, rating: 0 };
    },

    toggleActive: function() {
        const becomingActive = !this.state.active;
        const name = this.props.name;
        let rating = 0;

        if (becomingActive) {
            rating = 5;
        }

        this.props.setRating(name, rating);

        this.setState({ active: becomingActive, rating: rating });
    },

    changeRating: function(event) {
        const becomingActive = !this.state.active;
        const name = this.props.name;

        let weight = event.target.dataset.weight;

        if (becomingActive && weight === this.state.rating) {
            weight = 0;
        }

        this.props.setRating(name, weight);

        this.setState({ active: becomingActive, rating: weight });
    },

    getStarsHtml: function() {
        const rating = this.state.rating;
        const name = this.props.name;

        let starsHtml = [];

        for (var i = 1; i <= 5; i++) {
            if (i <= rating) {
                starsHtml.push( (
                    <i key={i} id={name + "-star-" + i} data-weight={i} className="fa fa-star" onClick={this.changeRating} />
                ));
            } else {
                starsHtml.push( (
                    <i key={i} id={name + "-star-" + i} data-weight={i} className="fa fa-star-o" onClick={this.changeRating} />
                ));
            }
        }

        return starsHtml;
    },

    render: function() {
        var name = this.props.name;
        var starsHtml = this.getStarsHtml();
        var active = this.state.active;

        var activeClass = "";
        if (active) {
            activeClass = " active";
        }

        return (
            <li className={"list-group-item skill-item" + activeClass}>
                <div className="skill-item__name">
                    { name }
                </div>
                <div className="skill-item__stars">
                    { starsHtml }
                </div>
            </li>
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
                        <ul className="list-group">
                            { skillsHtml }
                        </ul>
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

        currentState[skillName] = skillRate;

        this.setState(currentState);
    },
    search: function() {
        var currentState = this.state;
        var selectedSkills = [];

        for (var skill in currentState) {
            if (currentState[skill] !== undefined && currentState[skill] > 0) {
                var newSkill = {};
                newSkill.name = skill;
                newSkill.weight = currentState[skill];

                selectedSkills.push(newSkill);
            }
        }

        this.props.search(selectedSkills);
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
