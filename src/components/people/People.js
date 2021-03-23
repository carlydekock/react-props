import React from 'react';

export default function People(props) {

  return (
    <div className="people">
      {props.data.map((person, idx) => <p key={idx}>{person}</p>)}
    </div>
  )
}
