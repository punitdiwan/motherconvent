// components/InstagramPost.js
import { useEffect } from 'react';

const InstagramPost = ({ url }) => {
  useEffect(() => {
    const processInstagram = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    if (!window.instgrm) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.onload = processInstagram;
      document.body.appendChild(script);
    } else {
      processInstagram();
    }
  }, [url]);

  

  return (
    <blockquote
    id='instaVideo'
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{
        margin: '2rem auto',
        width: "auto",
      }}
    ></blockquote>
  );
};

export default InstagramPost;
