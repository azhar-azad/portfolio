import React from 'react';
import axios from "axios";

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apiIsOnline: false
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/')
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Test;