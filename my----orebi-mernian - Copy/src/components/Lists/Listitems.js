import Link from 'next/link'
import React from 'react'

const Listitems = ({ children, links, className }) => {
    return (
        <li className={className}>
            <Link href={links} >{children}</Link>
        </li>
    )
}

export default Listitems