import { Cover as BCover } from '@bedrock-layout/cover'
import React from 'react'

const Cover = () => {
  return (
    <BCover
        gutter="size2"
        stretchContent
        minHeight="50vh"
//        top={<Component as="header">Header</Component>}
//        bottom={<Component as="footer">Footer</Component>}
        />
        /* <Inline align="stretch" gutter="size2" stretch={1}>
            <Component>Left Sidebar</Component>
            <Component as="main">Main Content</Component>
            <Component>Right Sidebar</Component>
        </Inline> */
    
  )
}

export default Cover
