import Image from 'next/image';
import React from 'react';

const PhotoDetailsPage = async ({params}) => {
const {photoId} = await params;

const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`);
const photo = await res.json();

    return (
        <div>
            <h3>{photo.albumID}</h3>
            <h3>{photo.url}</h3>
            <h3>{photo.title}</h3>
            <Image width={200} height={150} src={photo.thumbnailUrl} alt="" />
        </div>
    );
};

export default PhotoDetailsPage;