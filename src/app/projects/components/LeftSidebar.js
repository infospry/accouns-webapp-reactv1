import React from 'react'
import Link from "next/link";

function LeftSidebar() {
  return (
    <ul className="bdds nav ps-2 pe-2">
        <li class="nav__link active"><Link href="/projects/overview"><i className="zmdi zmdi-widgets"></i><br/> Overview</Link></li>
        <li class="nav__link"><Link href="/projects/sprintsTask"><i className="zmdi zmdi-copy"></i><br/> Sprints/Tasks</Link></li>
        <li class="nav__link"><Link href="/projects/users"><i className="zmdi zmdi-accounts-list-alt"></i><br/> Users </Link></li>
        <li class="nav__link"><Link href="/projects/accounts"><i className="zmdi zmdi-accounts"></i><br/> Accounts </Link> </li>
        <li class="nav__link"><Link href="/projects/files"><i className="zmdi zmdi-file-text"></i><br/> Files </Link></li>
    </ul>
  )
}

export default LeftSidebar
