// Separate the dialogue selection logic here.
import { useState } from "react";
import dialoguesData from "./constants/dialogueConfig";

export const useDialogueSelector = () => {
  const [selectedDialogue1, setSelectedDialogue1] = useState<string | null>("");
  const [selectedDialogue2, setSelectedDialogue2] = useState<string | null>("");
  const [selectedDialogue3, setSelectedDialogue3] = useState<string | null>("");
  const [selectedDialogue4, setSelectedDialogue4] = useState<string | null>("");
  const [selectedDialogue5, setSelectedDialogue5] = useState<string | null>("");

  const selectRandomDialogue1 = (category: string) => {
    const speakerDialogues = dialoguesData.flatMap((section) =>
      section.dialogues
        .filter((dialogue) => dialogue.category === category)
        .filter((dialogue) => dialogue.speaker === "Person 1")
        .flatMap((dialogue) => dialogue.lines),
    );
    const doubtAnswers = dialoguesData.flatMap((section) => section.answers);
    const randomIndex = Math.floor(Math.random() * speakerDialogues.length);
    setSelectedDialogue1(speakerDialogues[randomIndex]);
    setSelectedDialogue3(doubtAnswers[0]);
    setSelectedDialogue4(doubtAnswers[1]);
    setSelectedDialogue5(doubtAnswers[2]);
  };
  const selectRandomDialogue2 = (category: string) => {
    const speakerDialogues = dialoguesData.flatMap((section) =>
      section.dialogues
        .filter((dialogue) => dialogue.category === category)
        .filter((dialogue) => dialogue.speaker === "Person 2")
        .flatMap((dialogue) => dialogue.lines),
    );

    const randomIndex = Math.floor(Math.random() * speakerDialogues.length);
    setSelectedDialogue2(speakerDialogues[randomIndex]);
  };

  return {
    setSelectedDialogue1,
    setSelectedDialogue2,
    setSelectedDialogue3,
    setSelectedDialogue4,
    setSelectedDialogue5,
    selectedDialogue1,
    selectedDialogue2,
    selectRandomDialogue1,
    selectRandomDialogue2,
    selectedDialogue3,
    selectedDialogue4,
    selectedDialogue5,
  };
};
