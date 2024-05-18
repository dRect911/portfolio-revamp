import React from 'react'


type Props = {}

const Loading = (props: Props) => {
  return (
    <main className="w-screen h-screen flex items-center justify-center ">
      <span className="home-page-loader" />
    </main>
  )
}

export default Loading