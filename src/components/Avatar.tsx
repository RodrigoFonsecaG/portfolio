import React from 'react'

const Avatar = () => {
  return (
    <div className="xl:flex xl:max-w-none absolute top-0 left-0">
      <img
        src="/avatar.png"
        width={623}
        height={589}
        className="translate-z-0 w-full h-full side-image"
      />
    </div>
  )
}

export default Avatar