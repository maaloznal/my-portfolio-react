import UpArrow from "../../../public/UParrow.svg";

export interface QuestionsInterface {
  question: string;
  answer: string;
  imageUp: string;
}

export const questions: QuestionsInterface[] = [
  {
    question: "What type of development do you specialize in?",
    answer:
      "I specialize in front-end development for creating websites and web applications.",
    imageUp: UpArrow,
  },
  {
    question: "How can I order a project development from you?",
    answer:
      "You can order project development by contacting me. We will discuss your requirements, clarify the details, and agree on the timeline and cost.",
    imageUp: UpArrow,
  },
  {
    question: "What equipment and tools do you use for development?",
    answer:
      "For development, I use Visual Studio Code, React, Vue.js, Git, Figma, Node.js, and other modern tools.",
    imageUp: UpArrow,
  },
  {
    question: "Can I request specific technologies or tools for...",
    answer:
      "Yes, you can request the use of specific technologies or tools for your project. We will discuss your preferences during the planning stage and ensure they align with the project requirements.",
    imageUp: UpArrow,
  },
  {
    question: "What does your development process look like?",
    answer:
      "My development process includes planning, designing, development, testing, delivery, and support.",
    imageUp: UpArrow,
  },
  {
    question: "What quality guarantees do you provide for developed projects?",
    answer:
      "I provide quality guarantees, including testing, cross-browser compatibility, optimization, documentation, and technical support.",
    imageUp: UpArrow,
  },
  {
    question:
      "Do you offer additional services for deployment or support of developed projects?",
    answer:
      "I provide quality guarantees, including testing, cross-browser compatibility, optimization, documentation, and technical support.",
    imageUp: UpArrow,
  },
  {
    question: "How long does it take to develop a project?",
    answer:
      "The time required for project development depends on its complexity, scope, and specific requirements. Typically, I provide an estimated timeline during the initial consultation or after the project details are finalized.",
    imageUp: UpArrow,
  },
];

export const chunkArray = <T>(array: T[], size: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};
