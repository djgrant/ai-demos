import OpenAi from "openai";

const openai = new OpenAi();

const tools = {
  getCurrentWeather: (args: any) => {
    return "Sunny again!";
  },
};

const assistant = await openai.beta.assistants.create({
  instructions:
    "You are a weather bot. Use the provided functions to answer questions.",
  model: "gpt-4-turbo-preview",
  tools: [
    {
      type: "function",
      function: {
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
      },
    },
  ],
});

const run = await openai.beta.threads.createAndRunPoll({
  assistant_id: assistant.id,
  thread: {
    messages: [
      { role: "user", content: "What is the weather in Glasgow, Scotland?" },
    ],
  },
});

await handleRun(run);

async function handleRun(run: OpenAi.Beta.Threads.Runs.Run) {
  if (run.status === "requires_action") {
    const calls = run.required_action?.submit_tool_outputs.tool_calls!;

    const callResults = await Promise.all(
      calls.map(async (call) => {
        return {
          id: call.id,
          output: await handleFunctionCall(
            call.function.name,
            JSON.parse(call.function.arguments)
          ),
        };
      })
    );

    const toolRun = await openai.beta.threads.runs.submitToolOutputsAndPoll(
      run.thread_id,
      run.id,
      {
        tool_outputs: callResults.map((result) => ({
          tool_call_id: result.id,
          output: result.output,
        })),
      }
    );

    await handleRun(toolRun);
  } else if (run.status === "completed") {
    const messages = await openai.beta.threads.messages.list(run.thread_id);
    for (const message of messages.data.reverse()) {
      console.log(message.role, message.content[0]);
    }
  } else {
    console.log(run.status);
  }
}

async function handleFunctionCall(fnName: string, args: any) {
  return tools[fnName](args);
}
