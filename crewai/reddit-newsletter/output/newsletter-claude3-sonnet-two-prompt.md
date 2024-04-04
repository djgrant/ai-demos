```
## [TinyDolphin 2.8 1.1B](https://huggingface.co/Crataco/TinyDolphin-2.8-1.1b-imatrix-GGUF)

- "Takes about ~700MB RAM and tested on my Pi 4 with 2 gigs of RAM. Hallucinates a lot, but works for basic conversation."

- This small 1.1B model seems to be focused on running on low-memory devices like the Raspberry Pi, fitting the trend of making large language models more accessible on consumer hardware.

## [Dolphin 2.6 Phi-2](https://huggingface.co/TheBloke/dolphin-2_6-phi-2-GGUF)

- "Takes over ~2GB RAM and tested on my 3GB 32-bit phone via llama.cpp on Termux."

- Another smaller model aimed at mobile devices, allowing language model capabilities on smartphones and other ARM devices.

## [Nous Hermes Mistral 7B DPO](https://huggingface.co/Crataco/Nous-Hermes-2-Mistral-7B-DPO-imatrix-GGUF)

- "Takes about ~4-5GB RAM depending on context length. Works on my laptop with 8GB RAM."

- A larger 7B model that can run on consumer laptops, fitting the trend of making powerful language models more accessible outside of datacenter environments.

## [Nous Hermes 2 SOLAR 10.7B](https://huggingface.co/TheBloke/Nous-Hermes-2-SOLAR-10.7B-GGUF)

- "Takes about ~6-8GB RAM depending on context length. Works on my server PCs and my primary PC (16GB RAM, 4GB VRAM)."

- An even larger 10.7B model that requires more powerful hardware like servers or gaming PCs to run effectively.

## [Nous Hermes 2 Mixtral 8x7B DPO](https://huggingface.co/mradermacher/Nous-Hermes-2-Mixtral-8x7B-DPO-i1-GGUF)

- "At IQ3_S, it can run on a laptop with 16GB RAM and 8GB VRAM with 10-11 layers offloaded at 4096 ctx, but I recall it's slightly slower than Q3_K_S (which I had a more consistent ~4.4 tokens/sec with)."

- This very large 8x7B (56B) model requires offloading to run on a gaming laptop, showcasing the hardware requirements for training extremely large language models.

## [Kunoichi-DPO-v2-7B](https://huggingface.co/brittlewis12/Kunoichi-DPO-v2-7B-GGUF)

- "Great all around choice. Widely recommended by many users. Punches above what you'd expect."

- A well-regarded 7B model that seems to perform better than expected for its size.

## [Erosumika-7B-GGUF-IQ-Imatrix](https://huggingface.co/Lewdiculous/Erosumika-7B-GGUF-IQ-Imatrix)

- "I **love** [Erosumika](https://huggingface.co/Lewdiculous/Erosumika-7B-GGUF-IQ-Imatrix), which sacrifices the logical yet synthetic GPT dataset for something more organic, similar to older models like Noromaid, Pygmalion 6B, and AI Dungeon 2."

- This 7B model seems to be aimed at more natural, open-ended conversation compared to typical GPT-style models. Fits the trend of exploring different training data and techniques beyond just the typical web crawl data.

## [Fimbulvetr-11B-v2](https://huggingface.co/mradermacher/Fimbulvetr-11B-v2-i1-GGUF)

- "I haven't tested it nearly as much as Kunoichi, so I can't vouch for it, but I hear a lot of great things about it!"

- An 11B model that is reportedly good but the commenter hasn't used extensively. Continues the trend of exploring larger model sizes.

## [BagelMIsteryTour-v2-8x7B](https://huggingface.co/ycros/BagelMIsteryTour-v2-8x7B-GGUF)

- "probably the best RP model I've ever ran since it hits a great balance of prose and intelligence."

- This very large 8x7B (56B) model seems to be targeted at roleplay tasks, generating prose with a good balance of quality and coherence.

## [ollama](https://github.com/ollama/ollama)

- "terminal client. I use it for quick Q&A. Automatically offloads GPU layers, easy to download and get a model running, etc. But it [lags behind upstream llama.cpp](https://github.com/ollama/ollama/pull/1825)."

- A terminal-based tool for running and interacting with large language models locally. Focused on ease of use and GPU offloading.

## [llama.cpp](https://github.com/ggerganov/llama.cpp)

- "With cmake, I was able to compile the latest commit (c47cf41) on my 32-bit Android phone."

- Another terminal tool, but optimized enough to run on lower-powered ARM devices like smartphones.

## [SillyTavern](https://github.com/SillyTavern/SillyTavern)

- "For roleplay, or just because of its fancy interface, usually if I'm using a model hosted from another PC, want to do a roleplay, or use its built-in RAG capability (vector storage)."

- A front-end interface focused on roleplay, with additional features like running remote models and vector databases.

## [KoboldCpp](https://github.com/LostRuins/koboldcpp)

- (no comments)

- Likely a C++ implementation or tooling around the Kobold AI project for running large language models locally.

## [Endevor/InfinityRP-v1-7B](https://huggingface.co/Endevor/InfinityRP-v1-7B)

- "An overall great model with solid character following and great response formatting. Seems to know not to write/speak for the {{user}} and when to stop."

- A 7B model optimized for coherent roleplaying and dialogue formatting.

## [Lewdiculous/InfinityRP-v1-7B-GGUF-IQ-Imatrix](https://huggingface.co/Lewdiculous/InfinityRP-v1-7B-GGUF-IQ-Imatrix)

- (no comments)

- Likely quantized versions of the InfinityRP model to improve efficiency.

## [ChaoticNeutrals/BuRP_7B](https://huggingface.co/ChaoticNeutrals/BuRP_7B)

- "Similar to the above, but with more unalignment. Generally also pretty solid with a slightly different style you might like compared to the original InfinityRP."

- Another 7B roleplaying model, described as more "unaligned" compared to InfinityRP, potentially being more open-ended or provocative.

## [Lewdiculous/BuRP_7B-GGUF-IQ-Imatrix](https://huggingface.co/Lewdiculous/BuRP_7B-GGUF-IQ-Imatrix)

- (no comments)

- Likely quantized versions of the BuRP model.

## [ChaoticNeutrals/Layris_9B](https://huggingface.co/ChaoticNeutrals/Layris_9B/)

- "This passthrough Eris merge aimed to bring a high scoring model together with Layla-V4. It has shown to be smart and unaligned. Also a good option in this parameter size for our use case."

- A 9B model that combines a high-performing model with the provocative "Layla-V4" model, aiming for intelligence and unalignment.

## [Lewdiculous/Layris_9B-GGUF-IQ-Imatrix](https://huggingface.co/Lewdiculous/Layris_9B-GGUF-IQ-Imatrix)

- (no comments)

- Likely quantized versions of the Layris model.

## [Nitral-AI/Infinitely-Laydiculous-7B](https://huggingface.co/Nitral-AI/Infinitely-Laydiculous-7B)

- "I really like InfinityRP's style, and wanted to see it merged with Layla-V4 for her absolute unhingedness/unalignment."

- Another 7B model merging the InfinityRP model with the unaligned Layla-V4 to combine coherence with provocative outputs.

## [Lewdiculous/Infinitely-Laydiculous-7B-GGUF-IQ-Imatrix](https://huggingface.co/Lewdiculous/Infinitely-Laydiculous-7B-GGUF-IQ-Imatrix)

- (no comments)

- Likely quantized versions of the Infinitely-Laydiculous model.

## [SanjiWatsuki/Kunoichi-DPO-v2-7B](https://huggingface.co/SanjiWatsuki/Kunoichi-DPO-v2-7B)

- (same as the non-quantized version above)

## [Lewdiculous/Kunoichi-DPO-v2-7B-GGUF-Imatrix](https://huggingface.co/Lewdiculous/Kunoichi-DPO-v2-7B-GGUF-Imatrix)

- (no comments)

- Likely a quantized version of the popular Kunoichi model.

## [l3utterfly/mistral-7b-v0.1-layla-v4](https://huggingface.co/l3utterfly/mistral-7b-v0.1-layla-v4/)

- "This model has been stripped out of all refusals. A truly based and unaligned breed that is solid for roleplaying. A NSFW natural."

- A 7B Mistral model with the "Layla-V4" unalignment applied, optimized for provocative and unfiltered roleplaying.

## [Lewdiculous/mistral-7b-v0.1-layla-v4-GGUF-IQ-Imatrix](https://huggingface.co/Lewdiculous/mistral-7b-v0.1-layla-v4-GGUF-IQ-Imatrix)

- (no comments)

- Likely a quantized version of the unaligned Layla-V4 Mistral model.

## [Nitral-AI/Kunocchini-7b-128k-test](https://huggingface.co/Nitral-AI/Kunocchini-7b-128k-test)

- "Kunoichi-DPO-v2 with better handling of longer contexts."

- An extended version of the Kunoichi model optimized for longer context windows.

## [Lewdiculous/Kunocchini-7b-128k-test-GGUF-Imatrix](https://huggingface.co/Lewdiculous/Kunocchini-7b-128k-test-GGUF-Imatrix)

- (no comments)

- Likely a quantized version of the extended Kunocchini model.

## [wolfram/miquliz-120b-v2.0](https://huggingface.co/wolfram/miquliz-120b-v2.0)

- "I'm obviously partial, but I've been running [wolfram/miquliz-120b-v2.0](https://huggingface.co/wolfram/miquliz-120b-v2.0) almost exclusively since making it."

- A very large 120B language model from the "wolfram" user.

## [wolfram/miquliz-120b-v2.0-GGUF](https://huggingface.co/wolfram/miquliz-120b-v2.0-GGUF)

- "And I just uploaded [additional imatrix GGUF quants](https://huggingface.co/wolfram/miquliz-120b-v2.0-GGUF) today, from IQ1_S to IQ4_XS and in-between (even at 2-bit with IQ2_XS it works great)."

- Quantized versions of the Miquliz 120B model, including very low-precision 2-bit quantization.

## [yt.py](http://yt.py)

- "Thanks to [Daniel Miessler](https://github.com/danielmiessler/) for the [yt.py](http://yt.py) script and the special prompt. Amazing!"

- Seems to be a script or tool, potentially for querying or interacting with language models.

## [Westlake-10.7B-v2](None provided)

- "Westlake-10.7B-v2 is the newcomer to the dirty games and fits in as little as 8GB. Almost anyone with a mid-spec gaming rig can run this well and get their fix, and competes very well with the classic 70B+ models, which is nothing short of amazing. You could stop here and just get this one and you will leave this thread happy."

- A smaller 10.7B model optimized for provocative and explicit content generation, while still being efficient enough to run on consumer gaming hardware.

## [Noromaid 20B](None provided)

## [EstopianMaid 13B](None provided)

## [Noromaid-0.4-Mixtral-8x7B-ZLoss](None provided)

## [MiquMaid](None provided)

- These all seem to be variations on explicit or provocative language models, with varying model sizes from 13B to large 56B (8x7B) composites. They fit the trend of exploring different training data beyond typical web crawls.

## [Midnight-Rose](None provided)

## [Midnight-Miqu](None provided)

- "For a more intelligent good time with a slower burn, and if you have lots of VRAM (48GB recommended), consider **Midnight-Rose** or **Midnight-Miqu** (less smutty and more smutty, respectively), in their 70B or 103B forms."

- Very large 70B and 103B language models, with the "Miqu" version optimized for more explicit content. Requiring huge amounts of VRAM highlights the hardware demands.

## [LoneStriker_miqu-1-70b-sf-5.0bpw-h6-exl2](None provided)

## [Midnight-Miqu-70B-v1.5_exl2_5.0bpw](None provided)

- (no comments)

- Seem to be optimized 70B versions of the "Miqu" model family focused on explicit content, with techniques like 5-bit quantization to improve efficiency.

## [Scable Diffusion XL](None provided)

- (no comments)

- Likely a larger or optimized version of the "Stable Diffusion" text-to-image model, fitting the AI trend towards multimodal models combining language and vision.

## [Goliath 120b](None provided)

- "Goliath 120b, creative prose still makes me unable to live without it. Even though Miqu-120B and Miquliz-120B have appeared."

- A very large 120B language model focused on high-quality creative writing and prose generation. The commenter prefers it over other 120B models.

## [Blossom V5 14B](None provided)

- "I tried the 14b, it was pretty decent. Probably the best 14b finetune so far (but sadly there aren't many to compare to)."

- A 14B model that the commenter found to be decent quality for its size, standing out among the limited other 14B finetuned models.

## [Blossom V5 9B](None provided)

- (no comments)
```
