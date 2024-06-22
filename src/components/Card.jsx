//import React from "react";
import PropTypes from 'prop-types'

function Card(props) {
    return (
        <div className="card" style={{width: "18rem"}}>
            {props.children}
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

Card.propTypes = {
    props: PropTypes.objectOf({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(PropTypes.object),
    }),
  };

export default Card