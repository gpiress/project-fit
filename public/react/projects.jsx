import React from 'react';

import ProjectCard from './project';

import projectsData from './data/projects_data';

var Projects = React.createClass({
    data: function() {
        return { projects: projectsData };
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

export default Projects;
