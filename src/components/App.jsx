import React, { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Section from './Section';
import Notification from './Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const option = { good, bad, neutral };

  const handleOptionClick = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      default:
        return;
    }
  };

  function countTotal() {
    return good + bad + neutral;
  }

  function positivePercentage() {
    return Math.round((good / countTotal()) * 100);
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          handleOptionClick={handleOptionClick}
          options={option}
        />
      </Section>
      <Section title="Statistics">
        {countTotal() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotal()}
            positivePercentage={positivePercentage()}
          ></Statistics>
        )}
      </Section>
    </>
  );
};
