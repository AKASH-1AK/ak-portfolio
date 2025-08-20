import React from 'react'

const Info = () => {
  return (
    <div className="grid grid-cols-2 gap-2 p-2 w-[350px] h-[250px] mb-20 lg:w-[500px]">
      <div className="bg-[#1a1a2e] rounded-lg p-2 ">
        <p>Projects</p>
        <h1>20</h1>
      </div>
      <div className="bg-[#1a1a2e] rounded-lg p-2 ">
        <p>Global Certificates</p>
        <h1>4</h1>
      </div>{" "}
      <div className="bg-[#1a1a2e] rounded-lg p-2 ">
        <p>Badges</p>
        <h1>6</h1>
      </div>{" "}
      <div className="bg-[#1a1a2e] rounded-lg p-2 ">
        <p>Blogs</p>
        <h1>7</h1>
      </div>
    </div>
  );
}

export default Info
