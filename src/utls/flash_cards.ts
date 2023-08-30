interface IFlashCard {
  english: string;
  japanese: string;
  note?: string;
}

const flashCards: IFlashCard[] = [
  {
    english: "Where is the toilet?",
    japanese: "Toire wa do ko deska?",
  },
  {
    english: "please",
    japanese: "Onegaishimas",
  },
  {
    english: "sorry / excuse me",
    japanese: "Sumimasen",
  },
  {
    english: "hello",
    japanese: "Konnichiwa",
    note: "10am - 7am",
  },
];

export default flashCards;
