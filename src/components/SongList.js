import React from 'react';
import SongDetail from './SongDetail.js';

  const SongList = (props) => {
    const songNode = props.songs.map((song, index) => {
      return (
      <SongDetail key={index} artist={song['im:artist'].label}>
        </SongDetail>
        )
    })




    return (
        <>
          {songNode}
        </>
    )

  }

export default SongList;
