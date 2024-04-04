import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { HNSWLib } from "@langchain/community/vectorstores/hnswlib";
import { Document } from "@langchain/core/documents";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import {
  RunnableLambda,
  RunnableMap,
  RunnablePassthrough,
} from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";

// Initialize a vector store using HNSWLib with documents to be indexed.
// Here, two documents are created with their content and then indexed using OpenAI embeddings to facilitate efficient retrieval.
const vectorStore = await HNSWLib.fromDocuments(
  [
    new Document({ pageContent: "Harrison worked at Kensho" }),
    new Document({ pageContent: "Bears like to eat honey." }),
  ],
  new OpenAIEmbeddings()
);

// Stored docs
console.log(vectorStore.docstore._docs);

// Vector point of doc 0
console.log(vectorStore._index?.getPoint(0));

const retriever = vectorStore.asRetriever(1);

// Create a ChatPromptTemplate instance, defining the structure of the chat interaction.
const prompt = ChatPromptTemplate.fromMessages([
  ["ai", "Answer based on only the following context: \n\n{context}"],
  ["human", "{question}"],
]);

// Initialize a new ChatOpenAI model for generating responses.
const model = new ChatOpenAI({});

// Define an output parser that extracts string outputs from the model's responses.
const outputParser = new StringOutputParser();

// Construct a RunnableMap to handle the transformation and passing of data between components.
// It uses two runnables: one for retrieving context based on the input and another for passing the input question.
const setupAndRetrieval = RunnableMap.from({
  // Use a lambda function to retrieve context relevant to the input question.
  // The retrieved context is the page content of the most relevant document found by the retriever.
  context: new RunnableLambda({
    func: (input: string) =>
      retriever.invoke(input).then((response) => response[0].pageContent),
  }).withConfig({ runName: "contextRetriever" }),

  // Pass the question through without modification.
  question: new RunnablePassthrough(),
});

// Define the sequence of operations: context retrieval -> question passing -> prompt creation -> response generation -> output parsing
const chain = setupAndRetrieval.pipe(prompt).pipe(model).pipe(outputParser);

// Invoke the chain with an input question, which triggers the sequence of operations to generate a response.
const response = await chain.invoke("Where did Harrison work?");

console.log(response);
