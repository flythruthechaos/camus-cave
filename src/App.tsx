import { useDispatch } from "react-redux";
import { setIsLookingAround, updateLastClickTime } from "./store/gameSlice";
import "./App.css";
import { useDialogueSelector } from "./dialogueSelector";
import { useGameLogic } from "./gameLogic";
import { DialogueCategory } from "./types";
import { Button, Typography, LinearProgress, createTheme, ThemeProvider, Box, Grid, Card } from "@mui/material";


//This needs to be separated into a full theme file
const theme = createTheme({
  palette: {
    secondary: {
      main: '#ff0000', // or any shade of red you want
    },
  },
});


const GameComponent = () => {
  const dispatch = useDispatch();
  const {
    selectedDialogue1,
    selectedDialogue2,
    selectRandomDialogue1,
    selectRandomDialogue2,
    selectedDialogue3,
    selectedDialogue4,
    selectedDialogue5,
    setSelectedDialogue1,
    setSelectedDialogue2,
    setSelectedDialogue3,
    setSelectedDialogue4,
    setSelectedDialogue5,
  } = useDialogueSelector();

  const { time, faith, doubt, handleDoubt, handleReset, hunger } =
    useGameLogic(
      setSelectedDialogue1,
      setSelectedDialogue2,
      setSelectedDialogue3,
      setSelectedDialogue4,
      setSelectedDialogue5,
    );

  const handleTimer = () => {
    dispatch(setIsLookingAround(true));

    const currentTime = Date.now();
    dispatch(updateLastClickTime(currentTime));
    console.log("Timer clicked");

    // Generate a random category
    const categories: DialogueCategory[] = [
      "eagle/vulture",
      "wolf/coyote",
      "Camus/Sisyphus",
    ];
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];

    // Call the selectRandomDialogue functions with the randomly selected category
    selectRandomDialogue1(randomCategory);
    selectRandomDialogue2(randomCategory);
  };

  //Write a function that will dispatch the incrementDoubt action on click with a payload of 1

  // Add JSX for your game component
//   return (
//     <ThemeProvider theme={theme}>
//     <div className="App-header">
//       <Typography variant="h1">Camus' Cave</Typography>
//       <Typography variant="subtitle1">Game Time: {time}</Typography>
//       <Button variant="contained" onClick={handleReset}>
//         Reset
//       </Button>
//       <Button variant="contained" onClick={handleTimer}>
//         Look Around
//       </Button>
//       {selectedDialogue3 && (
//         <Button variant="contained" onClick={handleDoubt}>
//           {selectedDialogue3}
//         </Button>
//       )}
//       {selectedDialogue4 && (
//         <Button variant="contained" onClick={handleDoubt}>
//           {selectedDialogue4}
//         </Button>
//       )}
//       {selectedDialogue5 && (
//         <Button variant="contained" onClick={handleDoubt}>
//           {selectedDialogue5}
//         </Button>
//       )}
//       <Typography>{selectedDialogue1}</Typography>
//       <Typography>{selectedDialogue2}</Typography>
//       <Typography>Doubt: {doubt}</Typography>
//       <Typography>Faith: {faith}</Typography>
//       <Typography>Hunger: {hunger}</Typography>
//       <Box sx={{ width: '80%' }}>
//       <LinearProgress
//         variant="determinate"
//         value={hunger}
//         color="secondary" // set the color to secondary to use the red color from the theme
//       />
//       </Box>
//     </div>
//     </ThemeProvider>
//   );
// };

// Inside your GameComponent function
return (
  <ThemeProvider theme={theme}>
    <Box sx={{ p: 1, position: 'fixed', top: 0, left: 0 }}>
      <Button variant="contained" onClick={handleReset} color="primary">
        Reset
      </Button>
    </Box>

    <Box sx={{ p: 1, position: 'fixed', top: 0, right: 0 }}>
      <Typography variant="subtitle1">Game Time: {time}</Typography>
    </Box>

    <Grid container direction="column" justifyContent="space-between" alignContent='center' style={{ height: '100vh' }}>
      <Grid item>
        <Card sx={{ m: 1 }}>
          <Typography sx={{ textAlign: 'center' }} variant="h1">Camus' Cave</Typography>
        </Card>
      </Grid>

      <Grid item container>
        <Grid item xs={4}>
          <Box sx={{ m: 1 }}>
            <Typography>{selectedDialogue1 ? selectedDialogue1: 'Sisyphus smiles with the eagle'}</Typography>
            <Typography>You hear from your left</Typography>
          </Box>
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant="contained" onClick={handleTimer} color="primary" sx={{ p: 2, fontSize: 'larger' }}>
            Look Around
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ m: 1 }}>
            <Typography>{selectedDialogue2 ? selectedDialogue2 : 'Camus name be praised'}</Typography>
            <Typography>You hear from your right</Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid item container justifyContent="center" alignItems="center">
        <Grid item xs={4}>
          <Box sx={{ bgcolor: 'black', color: 'white', p: 2, m: 1, display: 'flex', flexDirection: 'column'}}>
            <Typography variant="h5">Use your voice:</Typography>
            <Button sx={{minHeight: '10px'}} onClick={handleDoubt}>{selectedDialogue3 ? selectedDialogue3 : 'I follow Camus'}</Button>
            <Button sx={{minHeight: '10px'}} onClick={handleDoubt}>{selectedDialogue4 ? selectedDialogue4 : 'I blaze my own trail'} </Button>
            <Button sx={{minHeight: '10px'}} onClick={handleDoubt}>{selectedDialogue5 ? selectedDialogue5 : 'I tremble'}</Button>
          </Box>
        </Grid>
      </Grid>

      <Grid item>
        <Box sx={{ position: 'fixed', bottom: 0, left: 0, width: '100%', p: 1, bgcolor: 'background.default' }}>
          <Typography>Doubt: {doubt}</Typography>
          <Typography>Faith: {faith}</Typography>
          <Typography>Hunger: {hunger}</Typography>
          <LinearProgress variant="determinate" value={hunger} color="secondary" />
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider>
);
};
export default GameComponent;
