var SkillChart = React.createClass({
    displayName: 'SkillChart',

    render: function () {
        var barsHtml = this.props.data.map(function (skill) {
            var height = skill.stars * 20;
            var name = skill.name;

            return React.createElement(
                'div',
                { className: 'bar',
                    style: { 'height': height + '%' },
                    key: name },
                React.createElement(
                    'span',
                    { className: 'bar__text' },
                    name
                )
            );
        });

        return React.createElement(
            'div',
            { className: "project-card__chart " + this.props.name },
            React.createElement(
                'h4',
                { className: 'project-card__skillSetName' },
                this.props.name
            ),
            React.createElement(
                'div',
                { className: 'bar-chart' },
                barsHtml
            )
        );
    }
});

var ProjectCard = React.createClass({
    displayName: 'ProjectCard',

    makeFooterHtml: function (allocated, vacancies) {
        if (allocated === undefined || allocated === null) {
            allocated = 0;
        }

        if (vacancies === undefined || vacancies === null) {
            vacancies = 0;
        }

        if (vacancies > 0) {
            return React.createElement(
                'div',
                { className: 'project-card__footer' },
                React.createElement(
                    'span',
                    null,
                    allocated || 0,
                    ' people currently allocated'
                ),
                React.createElement(
                    'span',
                    null,
                    ' - ',
                    vacancies,
                    ' open spot(s)!'
                )
            );
        } else {
            return React.createElement(
                'div',
                { className: 'project-card__footer' },
                React.createElement(
                    'span',
                    null,
                    allocated || 0,
                    ' people currently allocated'
                )
            );
        }
    },
    render: function () {
        var footerHtml = this.makeFooterHtml(this.props.people, this.props.vacancy);

        return React.createElement(
            'div',
            { className: 'project-card' },
            React.createElement(
                'div',
                { className: 'project-card__header' },
                React.createElement(
                    'span',
                    null,
                    this.props.name
                )
            ),
            React.createElement(
                'div',
                { className: 'project-card__body' },
                React.createElement(SkillChart, { name: 'technical', data: this.props.skills.tech }),
                React.createElement(SkillChart, { name: 'business', data: this.props.skills.business }),
                React.createElement(SkillChart, { name: 'languages', data: this.props.skills.language })
            ),
            footerHtml
        );
    }
});

var Projects = React.createClass({
    displayName: 'Projects',

    data: function () {
        return {
            projects: [{
                name: 'Jean Bartik',
                people: 6,
                vacancy: 0,
                skills: {
                    tech: [{ name: 'AngularJS', stars: 3, freq: 6 }, { name: 'Java', stars: 4, freq: 4 }, { name: 'Unit Testing', stars: 5, freq: 6 }],
                    business: [{ name: 'Business Architecture', stars: 3, freq: 2 }, { name: 'Analytics', stars: 4, freq: 3 }],
                    language: [{ name: 'Portuguese', stars: 5, freq: 6 }, { name: 'English', stars: 4.2, freq: 6 }, { name: 'Spanish', stars: 2.5, freq: 4 }]
                }
            }, {
                name: 'Sylvia Rivera',
                people: 4,
                vacancy: 1,
                skills: {
                    tech: [{ name: 'AngularJS', stars: 3, freq: 4 }, { name: 'Java', stars: 4, freq: 4 }, { name: 'Unit Testing', stars: 5, freq: 3 }],
                    business: [{ name: 'Business Architecture', stars: 4, freq: 4 }, { name: 'Analytics', stars: 4, freq: 3 }],
                    language: [{ name: 'Portuguese', stars: 5, freq: 4 }, { name: 'English', stars: 4.2, freq: 4 }, { name: 'Spanish', stars: 4, freq: 3 }]
                }
            }, {
                name: 'Stephen Hawking',
                people: 8,
                vacancy: 0,
                skills: {
                    tech: [{ name: 'AngularJS', stars: 3, freq: 6 }, { name: 'Java', stars: 4, freq: 8 }, { name: 'Unit Testing', stars: 4.5, freq: 8 }],
                    business: [{ name: 'Business Architecture', stars: 3, freq: 2 }, { name: 'Analytics', stars: 4, freq: 3 }],
                    language: [{ name: 'Portuguese', stars: 5, freq: 8 }, { name: 'English', stars: 3.8, freq: 8 }, { name: 'Spanish', stars: 3, freq: 5 }]
                }
            }]
        };
    },
    render: function () {
        var data = this.data();
        var projectsHTML = data.projects.map(function (project) {
            return React.createElement(ProjectCard, { name: project.name,
                people: project.people,
                vacancy: project.vacancy,
                key: project.name,
                skills: project.skills });
        });

        return React.createElement(
            'div',
            { className: 'projects-container' },
            projectsHTML
        );
    }
});

ReactDOM.render(React.createElement(Projects, null), document.getElementById('bar-chart-container'));