import React from 'react';

  const SongList = (props) => {
    const options = props.songs.map((song, index) => {
      return <li value={index} key={index}>
        {song['im:name'].label}
        </li>
    })




    return (
        <ul>
          <li disabled value="default">Choose Song</li>
          {options}
        </ul>
    )

  }

export default SongList;
