import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar-1.jpg'
import { FaEdit } from "react-icons/fa"
import { useState } from 'react'

const UserProfile = () => {
  const [avatar, setAvatar] = useState('')
  return (
    <section className="profile">
      <div className="container profile__container">
        <Link to={`/myposts/sdfsdf`} className='btn'>My Posts</Link>
     
        <div className="profile__details">
          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img src={Avatar} alt="" />
            </div>
            <form className="avatar__form">
              <input type="file" name='avatar' id='avatar' onChange={e => setAvatar(e.target.files[0])}accept="png, jpg, jpeg, gif" />
              <label htmlFor="avatar"><FaEdit/></label>
            </form>

          </div>
        </div>
      </div>
    </section>
  )
}

export default UserProfile