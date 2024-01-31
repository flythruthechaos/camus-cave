import { DialogueCategory, Speaker } from "../types";


interface Dialogue {
  category: DialogueCategory;
  speaker: Speaker;
  lines: string[];
}


interface DialogueSection {
  category: DialogueCategory;
  answers: string[];
  dialogues: Dialogue[];
}

const dialoguesData: DialogueSection[] = [
{
    category: 'eagle/vulture',
    answers: ['Circle, watcher', 'Camus!', 'Begone.'],
    dialogues: [
        {
            category: 'eagle/vulture', // Add the missing 'category' property
            speaker: 'Person 1',
            lines: [
                'Fall to the vulture. Shout not.',
                'Cry as the eagle cries. Live as the eagle lives.',
                'Eagles move freely, hope traverses darkness.',
            ],
        },
        {
            category: 'eagle/vulture', // Add the missing 'category' property
            speaker: 'Person 2',
            lines: [
                'Camus watches us through the eyes of eagles. Call for him now!',
                'Who knows why the vulture circles but Camus. Call for him now!',
                'The looming of the vulture insists upon our very lives, only Camus can save us! Call for him now!',
            ],
        },
    ],
},
{
    category: 'wolf/coyote',
    answers: ['Circle, watcher', 'Camus!', 'Begone.'],
    dialogues: [
        {
            category: 'wolf/coyote', // Add the missing 'category' property
            speaker: 'Person 1',
            lines: [
                'Wolves are an omen of fair tidings and fair ladies. Howl!',
                'False threat. False bite. False tails. (tales?)',
                'Wolves which gnaw the heart and guts live without teeth or tails.',
            ],
        },
        {
            category: 'wolf/coyote', // Add the missing 'category' property
            speaker: 'Person 2',
            lines: [
                'Camus is the answer to all affairs of the heart and head. Call for him now!',
                'Camus sends poor omens when we need strength. Call to him now!',
                'They circle closer. Time grows short. Call to him now!',
            ],
        },
    ],
},
  {
    category: 'Camus/Sisyphus',
    answers: ['Sisyphus!', 'Camus!', 'Praise be!'],
    dialogues: [
      {
        category: 'Camus/Sisyphus',
        speaker: 'Person 1',
        lines: [
          'You are the mastermind of my absolution! Repent!',
          'Fellows, together we shout and in his stupor, may he answer. Sisyphus!',
          'Bread to eat, oh mercy on our souls!',
        ],
      },
      {
        category: 'Camus/Sisyphus',
        speaker: 'Person 2',
        lines: [
          'Camus\' savior, Camus\' martyr, Camus\' servant. Call for him now!',
          'Our one savior, Camus. Praise be to you!',
          'The fire lights the world and the rock moves our souls. Praise be!',
        ],
      },
    ],
  },
];

export default dialoguesData;
