import React from 'react';
import ReactDOM from 'react-dom';

import SelectionBox from './selectionBox';
import PeopleList from './peopleList';
import Projects from './projects';

import peopleData from './data/people_data';

var MainContainer = React.createClass({
    getInitialState: function() {
        return { people: [] };
    },

    search: function(desiredSkills) {
        console.log('Searching for someone who matches: ');
        console.log(JSON.stringify(desiredSkills));

        this.setState({ people: peopleData });
    },

    render: function() {
        var people = this.state.people;
        var search = this.search;

        return (
            <div>
                <div className="row" style={{ paddingBottom: '20px' }}>
                    <SelectionBox search={search} />
                </div>

                <div className="row">
                    <PeopleList data={people} />
                </div>
            </div>
        )
    }
});

ReactDOM.render(<MainContainer />, document.getElementById('skill-container'));
