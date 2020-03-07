import React, { useState, useEffect, useMemo } from 'react';
import './blogpost.css';

const BlogPost = props => {
  //   console.log(props.data);

  return (
    <div className="blogPost">
      <div className="blogPost-sections">
        {props.data.map((data, index) => {
          console.log(data);
          return (
            <div key={index} className="post-sections">
              <div className="postDateCreated">
                <p>{data.dateCreated}</p>
              </div>
              <div className="postTitle">
                <h1>{data.title}</h1>
              </div>
              <hr></hr>
              <div className="postImage">
                <img src={data.blogImage} alt="post thumbnail" />
              </div>
              <div className="postSummary">
                <p>{data.blogPreview}</p>
              </div>
              <div className="postReadMoreButton">
                <button>Read More</button>
              </div>
              {/* <div className="postShareAndTags">
                <div className="postTags"></div>
                <div className="postShareIcons"></div>
              </div> */}
              <hr></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPost;
