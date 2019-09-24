import React from 'react';

  const SongList = (props) => {
    const options = props.songs.map((song, index) => {
      return <li value={index} key={index}>
        {song['im:artist'].label}
        </li>
    })




    return (
        <ul>
          <li></li>
          {options}
        </ul>
    )

  }

export default SongList;
