interface DoubtQuestion {
  question: string;
}

interface DoubtQuestions {
  questions: DoubtQuestion[];
}

const doubtQuestions: DoubtQuestions = {
  questions: [
    { question: "What is friendship?" },
    { question: "What is loyalty?" },
    { question: "What is Camus' Plan?" },
    { question: "What if Camus leaves?" },
    { question: "How long must I wait?" },
    { question: "What does the omen mean?" },
    { question: "What games is Camus playing?" },
    { question: "Where is this place?" },
    { question: "What does love got to do with it?" },
    { question: "How do fires start?" },
    { question: "What has Camus done for me lately?" },
    {
      question: "Sisyphus walks fellow in chains. How many days has he walked?",
    },
    { question: "The purpose of my survival must be created." },
    { question: "Camus the silent, Camus the torturer, Camus the captor." },
    { question: "Who am I?" },
    { question: "Who was I?" },
    { question: "How did I come to be here?" },
    { question: "What does the future hold?" },
    { question: "Who did this to me?" },
    { question: "Is there anyone else?" },
    { question: "Have I forgotten the face of my father?" },
    { question: "Have I sinned a great sin - I remember none." },
    { question: "Surely my contrition must be known." },
    { question: "Once, was I smaller?" },
    { question: "Once, was I larger?" },
    { question: "My place in the cave morphs with my body." },
    { question: "Falling to temptation tastes of ash." },
    { question: "The lies fall like scales from my eyes." },
    { question: "The world is incomprehensible." },
    { question: "Am I all alone?" },
    { question: "Once did I hear a clear voice? Echoes are all I hear now." },
    { question: "This moment can't be everything." },
    {
      question:
        "Tomorrow, yesterday, the day before. Unchanging as a painting.",
    },
  ],
};

export default doubtQuestions;
