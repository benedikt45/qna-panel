import ListGroup from "react-bootstrap/ListGroup";
import React from "react";

class Topics extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <ListGroup>
          {
            this.props.topics.map((topic) => {
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