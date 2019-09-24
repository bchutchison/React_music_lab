import React from 'react';

const SongDetail = (props) => {

return (
  <div>
  <hr></hr>
  <h2>{props.song}</h2>
  <h4>{props.chartPosition}</h4>
  <h4>{props.artist}</h4>
  <h4>{props.title} </h4>
  </div>
)
}

export default SongDetail;
