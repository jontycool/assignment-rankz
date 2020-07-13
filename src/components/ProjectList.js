import React, { Component } from 'react';
import EachProject from './EachProject';

class ProjectList extends Component {
  state = {
    projectList: [],
  };

  componentDidMount() {
    this.setState({ projectList: this.props.projectlist });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.projectlist !== this.props.projectlist) {
      this.setState({ projectList: this.props.projectlist });
    }
  }

  render() {
    return (
      <div key={this.state.projectList.length}>
        {this.state.projectList.map((project, i) => {
          return (
            <div className='project-container' key={i}>
              <EachProject {...project} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProjectList;
