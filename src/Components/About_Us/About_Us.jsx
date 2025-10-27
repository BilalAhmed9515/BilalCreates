import React from 'react'
import Hero from '../Hero Section/Hero'
import bg from '../About_Us/Images/bg.jpg'

const About_Us = ({bgimg, name, humberger}) => {
  return (
    <>
    <Hero bgimg={bg} name={"About Us"}/>
    </>
  )
}

export default About_Us