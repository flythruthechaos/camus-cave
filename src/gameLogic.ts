// All the Redux hooks and game logic can go here.
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { incrementTime, incrementDoubt, incrementFaith, incrementHunger, updateLastClickTime, reset } from './store/gameSlice';
import { useEffect } from 'react';
import doubtQuestions from './constants/doubtConfig';

export const useGameLogic = (  
    setSelectedDialogue1: React.Dispatch<React.SetStateAction<string | null>>,
    setSelectedDialogue2: React.Dispatch<React.SetStateAction<string | null>>
    , setSelectedDialogue3: React.Dispatch<React.SetStateAction<string | null>>
    , setSelectedDialogue4: React.Dispatch<React.SetStateAction<string | null>>
    , setSelectedDialogue5: React.Dispatch<React.SetStateAction<string | null>>
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
  const lastClickTime = useSelector((state: RootState) => state.game.lastClickTime);
  // ... all other state selectors

  // ... all your handlers (handleDoubt, handleTimer, etc.)
  const handleDoubt = () => {
    const currentTime = Date.now();
  
    if (currentTime - lastClickTime! > 10000 && lastClickTime !== null) {
      const timeDifference = currentTime - lastClickTime!;
      const doubtDifference = Math.floor(timeDifference / 10000);
      dispatch(incrementDoubt(doubtDifference));
    }
    else if (lastClickTime !== null){
      const timeDifference = currentTime - lastClickTime!;
      const faithDifference = Math.floor(10000/timeDifference);
      dispatch(incrementFaith(faithDifference));
    }
    dispatch(updateLastClickTime(null));
    setSelectedDialogue1('');
    setSelectedDialogue2('');
    setSelectedDialogue3('');
    setSelectedDialogue4('');
    setSelectedDialogue5('');
  };
  type DialogueCategory = 'eagle/vulture' | 'wolf/coyote' | 'Camus/Sisyphus';
  
//Write a side effect that will setSelectedDialogue3, setSelectedDialogue4, and setSelectedDialogue5 to random doubt questions from doubtQuestions using lastClickTime > currentdatetime - 10000
function generateRandomDoubt() {
    
              
      const randomIndex3 = Math.floor(Math.random() * doubtQuestions.questions.length);
      const randomQuestion3 = doubtQuestions.questions[randomIndex3].question;;
      setSelectedDialogue3(randomQuestion3);
      const randomIndex4 = Math.floor(Math.random() * doubtQuestions.questions.length);
      const randomQuestion4 = doubtQuestions.questions[randomIndex4].question;;
      setSelectedDialogue4(randomQuestion4);
      const randomIndex5 = Math.floor(Math.random() * doubtQuestions.questions.length);
      const randomQuestion5 = doubtQuestions.questions[randomIndex5].question;;
      setSelectedDialogue5(randomQuestion5);
  
  }
  
  const handleReset = () => {
    dispatch(reset());
  }
  // Return everything that will be needed by the component
  return { time, faith, doubt, hunger, handleDoubt, handleReset, lastClickTime, generateRandomDoubt};
};
