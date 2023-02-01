import React from 'react'
import ContentLoader from "react-content-loader"

function Loading() {
  return (
    <ContentLoader 
    rtl
    speed={10}
    width={1200}
    height={900}
    // viewBox="217 417 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="75" y="5" rx="8" ry="8" width="218" height="317" />
    <rect x="320" y="5" rx="8" ry="8" width="218" height="317" />
    <rect x="565" y="5" rx="8" ry="8" width="218" height="317" />
    <rect x="810" y="5" rx="8" ry="8" width="218" height="317" />
    <rect x="75" y="345" rx="8" ry="8" width="218" height="317" />
    <rect x="320" y="345" rx="8" ry="8" width="218" height="317" />
    <rect x="565" y="345" rx="8" ry="8" width="218" height="317" />
    <rect x="810" y="345" rx="8" ry="8" width="218" height="317" />

  </ContentLoader>
  )
}

export default Loading
