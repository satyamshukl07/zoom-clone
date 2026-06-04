// let IS_PROD = false;
// const server = "http://localhost:8000";

// export default server;

  let IS_PROD = true;

  const server = IS_PROD ?  
     "https://zoom-clone-1j5j.onrender.com" :

     "http://localhost:8000"
     


export default server;