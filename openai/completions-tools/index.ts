import OpenAi from "openai";

const openai = new OpenAi();

const getCurrentWeather = (args: any) => "Sunny again!";

const tools: OpenAi.ChatCompletionTool[] = [
  {
    type: "function",
    function: {
      name: "get_current_weather",
      description: "Get the current weather in a given location",
      parameters: {
        type: "object",
        properties: {
          location: {
            type: "string",
            description: "The city and state, e.g. San Francisco, CA",
          },
          unit: { type: "string", enum: ["celsius", "fahrenheit"] },
        },
        required: ["location"],
      },
    },
  },
];

const response = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  tools: tools,
  // force tool use on first call
  tool_choice: { type: "function", function: { name: "get_current_weather" } },
  messages: [
    { role: "user", content: "What's the weather like in Boston today?" },
  ],
});

const toolCall = response.choices[0].message.tool_calls![0];

const toolResult = getCurrentWeather(toolCall.function.arguments);

const response2 = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  tools: tools,
  tool_choice: "none",
  messages: [
    { role: "user", content: "What's the weather like in Boston today?" },
    { role: "function", name: "get_current_weather", content: toolResult },
  ],
});

console.dir(response2.choices, { depth: null });
