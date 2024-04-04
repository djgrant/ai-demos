# Reddit Newsletter

This workflow scrapes the LocalLlaMa subreddit and creates a newsletter.

The original code is from this [tutorial](https://www.youtube.com/watch?v=kJvXT25LkwA&ab_channel=MayaAkim) by Maya Akim.

## Results

### Original

**Openhermes**

As Maya points out in her tutorial, this performs very poorly with local models (tested up to 7B parameters).

I tested with openhermes. It immediately went off on a tangent and misunderstand the prompt. It was like watching LLMs playing the telephone game.

```
Thought: I now understand what you're asking for and have taken into account the feedback from the previous attempts. I will provide the final answer in the required format.

Final Answer: After extensive research, testing, and experimentation with various AI models, I have concluded that none of the current options are perfect or fully suitable for your specific task at this time. However, there is one model that stands out as potentially the best fit for what you're looking for - the Moistral 11B model. This model has been specifically designed and trained for engaging in long-form eRP (erotic role-playing) conversations, making it a strong contender for your needs.
```

**GPT-4**

Here we see GPT-4 do a better job at internal thinking.

```
The blog post appears to be well-structured, with all the required elements present. However, I notice a lack of personal thoughts on how each project connects to the overall theme of the blog post. I also see that relevant facts about each project are present but they are not clearly identified as 'interesting facts'. To ensure that the format of each section is consistent and in line with the requirements, I will need to restructure each section and add my own thoughts on how each project connects to the overall theme of the blog post.
```

Here the agent correctly identifies problems but is the problem a limitation of the LLM, or an issue with the original prompt?

```
To begin with, I commend your efforts to provide a comprehensive overview of the latest AI and ML projects with the aim of engaging the general public. However, there are certain areas that can be improved to make the blog post more compelling, simple, and concise.
```

The agents engage in a lot of unnecessary back and forth between. If anything we are simulating an inefficient corporate process.

### One/two shot

I then tried prompting GPT-4 (via ChatGPT) and Mixtral (via Groq) and Claude 3 Sonnet to see if I could get comparable results with the following prompts:

- One shot
- One shot with chain of thought (2 levels of specificity)
- Two shot (breaking the chain of thought into two prompts)

In each case, I asked the model to extract quotes from the text, rather than go straight to asserting facts. Both models performed well but struggled to effectively extract a quote about Kunoichi-DPO-v2-7B.

It was mentioned in two comments:

```
[Kunoichi-DPO-v2-7B](https://huggingface.co/brittlewis12/Kunoichi-DPO-v2-7B-GGUF) is my most reliable, but I **love** [Erosumika](https://huggingface.co/Lewdiculous/Erosumika-7B-GGUF-IQ-Imatrix), which sacrifices the logical yet synthetic GPT dataset for something more organic, similar to older models like Noromaid, Pygmalion 6B, and AI Dungeon 2.
```

```
I mostly look for strong character card adherence, system prompt following, response formatting, general coherence and models that will just go along with the most hardcore NSFW roleplay without resistance.
Recommendations are always welcome.
  - Backend: KoboldCpp (`--contextsize 8192`)
  - Frontend: SillyTavern
---
### Models:
1) InfinityRP (7B)
An overall great model with solid character following and great response formatting. Seems to know not to write/speak for the {{user}} and when to stop.
\"This model was basically made to stop some upsetting hallucinations, so {{char}} mostly and occasionally will wait {{user}} response instead of responding itself or deciding for {{user}}, also, my primary idea was to create a cozy model that thinks.\"
  - Model: [Endevor/InfinityRP-v1-7B](https://huggingface.co/Endevor/InfinityRP-v1-7B)
  - Quants: [Lewdiculous/InfinityRP-v1-7B-GGUF-IQ-Imatrix](https://huggingface.co/Lewdiculous/InfinityRP-v1-7B-GGUF-IQ-Imatrix)
---
2) BuRP (7B)
Similar to the above, but with more unalignment. Generally also pretty solid with a slightly different style you might like compared to the original InfinityRP.
The model card feels like a personal *attack* on my formatting complaints and I can respect that.
\"So you want a model that can do it all? You've been dying to RP with a superintelligence who never refuses your advances while sticking to your strange and oddly specific dialogue format? Well, look no further because BuRP is the model you need.\"
  - Model: [ChaoticNeutrals/BuRP_7B](https://huggingface.co/ChaoticNeutrals/BuRP_7B)
  - Quants: [Lewdiculous/BuRP_7B-GGUF-IQ-Imatrix](https://huggingface.co/Lewdiculous/BuRP_7B-GGUF-IQ-Imatrix)
---
3) Layris (9B)
This passthrough Eris merge aimed to bring a high scoring model together with Layla-V4. It has shown to be smart and unaligned. Also a good option in this parameter size for our use case.
  - Model: [ChaoticNeutrals/Layris_9B](https://huggingface.co/ChaoticNeutrals/Layris_9B/)
  - Quants: [Lewdiculous/Layris_9B-GGUF-IQ-Imatrix](https://huggingface.co/Lewdiculous/Layris_9B-GGUF-IQ-Imatrix)
---
4) Infinitely-Laydiculous (7B)
I really like InfinityRP's style, and wanted to see it merged with Layla-V4 for her absolute unhingedness/unalignment.
  - Model: [Nitral-AI/Infinitely-Laydiculous-7B](https://huggingface.co/Nitral-AI/Infinitely-Laydiculous-7B)
  - Quants: [Lewdiculous/Infinitely-Laydiculous-7B-GGUF-IQ-Imatrix](https://huggingface.co/Lewdiculous/Infinitely-Laydiculous-7B-GGUF-IQ-Imatrix)
---
5) Kunoichi-DPO-v2 (7B)
Great all around choice. Widely recommended by many users. Punches above what you'd expect.
  - Model: [SanjiWatsuki/Kunoichi-DPO-v2-7B](https://huggingface.co/SanjiWatsuki/Kunoichi-DPO-v2-7B)
  - Quants: [Lewdiculous/Kunoichi-DPO-v2-7B-GGUF-Imatrix](https://huggingface.co/Lewdiculous/Kunoichi-DPO-v2-7B-GGUF-Imatrix)
---
6) Layla-V4 (7B)
This model has been stripped out of all refusals. A truly based and unaligned breed that is solid for roleplaying. A NSFW natural.
[I highly recommend you read this post here.](https://www.reddit.com/r/LocalLLaMA/comments/1b3jj0v)
  - Model: [l3utterfly/mistral-7b-v0.1-layla-v4](https://huggingface.co/l3utterfly/mistral-7b-v0.1-layla-v4/)
  - Quants: [Lewdiculous/mistral-7b-v0.1-layla-v4-GGUF-IQ-Imatrix](https://huggingface.co/Lewdiculous/mistral-7b-v0.1-layla-v4-GGUF-IQ-Imatrix)
---
7) Kunocchini (128k-test) (7B)
Kunoichi-DPO-v2 with better handling of longer contexts.
  - Model: [Nitral-AI/Kunocchini-7b-128k-test](https://huggingface.co/Nitral-AI/Kunocchini-7b-128k-test)
  - Quants: [Lewdiculous/Kunocchini-7b-128k-test-GGUF-Imatrix](https://huggingface.co/Lewdiculous/Kunocchini-7b-128k-test-GGUF-Imatrix)
```

Mixtral attempts:

- Correct quote, but not specifically about this model:
  - "I mostly look for strong character card adherence, system prompt following, response formatting, general coherence and models that will just go along with the most hardcore NSFW roleplay without resistance."
- Correct quote, but about another model:
  - "I love [Erosumika](https://huggingface.co/Lewdiculous/Erosumika-7B-GGUF-IQ-Imatrix), which sacrifices the logical yet synthetic GPT dataset for something more organic, similar to older models like Noromaid, Pygmalion 6B, and AI Dungeon 2."

GPT-4 attempts:

- Correct quote, but mostly about another model
  - "My most reliable, but I love Erosumika, which sacrifices the logical yet synthetic GPT dataset for something more organic."
- Correct quote, removes section about another model, but didn't select the best available quote
  - "My most reliable."

Claude 3 Sonnet:

- Successfully identifies the correct quote
  - "Great all around choice. Widely recommended by many users. Punches above what you'd expect."

#### Conclusions

Claude 3 sonnet (with the specific one shot prompt) performed best, being the only model to get the tricky quote, the model that found the most projects, and the only model that correctly added "no direct comments" when no quotes were available. Like GPT-4, its response was truncated – presumably this would not be an issue with the Opus model.

Aside from the tricky quote, GPT performed well in all cases. However, its responses were typically cut short (I assume because of limited context window).

Mixtral also did very well, but required more prompt engineering. I was able to increase the number of tokens on Groq which meant it was able to produce complete responses.

Only Mixtral with a one shot chain of thought prompt managed to detected Blossom (which was a main thread rather than comments).

Mixtral and GPT-4 seemed to decide to not include projects that didn't have an associated quote, which is reasonable.

Gemini 1.5 Pro I didn't commit much time to. It was the only model to categorise the projects. This was not in the instructions. It also seemed to add additional facts and hallucinations that were not in the dataset.

Groq responses (Mixtral) were at least two orders of magnitude faster than others.

The more specific chain of thought prompt seemed to go slower/use more tokens.

Overall, there was no significant benefit between the different prompts attempted. Two shot seems the fastest way to get a good result, while one shot prompting requires more tweaking.

### Adapted

I finally refactored the workflow into something more streamlined.

In my first attempt I gave the scraper tool to only the researcher. I passed the research task as context to the writing task, but nonetheless, the final report did not have any data besides the list of projects. It seems that only the output of a task is passed as context to the next task.

This seems a sensible decision but meant that the writer agent also needed to run the scraper task. At this point it felt a bit pointless having the task broken into two separate interactions with the model.

The final result only included one project – I assume because the extra context from the first task, and the additional prompting inserted by crewai blew the context window.
