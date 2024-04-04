import { OpenAI } from "openai";
import { traceable } from "langsmith/traceable";
import { wrapOpenAI } from "langsmith/wrappers";

// Auto-trace LLM calls in-context
const client = wrapOpenAI(new OpenAI());

const pipeline = traceable(async (user_input) => {
  const result = await client.chat.completions.create({
    messages: [{ role: "user", content: user_input }],
    model: "gpt-3.5-turbo",
  });
  return result.choices[0].message.content;
});

const result = await pipeline("Hello, world!");
// Out: Hello there! How can I assist you today?
// See trace: https://smith.langchain.com/public/3603e52b-5d92-4cac-a267-34004a755843/r

console.log({ result });
