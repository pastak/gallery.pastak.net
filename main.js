'use strict'
require('whatwg-fetch')
const React = require('react')
const ReactDOM = require('react-dom')
const shuffle = require('knuth-shuffle').knuthShuffle

fetch('/images.json')
  .then((res) => res.json())
  .then((images) => {
    ReactDOM.render(
      (<div className='image-list'>
        {shuffle(images).map((image) => {
          return (<div className='image-container' key={image}>
            <img src={`/images/${image}`} />
          </div>)
        })}
      </div>),
      document.getElementById('mainView')
    )
  })
