import styles from './Feedback.module.css';

function Feedback({ feedback, totalFeedback, positiveFeedback }) {
  return (
    <>
      <h2 className={styles.title} style={{ display: 'none' }}>
        Feedback Statistics
      </h2>
      <p className={styles.feedback}>Good: {feedback.good}</p>
      <p className={styles.feedback}>Neutral: {feedback.neutral}</p>
      <p className={styles.feedback}>Bad: {feedback.bad}</p>
      <p className={styles.feedback}>Total: {totalFeedback}</p>
      <p className={styles.feedback}>Positive feedback: {positiveFeedback}%</p>
    </>
  );
}

export default Feedback;
