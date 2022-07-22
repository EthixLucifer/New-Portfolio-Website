import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'


const styles = {
  global: props => ({
    body: {
      // Theme colours for home page in light and dark mode 
      bg: mode('#FFFFFF', '#1A2238')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: 'red',
        textDecorationThickness: 2,
        marginTop: 3,
        marginBottom: 4
      },
      'Skills': {
        // textDecoration: 'underline',
        fontSize: "25px",
        textUnderlineOffset: 6,
        textDecorationColor: 'red',
        textDecorationThickness: 2,
        // marginTop: 0.5,
        // marginBottom: 4
      }
      
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#d40539', 'red')(props),
      textUnderlineOffset: 3
      
    })
  },
  Button:{
    variants:{
    'button': {
      // textDecoration: 'underline',
      fontSize: 18,
      textUnderlineOffset: 6,
      textDecorationColor: 'blue',
      textDecorationThickness: 2,
      marginTop: 3,
      marginBottom: 4
    }
  }
  }
}

const fonts = {
  heading: "'Cormorant SC'"
  // heading: "'Permanent Marker'"
}
  

const colors = {
  glassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme