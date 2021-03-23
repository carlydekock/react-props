import React from 'react';

// Validating props???
function Header(props) {

  // You can't do this
  // function changeTitle(string) {
  //   props.title = string;
  // }

  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={() => props.changeTitle('changed!!')}>Change title</button>
    </div>
  )
}

export default Header;
