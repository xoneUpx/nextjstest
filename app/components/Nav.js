import Link from 'next/link';
import React from 'react'
import UserContext from '../lib/context.js';

const Nav = (props) => {
  const { user, username } = React.useContext(UserContext);
  return (
    <nav> 
    <div>
        Menu
    </div>
    <ul>
    <li>
    <p>{username}</p>
    </li>
      <li>
        <Link href="/login">
        <a>Login</a>
        </Link>
      </li>
      <li>
        <Link href="/signup">
        <a>Signup</a>
        </Link>
      </li>
    </ul>
    <style jsx>{
   `
     ul { display: flex;
          justify-content: flex-end;
          background: white;
      }
     div { float: left;}
     li { list-style-type: none;}
     li a {
        margin: 1em;
     }
      ` 
    }
    </style>
    </nav>
  )
}
export default Nav;
