/** @typedef {import('../schema.js').Lesson} Lesson */

/** @type {Lesson[]} */
export const lessons = [
  {
    id: 'present-simple-intro',
    moduleId: 'tenses-basics',
    title: 'Present Simple: Talking About Now',
    description: 'The most useful tense in English — for facts, habits, and routines.',
    order: 1,
    estimatedMinutes: 12,
    category: 'grammar',
    activities: [
      {
        id: 'act-1',
        type: 'goal',
        content: {
          text: 'By the end of this lesson, you will be able to describe your daily routine and simple facts using the Present Simple tense — without translating from your first language in your head.',
        },
      },
      {
        id: 'act-2',
        type: 'explanation',
        content: {
          heading: 'What is Present Simple?',
          body:
            'We use Present Simple for things that are always true, or things that happen again and again — habits, routines, facts. For "I / you / we / they," the verb stays in its base form. For "he / she / it," we add -s or -es.\n\nExample: I work in Dasuya. She works in Jalandhar.',
        },
      },
      {
        id: 'act-3',
        type: 'video',
        content: {
          youtubeId: null,
          caption: 'Watch: Present Simple explained in 4 minutes (Bewakoof English)',
        },
      },
      {
        id: 'act-4',
        type: 'vocabulary',
        content: {
          words: [
            { term: 'routine', meaning: 'things you do regularly, in the same order', example: 'My morning routine is simple: wake up, tea, walk.' },
            { term: 'habit', meaning: 'something you do often, almost without thinking', example: 'Checking the phone first thing is a bad habit.' },
            { term: 'always / never', meaning: 'words that show how often something happens', example: 'I always drink chai before class. I never skip breakfast.' },
          ],
        },
      },
      {
        id: 'act-5',
        type: 'mcqQuiz',
        content: {
          questions: [
            {
              id: 'q1',
              question: 'Choose the correct sentence.',
              options: ['She work in a bank.', 'She works in a bank.', 'She working in a bank.', 'She worked in a bank now.'],
              correctIndex: 1,
              explanation: 'With "she," we add -s to the base verb: work \u2192 works.',
            },
            {
              id: 'q2',
              question: 'Which sentence describes a habit?',
              options: ['I am eating rice right now.', 'I ate rice yesterday.', 'I eat rice every day.', 'I will eat rice tomorrow.'],
              correctIndex: 2,
              explanation: '"Every day" signals a routine \u2014 Present Simple is the right choice.',
            },
          ],
        },
      },
      {
        id: 'act-6',
        type: 'summary',
        content: {
          points: [
            'Present Simple is for facts, habits, and routines.',
            'Add -s or -es for he / she / it.',
            'Words like always, never, every day are strong clues.',
          ],
        },
      },
    ],
  },
  {
    id: 'short-vs-complete-sentences',
    moduleId: 'building-sentences',
    title: 'From Broken English to Complete Sentences',
    description: 'A simple trick to turn fragments into full, confident sentences.',
    order: 1,
    estimatedMinutes: 10,
    category: 'grammar',
    activities: [
      {
        id: 'act-1',
        type: 'goal',
        content: {
          text: 'You will learn why "I go market" is incomplete, and how to fix sentences like it in seconds.',
        },
      },
      {
        id: 'act-2',
        type: 'reading',
        content: {
          title: 'The Missing Word',
          paragraphs: [
            'Many learners say "I go market" instead of "I am going to the market" or "I go to the market." The sentence is missing small but important words \u2014 a preposition ("to") and sometimes an article ("the").',
            'English sentences usually need: a subject, a verb, and often a preposition + object. Think of these small words as the glue that holds the sentence together. Without glue, the sentence falls apart \u2014 people can guess your meaning, but it does not sound complete.',
          ],
        },
      },
      {
        id: 'act-3',
        type: 'mcqQuiz',
        content: {
          questions: [
            {
              id: 'q1',
              question: 'Which sentence is complete?',
              options: ['I going office.', 'I go to office.', 'I am going to the office.', 'I office going.'],
              correctIndex: 2,
              explanation: '"I am going to the office" has a subject, a correct verb form, and the right preposition + article.',
            },
          ],
        },
      },
      {
        id: 'act-4',
        type: 'summary',
        content: {
          points: [
            'Small words like "to," "the," "a" are not optional \u2014 they are glue.',
            'Check every sentence: subject + verb + (preposition + object)?',
          ],
        },
      },
    ],
  },
  {
    id: 'shopping-conversation',
    moduleId: 'daily-situations',
    title: 'At the Shop: A Real Conversation',
    description: 'Practice the exact phrases you need when buying something.',
    order: 1,
    estimatedMinutes: 8,
    category: 'listening',
    activities: [
      {
        id: 'act-1',
        type: 'goal',
        content: { text: 'You will learn 6 phrases that work in almost any shop.' },
      },
      {
        id: 'act-2',
        type: 'video',
        content: {
          youtubeId: 'dQw4w9WgXcQ',
          caption: 'Watch: A real shop conversation, slowed down',
        },
      },
      {
        id: 'act-3',
        type: 'vocabulary',
        content: {
          words: [
            { term: 'How much is this?', meaning: 'used to ask the price', example: 'How much is this shirt?' },
            { term: 'Do you have it in another size?', meaning: 'asking for a different size', example: 'Do you have it in a large?' },
            { term: "I'll take it.", meaning: 'saying you want to buy something', example: 'This one is good \u2014 I\u2019ll take it.' },
          ],
        },
      },
      {
        id: 'act-4',
        type: 'mcqQuiz',
        content: {
          questions: [
            {
              id: 'q1',
              question: 'You want to ask the price. What do you say?',
              options: ['How much is this?', 'How is this much?', 'This much how?', 'Is much this how?'],
              correctIndex: 0,
            },
          ],
        },
      },
    ],
  },
];
