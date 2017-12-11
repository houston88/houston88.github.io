import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../utils/styled-theme'

import './index.css'

const MainContentWrapper = styled.div`
  background-color: ${props => props.theme.bodyBg};
  height: 100%;
`;

const TemplateWrapper = ({ children }) => (
    <ThemeProvider theme={theme}>
      <MainContentWrapper>
        <Helmet
          title="Housty's Landing"
          meta={[
            { name: 'description', content: 'Houstys landing page' },
            { name: 'keywords', content: 'demo, testing' },
          ]}
        />
        {children()}
      </MainContentWrapper>
    </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
