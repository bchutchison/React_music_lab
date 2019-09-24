import React from 'react';
import './SongDetail.css';

const SongDetail = (props) => {

return (
  <div className='object-box'>
    <div className='image-box'>
      <img src={props.image} alt={props.image} />
    </div>
    <div className='text-box'>
      <h3>{props.song}</h3>
      <h4>Chart Position: {props.chartPosition}</h4>
      <h4>{props.artist}</h4>
      <h4>Genre: {props.genre} </h4>
      <h4>{props.price} </h4>
      <audio><source src={props.preview}/></audio>
      <button href = {props.preview}>~Play Clip~</button>
    </div>
  </div>
)
}

export default SongDetail;
