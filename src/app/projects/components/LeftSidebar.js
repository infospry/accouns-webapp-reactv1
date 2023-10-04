import React from 'react'
import Link from "next/link";

function LeftSidebar() {
  return (
    <ul className="bdds nav ps-2 pe-2">
        <li className="nav__link active"><Link href="/projects/overview"><i className="zmdi zmdi-widgets"></i><br/> Overview</Link></li>
        <li className="nav__link"><Link href="/projects/sprintsTask"><i className="zmdi zmdi-copy"></i><br/> Sprints/Tasks</Link></li>
        <li className="nav__link"><Link href="/projects/users"><i className="zmdi zmdi-accounts-list-alt"></i><br/> Users </Link></li>
        <li className="nav__link"><Link href="/projects/accounts"><i className="zmdi zmdi-accounts"></i><br/> Accounts </Link> </li>
        <li className="nav__link"><Link href="/projects/files"><i className="zmdi zmdi-file-text"></i><br/> Files </Link></li>
        <li className="nav__link"><Link href="/projects/settings"><i className="zmdi zmdi-settings"></i><br/> Settings </Link></li>
    </ul>
  )
}

export default LeftSidebar
