## Section 1: AI Projects and Tools

Here is a list of AI projects and tools mentioned in the LocalLLama subreddit data:

**General-purpose models:**

1. [TinyDolphin 2.8 1.1B](https://huggingface.co/Crataco/TinyDolphin-2.8-1.1b-imatrix-GGUF)
2. [Dolphin 2.6 Phi-2](https://huggingface.co/TheBloke/dolphin-2_6-phi-2-GGUF)
3. [Nous Hermes Mistral 7B DPO](https://huggingface.co/Crataco/Nous-Hermes-2-Mistral-7B-DPO-imatrix-GGUF)
4. [Nous Hermes 2 SOLAR 10.7B](https://huggingface.co/TheBloke/Nous-Hermes-2-SOLAR-10.7B-GGUF)
5. [Nous Hermes 2 Mixtral 8x7B DPO](https://huggingface.co/mradermacher/Nous-Hermes-2-Mixtral-8x7B-DPO-i1-GGUF)

**Roleplay models:**

6. [Kunoichi-DPO-v2-7B](https://huggingface.co/brittlewis12/Kunoichi-DPO-v2-7B-GGUF)
7. [Erosumika](https://huggingface.co/Lewdiculous/Erosumika-7B-GGUF-IQ-Imatrix)
8. [Fimbulvetr-11B-v2](https://huggingface.co/mradermacher/Fimbulvetr-11B-v2-i1-GGUF)
9. [BagelMIsteryTour-v2-8x7B](https://huggingface.co/ycros/BagelMIsteryTour-v2-8x7B-GGUF)

**Other models:**

10. [Westlake-10.7B-v2](https://huggingface.co/TheBloke/Westlake-10.7B-v2-GGML)
11. [Noromaid 20B](https://huggingface.co/TheBloke/Noromaid-20B-GGML)
12. [EstopianMaid 13B](https://huggingface.co/TheBloke/EstopianMaid-13B-GGML)
13. [Noromaid-0.4-Mixtral-8x7B-ZLoss](https://huggingface.co/TheBloke/Noromaid-0.4-Mixtral-8x7B-ZLoss-GGML)
14. [MiquMaid](https://huggingface.co/TheBloke/MiquMaid-GGML)
15. [Midnight-Rose](https://huggingface.co/TheBloke/Midnight-Rose-70B-GGML)
16. [Midnight-Miqu](https://huggingface.co/TheBloke/Midnight-Miqu-70B-GGML)
17. [InfinityRP (7B)](https://huggingface.co/Endevor/InfinityRP-v1-7B)
18. [BuRP (7B)](https://huggingface.co/ChaoticNeutrals/BuRP_7B)
19. [Layris (9B)](https://huggingface.co/ChaoticNeutrals/Layris_9B/)
20. [Infinitely-Laydiculous (7B)](https://huggingface.co/Nitral-AI/Infinitely-Laydiculous-7B)
21. [Layla-V4 (7B)](https://huggingface.co/l3utterfly/mistral-7b-v0.1-layla-v4/)
22. [Kunocchini (128k-test) (7B)](https://huggingface.co/Nitral-AI/Kunocchini-7b-128k-test)
23. [wolfram/miquliz-120b-v2.0](https://huggingface.co/wolfram/miquliz-120b-v2.0)
24. [Mistral 7B Instruct v0.2](https://huggingface.co/decapoda-research/llama-7B-hf-int4-qe)
25. [Mixtral-Instruct](https://huggingface.co/TheBloke/Mixtral-Instruct-GGML)
26. [Goliath 120b](https://huggingface.co/EleutherAI/gpt-neox-20b)
27. [Blossom V5](https://huggingface.co/THUDM/Blossom-7B-v5)

**Frontends:**

28. [ollama](https://github.com/ollama/ollama)
29. [llama.cpp](https://github.com/ggerganov/llama.cpp)
30. [SillyTavern](https://github.com/SillyTavern/SillyTavern)

**Other tools:**

31. [KoboldCpp](https://github.com/LostRuins/koboldcpp)
32. [yt.py](http://yt.py) script for summarizing and wisdom extraction

## Section 2: Project Reports

This section provides a brief report on each project listed in Section 1, including direct quotes from the data and thoughts on how the project fits within emerging AI trends.

**General-purpose models:**

**1. TinyDolphin 2.8 1.1B:**

- "Takes about ~700MB RAM and tested on my Pi 4 with 2 gigs of RAM. Hallucinates a lot, but works for basic conversation."
- This model exemplifies the trend of making AI models smaller and more efficient, allowing them to run on devices with limited resources.

**2. Dolphin 2.6 Phi-2:**

- "Takes over ~2GB RAM and tested on my 3GB 32-bit phone via llama.cpp on Termux."
- Similar to TinyDolphin, this model demonstrates the focus on optimizing AI models for mobile and resource-constrained environments.

**3. Nous Hermes Mistral 7B DPO:**

- "Takes about ~4-5GB RAM depending on context length. Works on my laptop with 8GB RAM."
- This model represents a balance between size, performance, and affordability, making it accessible to a wider range of users.

**4. Nous Hermes 2 SOLAR 10.7B:**

- "Takes about ~6-8GB RAM depending on context length. Works on my server PCs and my primary PC (16GB RAM, 4GB VRAM)."
- This model showcases the increasing capabilities of larger models, offering improved performance for more demanding tasks.

**5. Nous Hermes 2 Mixtral 8x7B DPO:**

- "At IQ3_S, it can run on a laptop with 16GB RAM and 8GB VRAM with 10-11 layers offloaded at 4096 ctx, but I recall it's slightly slower than Q3_K_S (which I had a more consistent ~4.4 tokens/sec with)."
- This model highlights the trend of exploring multi-model approaches, combining multiple smaller models to achieve better performance and efficiency.

**Roleplay models:**

**6. Kunoichi-DPO-v2-7B:**

- "My most reliable... for roleplay."
- This model demonstrates the popularity of specialized models for specific tasks like roleplaying.

**7. Erosumika:**

- "Sacrifices the logical yet synthetic GPT dataset for something more organic... similar to older models like Noromaid, Pygmalion 6B, and AI Dungeon 2."
- This model reflects the desire for AI models that can generate more creative and human-like responses, even if it means sacrificing some accuracy.

**8. Fimbulvetr-11B-v2:**

- "I haven't tested it nearly as much as Kunoichi, so I can't vouch for it, but I hear a lot of great things about it!"
- This model indicates the ongoing development and exploration of new and improved roleplay models.

**9. BagelMIsteryTour-v2-8x7B:**

- "Probably the best RP model I've ever ran since it hits a great balance of prose and intelligence."
- This model emphasizes the importance of finding a balance between creativity and coherence in roleplay models.

**Other models:**

**10. Westlake-10.7B-v2:**

- "The newcomer to the dirty games and fits in as little as 8GB... competes very well with the classic 70B+ models, which is nothing short of amazing."
- This model shows the potential for smaller models to achieve comparable performance to much larger models, increasing accessibility and affordability
