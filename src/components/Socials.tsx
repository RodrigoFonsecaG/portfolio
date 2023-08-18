import React from 'react'
import { Link } from 'react-router-dom'
import {RiInstagramLine, RiLinkedinLine, RiGithubLine} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link className="hover:text-accent transition-all duration-300" to="">
        <RiInstagramLine />
      </Link>

      <Link className="hover:text-accent transition-all duration-300" to="">
        <RiLinkedinLine />
      </Link>

      <Link className="hover:text-accent transition-all duration-300" to="">
        <RiGithubLine />
      </Link>
    </div>
  )
}

export default Socials