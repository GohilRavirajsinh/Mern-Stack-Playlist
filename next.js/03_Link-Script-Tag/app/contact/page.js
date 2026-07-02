import Script from 'next/script'
import React from 'react'

const contact = () => {
  return (
    <div>
      <Script>
        {
          `alert('Welcome to contact page')`
        }
      </Script>
      This is Contact
    </div>
  )
}

export default contact

export const metadata = {
  title: "Contact with Facebook - coonect with the world",
  description: "This is Contact facebook and we can connect with the world using facebook",
};