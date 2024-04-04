import { LLMChain } from "langchain/chains";
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const chat = new ChatOpenAI({ temperature: 0 });

const chatPrompt = ChatPromptTemplate.fromMessages([
  ["system", "You translate {input_language} to {output_language}."],
  ["human", "{text}"],
]);

const chain = new LLMChain({
  prompt: chatPrompt,
  llm: chat,
});

const res = await chain.call({
  input_language: "English",
  output_language: "French",
  text: "I love programming.",
});

console.log({ res });
// { res: { text: "J'adore la programmation." } }
