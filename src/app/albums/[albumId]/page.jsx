import Image from 'next/image';
import React from 'react';

const AlbumsDetailsPage = async ({params}) => {
const {albumId: albumId} = await params;

const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`);
const album = await res.json();

    return (
        <div>
            <h3>{album.title} </h3>
            <h3>{album.userId} </h3>
            
        </div>
    );
};

export default AlbumsDetailsPage;