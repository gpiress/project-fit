import React from 'react';
import ReactDOM from 'react-dom';

import ProjectCard from './project';

var Projects = React.createClass({
    data: function() {
        return {
            projects: [
                {
                    name: 'Jean Bartik',
                    people: 6,
                    vacancy: 0,
                    skills: {
                        tech: [
                            { name: 'AngularJS', stars: 3, freq: 6 },
                            { name: 'Java', stars: 4, freq: 4 },
                            { name: 'Unit Testing', stars: 5, freq: 6 }
                        ],
                        business: [
                            { name: 'Business Architecture', stars: 3, freq: 2 },
                            { name: 'Analytics', stars: 4, freq: 3 }
                        ],
                        language: [
                            { name: 'Portuguese', stars: 5, freq: 6 },
                            { name: 'English', stars: 4.2, freq: 6 },
                            { name: 'Spanish', stars: 2.5, freq: 4 }
                        ]
                    }
                },
                {
                    name: 'Sylvia Rivera',
                    people: 4,
                    vacancy: 1,
                    skills: {
                        tech: [
                            { name: 'AngularJS', stars: 3, freq: 4 },
                            { name: 'Java', stars: 4, freq: 4 },
                            { name: 'Unit Testing', stars: 5, freq: 3 }
                        ],
                        business: [
                            { name: 'Business Architecture', stars: 4, freq: 4 },
                            { name: 'Analytics', stars: 4, freq: 3 }
                        ],
                        language: [
                            { name: 'Portuguese', stars: 5, freq: 4 },
                            { name: 'English', stars: 4.2, freq: 4 },
                            { name: 'Spanish', stars: 4, freq: 3 }
                        ]
                    }
                },
                {
                    name: 'Stephen Hawking',
                    people: 8,
                    vacancy: 0,
                    skills: {
                        tech: [
                            { name: 'AngularJS', stars: 3, freq: 6 },
                            { name: 'Java', stars: 4, freq: 8 },
                            { name: 'Unit Testing', stars: 4.5, freq: 8 }
                        ],
                        business: [
                            { name: 'Business Architecture', stars: 3, freq: 2 },
                            { name: 'Analytics', stars: 4, freq: 3 }
                        ],
                        language: [
                            { name: 'Portuguese', stars: 5, freq: 8 },
                            { name: 'English', stars: 3.8, freq: 8 },
                            { name: 'Spanish', stars: 3, freq: 5 }
                        ]
                    }
                },
            ]
        };
    },
    render: function() {
        var data = this.data();
        var projectsHTML = data.projects.map(function (project) {
            return (
                <ProjectCard name={project.name}
                             people={project.people}
                             vacancy={project.vacancy}
                             key={project.name}
                             skills={project.skills} />
            );
        });

        return (
            <div className="projects-container">
                { projectsHTML }
            </div>
        );
    }
});

ReactDOM.render(<Projects />, document.getElementById('bar-chart-container'));
