import Answers from "../Quizs/Answers";
import MiniPlayer from "../Quizs/MiniPlayer";
import ProgreesBar from "../Quizs/ProgressBar";

const Quiz = () => {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgreesBar />
      <MiniPlayer />
    </>
  );
};

export default Quiz;
