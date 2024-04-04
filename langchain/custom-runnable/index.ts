import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { createOpenAIFnRunnable } from "langchain/chains/openai_functions";
import { JsonOutputFunctionsParser } from "langchain/output_parsers";

const openAIFunction = {
  name: "getCurrentWeather",
  description: "Get the weather in location",
  parameters: {
    type: "object",
    properties: {
      location: {
        type: "string",
        description: "The city and state e.g. San Francisco, CA",
      },
      unit: { type: "string", enum: ["c", "f"] },
    },
    required: ["location"],
  },
};

const getCurrentWeather = (args: any) => "Sunny again!";

const model = new ChatOpenAI();

const prompt = ChatPromptTemplate.fromMessages([
  ["human", "Human description: {description}"],
]);

const outputParser = new JsonOutputFunctionsParser();

const runnable = createOpenAIFnRunnable({
  llm: model,
  prompt,
  functions: [openAIFunction],
  outputParser,
});

const response = await runnable.invoke({
  description: "What is the weather in Glasgow today?",
});

const toolResult = getCurrentWeather(response);

console.log(toolResult);
