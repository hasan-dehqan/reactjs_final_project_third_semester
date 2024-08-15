import React from "react";
import { Circles } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="secLoad">
      <Circles 
      height="80"
      width="80"
      color="red"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      />
    </div>
  )
}

export default Loading