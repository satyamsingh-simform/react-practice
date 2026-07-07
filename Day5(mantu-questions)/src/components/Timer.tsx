import { useCountdown } from "../hooks/useCountdown";

export default function Timer() {
//   const { timeLeft, isRunning, isFinished, start, pause, resume, reset } =useCountdown(10);
  const { timeLeft, start ,isFinished,isRunning,reset,pause,resume} =useCountdown(10);

  return (
    <div style={styles.container}>
      <h1 style={styles.timer}>
        {timeLeft}s {isFinished ? "⏰ Done!" : ""}
      </h1>
      <div style={styles.buttons}>
        {isRunning && timeLeft === 10 && (
          <button onClick={start} style={styles.btn}>
            Start
          </button>
        )}
        
        {isRunning && timeLeft > 0 && timeLeft < 10 && (
          <button onClick={resume} style={styles.btn}>
            Resume
          </button>
        )}
        {isRunning && (
          <button onClick={pause} style={styles.btn}>
            Pause
          </button>
        )}
        <button onClick={reset} style={styles.btn}>
          Reset
        </button> 
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontFamily: "sans-serif",
  },
  timer: {
    fontSize: "48px",
    marginBottom: "20px",
  },
  buttons: {
    display: "flex",
    gap: "10px",
  },
  btn: {
    padding: "10px 16px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
