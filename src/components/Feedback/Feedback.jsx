import PropTypes from 'prop-types';

import Options from './Options/Options';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

import s from './Feedback.module.css';

const Feedback = ({
  state,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
  leaveVote,
}) => {
  const { good, neutral, bad } = state;
  const total = countTotalFeedback()();
  const positive = countPositiveFeedbackPercentage();

  return (
    <div className={s.feedback}>
      <Section title="Please leave feedback">
        <Options options={Object.keys(state)} onLeaveFeedback={leaveVote} />
      </Section>

      <Section title="Statistics">
        <div className={s.stats}>
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positive}
            />
          )}
        </div>
      </Section>
    </div>
  );
};

Feedback.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
  leaveVote: PropTypes.func.isRequired,
};

export default Feedback;
