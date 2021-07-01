import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.scss';

const NavBar = () => {
  function handleClick() {
    const element = document.querySelector('#homeId');
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  return (
    <nav className="nav">
      <Link to="/" onClick={handleClick}>
        Home{' '}
      </Link>

      <Link to="/experience">Experience</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About Me</Link>
    </nav>
  );
};

export default NavBar;
// export default function Navbar() {
//   return (
//     <nav className="nav">
//       {/* <h1 ref={ref}>A React article for Latin readers</h1>
//             // Rest of the article's content...
//             <button onClick={onBackClick}>Back to the top</button> */}

//       <Link to="/" onClick={onBackClick}>
//         Home{' '}
//       </Link>
//       <Link to="/experience">Experience</Link>
//       <Link to="/projects">Projects</Link>
//       <Link to="/about">About Me</Link>
//     </nav>
//   );
// }

// const Article = forwardRef(({ onBackClick }, ref) => {
//   return (
//       <article>
//           <h1 ref={ref}>A React article for Latin readers</h1>
//           // Rest of the article's content...
//           <button onClick={onBackClick}>Back to the top</button>
//       </article>
//   )
// })
