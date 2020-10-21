import React from "react"

const RelationshipsPage = () => (
  <div>
    <div
      className="w-full flex text-center items-center"
      style={{ height: "600px" }}
    >
      <div className="w-1/2">content</div>
      <div className="w-1/2">image</div>
    </div>
    <div
      className="w-full flex text-center items-center bg-gray-800"
      style={{ height: "500px" }}
    >
      <div className="w-1/3">we take relationships seriously</div>
    </div>
    <div
      className="w-full flex justify-center items-center"
      style={{ height: "600px" }}
    >
      testimonials
    </div>
    <div className="text-lg w-full text-center p-16">CLIENTS</div>
    <div className="w-full flex justify-center items-center">
      <div className="grid grid-cols-4 gap-4">
        {[...Array(16).keys()].map(i => (
          <div
            key={i}
            className="bg-gray-300 flex justify-center items-center"
            style={{ height: 255, width: 255 }}
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default RelationshipsPage
