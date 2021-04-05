import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';


class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleFeedbacksQuantity = e => {
        const { name } = e.currentTarget;

        this.setState(prevState => ({
            [name]: prevState[name] + 1,
        }))
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;

        return Math.round(good / this.countTotalFeedback() * 100);
    }

    render() {
        const { good, neutral, bad } = this.state;

        return (
            <>
                <Section title="Please leave feedback">

                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.handleFeedbacksQuantity}
                    />

                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()}
                    />

                </Section>
            </>   
        )
    }
}

export default App;