import React from 'react'

export default function Footer(props) {
  return (
    <>
      <div className="footer bg-dark">
        <p className='text-light text-center py-4'>Copyright &copy; {props.footerText}</p>
      </div>
    </>
  )
}
