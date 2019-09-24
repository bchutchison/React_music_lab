import React from 'react';
import SongDetail from './SongDetail.js';

  const SongList = (props) => {
    const songNode = props.songs.map((song, index) => {
      return (
      <SongDetail key={index} song={song['im:name'].label} artist={song['im:artist'].label} chartPosition={song.category.attributes['im:id']} genre={song.category.attributes.term} price={song['im:price'].label} image={song['im:image'][2].label} preview={song.link[1].attributes.href}>
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
