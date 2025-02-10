import { ConfigProvider, theme as themeAntd } from "antd"
import propTypes from 'prop-types'
import './GlobalStyles.scss'
import './_variables.scss'
function ConfigProviderAntd({ children }) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Breadcrumb: {
            iconFontSize: 10,
            fontSize: 14,
            // fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif'
          },
          Pagination: {
            colorPrimary: '#810C2A',              // Color for active page
            colorPrimaryHover: '#961038',         // Hover color for page numbers
            colorPrimaryBorder: '#810C2A',        // Border color for active page
            colorText: '#333333',                 // Color for page numbers
            colorTextDisabled: '#00000040',       // Color for disabled page numbers
            fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto', // Font family
            fontSize: 14,                         // Font size for page numbers
            itemActiveBg: '#810C2A1A',           // Background color for active page (with opacity)
            itemSize: 32,                         // Size of pagination items
            algorithm: true                       // Enable automatic color variations
          },
          Input: {
            activeBorderColor: '#810C2A',    // The border color when the input is focused/active
            hoverBorderColor: '#810C2A',     // The border color when hovering over the input
            activeShadow: '0 0 0 2px rgba(129, 12, 42, 0.1)',  // The shadow effect when input is focused
            // Format: offset-x | offset-y | blur-radius | spread-radius | color
            colorBorder: '#d9d9d9',          // The default border color in normal state
            colorPrimaryHover: '#810C2A',    // The color used for hover states of primary elements
            colorPrimary: '#810C2A',         // The primary color used for the component
            algorithm: true,                // Enables Ant Design's algorithm to automatically generate derived colors
            // (like hover, active, etc.) based on the primary color
          },
          Button: {
            colorPrimary: '#810C2A',           // Default button color
            colorPrimaryHover: '#961038',      // Color when hovering
            colorPrimaryActive: '#6B0A23',     // Color when clicked/pressed
            colorPrimaryTextActive: '#ffffff', // Text color when button is active
            primaryShadow: '0 2px 0 rgba(129, 12, 42, 0.1)',  // Shadow when button is pressed
            algorithm: true                    // Enable automatic color variations
          }
        },
        token: {
          fontFamily: 'QuickSand, Arial, sans-serif',
        }
      }}
    >
      {children}
    </ConfigProvider>
  )
}

export default ConfigProviderAntd

ConfigProviderAntd.propTypes = {
  children: propTypes.any
}