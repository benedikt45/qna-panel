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
        Authentication: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJlbmVkaWt0IiwiaWF0IjoxNjE3NjAxMDE2LCJleHAiOjE2NDkxNTg2MTZ9.i5i3h9CeDnI5PVlGFTKiyPTR8v8e4majne-YLyagaZQ'
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