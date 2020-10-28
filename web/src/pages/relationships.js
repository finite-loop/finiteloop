import React from "react"
import Layout from "../components/layout"
import logo from "../images/flLogo.png"

const RelationshipsPage = () => {
  return (
    <Layout>
      <div
        className="w-full flex items-center px-24"
        style={{ height: "600px" }}
      >
        <div className="w-1/2">
          <h2 className="text-xxl text-bold">JOURNEY OF THE RELATIONSHIP</h2>
          <div className="flex">
            <p className="w-1/2">
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
              nam no suscipit quaerendum.
            </p>
            <p className="w-1/2">
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
              nam no suscipit quaerendum.
            </p>
          </div>
        </div>
        <div className="w-1/2 h-48">
          <div
            style={{
              backgroundImage: `url(${logo})`,
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
          ></div>
        </div>
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
    </Layout>
  )
}

export default RelationshipsPage
