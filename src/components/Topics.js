import ListGroup from "react-bootstrap/ListGroup";
import React from "react";

class Topics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      load: false
    }
  }

  fetchData() {
    this.setState({load: true})
    fetch('/question/topics', {
      headers: {
        Authentication: 'Bearer '
      }
    })
        .then((response) => {
          return response.json()
        })
        .then((topics) => {
          this.setState({topics: JSON.parse(topics.Topics), load: false})
        });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
        <ListGroup>
          {
            this.state.topics.map((topic) => {
              return (
                  <ListGroup.Item>
                    {topic}
                  </ListGroup.Item>
              )
            })
          }
        </ListGroup>
    )
  }
}

export default Topics