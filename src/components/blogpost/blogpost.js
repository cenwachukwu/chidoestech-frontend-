import React, { useState, useEffect, useMemo } from 'react';
import './blogpost.scss';

const BlogPost = props => {
  //   console.log(props.data);

  return (
    <div className="blogPost">
      <div className="blogPost-sections">
        {props.data.map((data, index) => {
          console.log(data);
          return (
            <div key={index} className="post-sections">
              <div className="postSubsection">
                <p className="postDateCreated__Tag">{data.dateCreated}</p>
              </div>
              <div className="postSubsection">
                <h1 className="postTitle__Tag">{data.title}</h1>
              </div>
              <hr></hr>
              <div className="postSubsection">
                <img
                  src={data.blogImage}
                  alt="post thumbnail"
                  className="postImage"
                />
              </div>
              <div className="postSubsection postPreview">
                <p className="postPreview__Tag">{data.blogPreview}</p>
              </div>
              <div className="postSubsection">
                <button className="postLink__Tag">Read More</button>
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
