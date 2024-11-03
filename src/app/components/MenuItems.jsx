import React from 'react'
import Link from 'next/link'

function MenuItems({title, address, Icon}) {
  return (
    <Link href={address}>
        <Icon/>
        <p>{title} </p>
    </Link>
  )
}

export default MenuItems