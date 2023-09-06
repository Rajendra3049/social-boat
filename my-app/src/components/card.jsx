import React from 'react';

const Card = ({ video, heading, tags }) => {
  return (
    <div className="col-md-6 col-lg-4  mb-3  text-center"  >
      <div className="card">
        <div className="embed-responsive p-2">
          <iframe
            title="Video"
            className="embed-responsive-item"
            src={video}
            allowFullScreen
            loading={"eager"}
          ></iframe>
        </div>
        <div >
          <h5 className='card-header '>
            <span className="col-6">{heading}</span>
          </h5>
          <p className="card-text">
            {tags.map((tag, index) => (
              <span class="badge text-bg-secondary m-1 p-2 ">{tag}</span> 
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;

