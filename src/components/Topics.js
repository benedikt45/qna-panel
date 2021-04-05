import ListGroup from "react-bootstrap/ListGroup";
import React from "react";

class Topics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/question/topics', {
      headers: {
        Authentication: 'Bearer '
      }
    })
        .then((response) => {
          return response.json()
        })
        .then((topics) => {
          return this.setState({topics: JSON.parse(topics.Topics)})
        });
  }

  render() {
    return (
        <ListGroup>
          {
            this.state.topics.map((topic) => {
              return (<ListGroup.Item>
                {topic}
              </ListGroup.Item>)
            })
          }
        </ListGroup>
    )
  }
}

export default Topics