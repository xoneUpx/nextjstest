import React from 'react';
const Loader = (props) => {
  return (props.show ? <div className="loader">
    <style jsx>
    {`
    .loader {
    border: 10px solid transparent;
    border-radius: 50%;
    border-top: 10px solid blue;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
    }
    @keyframes spin {
      0% {
      transform: rotate(0deg);
      }
      100% {
      transform: rotate(360deg);
      }
    }
    `}
    </style>
    </div> : null)
}
export default Loader;
