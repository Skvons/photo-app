import React from 'react';
import './Photos.css' ;


function AlbumCard({name,img}) {
    return (
		<div class="photo-card">
			<img class="album-logo" src={img}/>
			<div class="overlay">
				<p>{name}</p>
			</div>
		</div>  
    );
}

export default AlbumCard;