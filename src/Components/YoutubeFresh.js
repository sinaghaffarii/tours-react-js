import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    rtl
    speed={2}
    width={700}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#cfcfcf"
    foregroundColor="#eae8e8"
    {...props}
  >
    <circle cx="31" cy="31" r="15" /> 
    <rect x="58" y="18" rx="2" ry="2" width="240" height="10" /> 
    <rect x="58" y="34" rx="2" ry="2" width="200" height="10" /> 
    <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
    {/* ---- */}
  </ContentLoader>
)

export default MyLoader

