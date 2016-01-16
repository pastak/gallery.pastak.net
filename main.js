'use strict'
require('whatwg-fetch')
const React = require('react')
const ReactDOM = require('react-dom')
const shuffle = require('knuth-shuffle').knuthShuffle

const parseJson = res => res.json()

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }

  componentDidMount() {
    fetch('/images.json')
      .then(parseJson)
      .then(images => this.setState({images}))
  }

  render() {
    return (<div className='image-list'>
      {shuffle(this.state.images).map(image => (<div className='image-container' key={image}>
        <img src={`/images/${image}`} />
      </div>))}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('mainView'))
