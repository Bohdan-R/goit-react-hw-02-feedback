import React from 'react';
import PropTypes from 'prop-types';
import './Section.scss';

const Section = ({title, children}) => (
    <div className="sectoin">
        <h1 className="title">{title}</h1>
        {children}
    </div>
)

Section.defaultProps = {
    title: "Please leave feedback",
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default Section;