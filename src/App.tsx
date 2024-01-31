import { useDispatch } from 'react-redux';
import { updateLastClickTime } from './store/gameSlice';
import './App.css';
import { useDialogueSelector } from './dialogueSelector';
import { useGameLogic } from './gameLogic';
import { DialogueCategory } from './types';
import { Button, Typography } from '@mui/material';

const GameComponent = () => {
  const dispatch = useDispatch();
  const { selectedDialogue1, selectedDialogue2, selectRandomDialogue1, selectRandomDialogue2, 
    selectedDialogue3, selectedDialogue4, selectedDialogue5, setSelectedDialogue1, setSelectedDialogue2, 
    setSelectedDialogue3, setSelectedDialogue4, setSelectedDialogue5} = useDialogueSelector();

  const { time, faith, doubt, handleDoubt, handleReset, generateRandomDoubt } = useGameLogic(
    setSelectedDialogue1,
    setSelectedDialogue2,
    setSelectedDialogue3,
    setSelectedDialogue4,
    setSelectedDialogue5
  );

  const handleTimer = () => {
    const currentTime = Date.now();
    dispatch(updateLastClickTime(currentTime));
  
    // Generate a random category
    const categories: DialogueCategory[] = ['eagle/vulture', 'wolf/coyote', 'Camus/Sisyphus'];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  
    // Call the selectRandomDialogue functions with the randomly selected category
    selectRandomDialogue1(randomCategory);
    selectRandomDialogue2(randomCategory);
    //Run a 10 second timer to generate a random doubt question
    setTimeout(() => {
      generateRandomDoubt();
    }, 10000);

  }


//Write a function that will dispatch the incrementDoubt action on click with a payload of 1

  // Add JSX for your game component
  return (
    <div className='App-header'>
      <Typography variant="h1">Camus' Cave</Typography>
      <Typography variant="subtitle1">Game Time: {time}</Typography>
      <Button variant="contained" onClick={handleReset}>Reset</Button>
      <Button variant="contained" onClick={handleTimer}>Look Around</Button>
      {selectedDialogue3 && <Button variant="contained" onClick={handleDoubt}>{selectedDialogue3}</Button>}
      {selectedDialogue4 && <Button variant="contained" onClick={handleDoubt}>{selectedDialogue4}</Button>}
      {selectedDialogue5 && <Button variant="contained" onClick={handleDoubt}>{selectedDialogue5}</Button>}
      <Typography>{selectedDialogue1}</Typography>
      <Typography>{selectedDialogue2}</Typography>
      <Typography>Doubt: {doubt}</Typography>
      <Typography>Faith: {faith}</Typography>
    </div>
  );
  }  

export default GameComponent;


