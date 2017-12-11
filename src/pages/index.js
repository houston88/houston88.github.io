import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import bgImage from '../assets/tlscp_sm.jpg'
import familyImage from '../assets/family_nm.jpg'

// background-repeat: no-repeat;
const MainPageLanding = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CoolLink = styled.a`
  font-size: 32px;
  color: #eee;
  &:hover: #ddd;
  transition: all 0.3s ease;
  text-shadow: 0 1px 0 #ccc, 
               0 2px 0 #c9c9c9,
               0 3px 0 #bbb,
               0 4px 0 #b9b9b9,
               0 5px 0 #aaa,
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0,.3),
               0 3px 5px rgba(0,0,0,.2),
               0 5px 10px rgba(0,0,0,.25),
               0 10px 10px rgba(0,0,0,.2),
               0 20px 20px rgba(0,0,0,.15);
`;

const IndexPage = () => (
  <MainPageLanding className='landing-page'>
    <img
      className="landing-image"
      alt="Harris Family"
      src={familyImage}
    />
    <h1>Houston's Landing Page</h1>
    <h2>
      <CoolLink href="http://housty.io">housty.io</CoolLink>
    </h2>
  </MainPageLanding>
)

export default IndexPage
