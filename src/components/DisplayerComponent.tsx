import React from 'react'

export default function DisplayerComponent(headings: any) {
  return (
    <div>
      {headings.headings.map((heading, index) => (
        <div key={index}>
          {heading}
        </div>
      ))}

    </div>
  )
}
