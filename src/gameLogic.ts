// All the Redux hooks and game logic can go here.
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import {
  incrementTime,
  incrementDoubt,
  incrementFaith,
  updateLastClickTime,
  reset,
  setIsLookingAround,
} from "./store/gameSlice";
import { useEffect, useRef } from "react";
import doubtQuestions from "./constants/doubtConfig";

export const useGameLogic = (
  setSelectedDialogue1: React.Dispatch<React.SetStateAction<string | null>>,
  setSelectedDialogue2: React.Dispatch<React.SetStateAction<string | null>>,
  setSelectedDialogue3: React.Dispatch<React.SetStateAction<string | null>>,
  setSelectedDialogue4: React.Dispatch<React.SetStateAction<string | null>>,
  setSelectedDialogue5: React.Dispatch<React.SetStateAction<string | null>>,
) => {

  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(incrementTime());
    }, 1000); // Increment time every second

    return () => clearInterval(timer);
  }, [dispatch]);

  const time = useSelector((state: RootState) => state.game.time);
  const faith = useSelector((state: RootState) => state.game.faith);
  const doubt = useSelector((state: RootState) => state.game.doubt);
  const hunger = useSelector((state: RootState) => state.game.hunger);
  const lastClickTime = useSelector(
    (state: RootState) => state.game.lastClickTime,
  );
  const hasAnswered = useSelector((state: RootState) => state.game.hasAnswered);
  const isLookingAround = useSelector(
    (state: RootState) => state.game.isLookingAround,
  );
  // ... all other state selectors

  // ... all your handlers (handleDoubt, handleTimer, etc.)
  const handleDoubt = () => {
    console.log("handleDoubt");
    const currentTime = Date.now();

    if (currentTime - lastClickTime! > 10000 && lastClickTime !== null) {
      const timeDifference = currentTime - lastClickTime!;
      const doubtDifference = Math.floor(timeDifference / 10000);
      dispatch(incrementDoubt(doubtDifference));
    } else if (lastClickTime !== null) {
      const timeDifference = currentTime - lastClickTime!;
      const faithDifference = Math.floor(10000 / timeDifference);
      dispatch(incrementFaith(faithDifference));
    }
    dispatch(updateLastClickTime(null));
    setSelectedDialogue1("");
    setSelectedDialogue2("");
    setSelectedDialogue3("");
    setSelectedDialogue4("");
    setSelectedDialogue5("");
  };

  const generateRandomDoubtRef = useRef(generateRandomDoubt);
  generateRandomDoubtRef.current = generateRandomDoubt;
  
  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (isLookingAround) {
      timer = setTimeout(() => {
        generateRandomDoubtRef.current();
        dispatch(setIsLookingAround(false));
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [isLookingAround, dispatch]);
  

  //Write a side effect that will setSelectedDialogue3, setSelectedDialogue4, and setSelectedDialogue5 to random doubt questions from doubtQuestions using lastClickTime > currentdatetime - 10000
  function generateRandomDoubt() {
    console.log("generateRandomDoubt");
    console.log("hasAnswered: ", hasAnswered);

    if (hasAnswered === true) {
      return;
    }
    const randomIndex3 = Math.floor(
      Math.random() * doubtQuestions.questions.length,
    );
    const randomQuestion3 = doubtQuestions.questions[randomIndex3].question;
    setSelectedDialogue3(randomQuestion3);
    const randomIndex4 = Math.floor(
      Math.random() * doubtQuestions.questions.length,
    );
    const randomQuestion4 = doubtQuestions.questions[randomIndex4].question;
    setSelectedDialogue4(randomQuestion4);
    const randomIndex5 = Math.floor(
      Math.random() * doubtQuestions.questions.length,
    );
    const randomQuestion5 = doubtQuestions.questions[randomIndex5].question;
    setSelectedDialogue5(randomQuestion5);
  }

  const handleReset = () => {
    dispatch(reset());
  };
  // Return everything that will be needed by the component
  return {
    time,
    faith,
    doubt,
    hunger,
    handleDoubt,
    handleReset,
    lastClickTime,
    generateRandomDoubt,
  };
};
