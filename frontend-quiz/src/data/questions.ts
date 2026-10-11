export type Question = { text: string; options: string[]; answer: string; };

export const questions: Question[] = [
  { text: "Why do we need to study?", options: ["A: To Learn","B: For Fun","C: To Pass Exams","D: Because It's Boring"], answer: "A: To Learn" },
  { text: "Why do we breathe?", options: ["A:To live","B: For Oxygen","C: To Expel CO2","D: Because It's Natural"], answer: "A: To live" },
  { text: "Why Computer is important?", options: ["A: To Process Data","B: For Entertainment","C: To Communicate","D: Because It's Useful"], answer: "A: To Process Data" },
  { text: "What IT can do?", options: ["A: To Process Data","B: For Entertainment","C: To Communicate","D: Because It's Useful"], answer: "A: To Process Data" },
  { text: "What does CSS mean?", options: ["A: Colorful","B: Cascading Style Sheets","C: Computer","D: Creative"], answer: "B: Cascading Style Sheets" },
  { text: "Sino ang singer ang maya-ari ng mars?", options: ["A: Aba! Hindi po ako","B: Andrew E.","C: Bruno Mars","D: Dedma"], answer: "C: Bruno Mars" },
  { text: "Create function?", options: ["A: function myFunction()","B: function:myFunction()","C: function = myFunction()","D: myFunction function()"], answer: "A: function myFunction()" },
  { text: "Largest heading?", options: ["A: <h6>","B: <head>","C: <h1>","D: <heading>"], answer: "C: <h1>" },
  { text: "Why do we need to survive?", options: ["A: To Live","B: For Food","C: To Reproduce","D: Because It's Natural"], answer: "A: To Live" },
  { text: "Add to array end?", options: ["A: Push()","B: Pop()","C: Shift()","D: Unshift()"], answer: "A: Push()" }
];