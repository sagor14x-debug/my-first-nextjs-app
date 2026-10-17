import Link from "next/link";
import React from "react";

const PhotoPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const albums = await res.json();
  return (
    <div>
      <h2>Albums Page</h2>
      <h2>Albums Page: {albums.length} </h2>
      <div className="grid grid-cols-3 gap-4">
        {albums.map((album) => (
          <div key={album.id} className="card bg-primary text-primary-content ">
            <div className="card-body">
              <h2 className="card-title">{album.name}</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <Link href={`/albums/${album.id}`}>
                  <button className="btn">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoPage;
