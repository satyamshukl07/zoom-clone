// let IS_PROD = false;
// const server = "http://localhost:8000";

// export default server;

  let IS_PROD = true;

  const server = IS_PROD ?  
     "https://zoom-video-call-wv6p.onrender.com" :

     "http://localhost:8000"
     


export default server;