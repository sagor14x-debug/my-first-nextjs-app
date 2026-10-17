import Link from "next/link";
import React from "react";

const PhotoPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos = await res.json();
  return (
    <div>
      <h2>Photos Page</h2>
      <h2>Photos Page: {photos.length} </h2>
      <div className="grid grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="card bg-primary text-primary-content ">
            <div className="card-body">
              <h2 className="card-title">{photo.name}</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <Link href={`/photos/${photo.id}`}>
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
