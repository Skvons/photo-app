import React from 'react';
import AlbumCard from './AlbumCard';
import './Photos.css' ;
import  album_logo1 from './album_img/1.jpg'
import  album_logo2 from './album_img/2.jpg'
import  album_logo3 from './album_img/3.jpg'
import  album_logo4 from './album_img/4.jpg'
function Photos() {


    return (
	<div className="photorow">
		<div style={{width: '100%'}}><h1>ФОТОСЕССИИ</h1></div>
        <AlbumCard img={album_logo1} name={'Anna'}/>
        <AlbumCard img={album_logo2} name={'Jane'}/>
        <AlbumCard img={album_logo3} name={'Ann'}/>
        <AlbumCard img={album_logo4} name={'Bazil'}/>
    </div>    
  );
}

export default Photos;