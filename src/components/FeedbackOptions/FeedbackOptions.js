import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.scss'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className="feedback">
            {options.map(feedbackName => (
                <button
                    key={feedbackName}
                    type="button"
                    className="feedback__btn"
                    name={feedbackName}
                    onClick={onLeaveFeedback}
                >{feedbackName}
                </button>
            ))}
        </div>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
