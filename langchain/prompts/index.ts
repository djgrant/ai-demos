import { PromptTemplate, ChatPromptTemplate } from "@langchain/core/prompts";

// An example prompt with no input variables
const noInputPrompt = new PromptTemplate({
  inputVariables: [],
  template: "Tell me a joke.",
});
const formattedNoInputPrompt = await noInputPrompt.format({});

console.log(formattedNoInputPrompt);
// "Tell me a joke."

// An example prompt with multiple input variables
const multipleInputPrompt = new PromptTemplate({
  inputVariables: ["adjective", "content"],
  template: "Tell me a {adjective} joke about {content}.",
});

const formattedMultipleInputPrompt = await multipleInputPrompt.format({
  adjective: "funny",
  content: "chickens",
});

console.log(formattedMultipleInputPrompt);
// "Tell me a funny joke about chickens."

// Infer input variables
const promptTemplate = PromptTemplate.fromTemplate(
  "Tell me a {adjective} joke about {content}."
);
console.log(promptTemplate.inputVariables);
// ['adjective', 'content']

const formattedPromptTemplate = await promptTemplate.format({
  adjective: "funny",
  content: "chickens",
});

console.log(formattedPromptTemplate);
// "Tell me a funny joke about chickens."

// Inferred chat template
const prompt = ChatPromptTemplate.fromMessages([
  ["ai", "Answer based on only the following context: \n\n{context}"],
  ["human", "{question}"],
  ["system", "You are an expert on LangChain"],
]);

const formattedPrompt = await prompt.formatMessages({
  context: "Hello",
  question: "How are you?",
});

console.dir(
  formattedPrompt.map((m) => m.toJSON()),
  { depth: null }
);
