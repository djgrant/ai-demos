import praw
import time
from dotenv import load_dotenv
from langchain.tools import tool
from crewai import Agent, Task, Process, Crew

load_dotenv()

@tool("Scrape reddit content")
def scrape_reddit(max_comments_per_post=7):
    """Useful to scrape a reddit content"""
    reddit = praw.Reddit(
        client_id="0qtKJcticdW8PNH0hwRbbA",
        client_secret="F2xF_BEW2DDn_QF13jHMjsKb2UixRg",
        user_agent="apple:weegie-app:v1 (by u/lorenimpsum",
    )
    subreddit = reddit.subreddit("LocalLLaMA")
    scraped_data = []

    for post in subreddit.hot(limit=8):
        post_data = {"title": post.title, "url": post.url, "comments": []}

        try:
            post.comments.replace_more(limit=0)  # Load top-level comments only
            comments = post.comments.list()
            if max_comments_per_post is not None:
                comments = comments[:7]

            for comment in comments:
                post_data["comments"].append(comment.body)

            scraped_data.append(post_data)

        except praw.exceptions.APIException as e:
            print(f"API Exception: {e}")
            time.sleep(60)  # Sleep for 1 minute before retrying

    return scraped_data
  

researcher = Agent(
  role="Senior Researcher",
  goal="Find and explore the most exciting projects and companies on LocalLLama subreddit in 2024",
  backstory="""You are and Expert strategist that knows how to spot emerging trends and companies in AI, tech and machine learning. 
  You're great at finding interesting, exciting projects on LocalLLama subreddit. You turned scraped data into detailed reports with names
  of most exciting projects an companies in the ai/ml world.
  """,
  verbose=True,
  allow_delegation=False,
  tools=[scrape_reddit],
)

writer = Agent(
  role="Senior Technical Writer",
  goal="Write engaging and interesting blog post about latest AI projects using simple, layman vocabulary",
  backstory="""You are an Expert Writer on technical innovation, especially in the field of AI and machine learning. You know how to write in 
  engaging, interesting but simple, straightforward and concise. You know how to present complicated technical terms to general audience in a 
  fun way by using layman words.ONLY use scraped data from LocalLLama subreddit for the blog.""",
  verbose=True,
  allow_delegation=False,
  tools=[scrape_reddit],
)

researchArticle = Task(
  description="""Use the data from subreddit LocalLLama to make a detailed report on the latest rising projects in AI. 
    Use ONLY scraped data from LocalLLama to generate the report. 
    Your final answer MUST be a full analysis report, text only, ignore any code or anything that isn't text.""",
  expected_output=f"""Using the data scraped from the LocalLLama subreddit, write a report highlighting all the new AI projects or tools.
  Pick ALL the projects or tools from the main threads or comments. For each project you'll also need to identify the associated hyperlink to the project. Create a list of these projects in the following format:
  ```
  [AI Project](link to project)
  ```
  """,
  agent=researcher
)

writeArticle = Task(
  description="""Use the data from subreddit LocalLLama and the generated list of project, create a report that summarizes the latest ai tools found on localLLama subreddit.""",
  expected_output=f"""A markdown report in the following format:
  ```
  [for each project in list]
  ## [AI Project](link to project)
  - [Direct quotes about this project that were stated in the provided data (if there are no quotes, write "no comments")]
  - [Thoughts on how it fits within emerging AI trends]
  [/foreach]
  ```
  """,
  agent=writer,
  context=[researchArticle]
)

crew = Crew(
    agents=[researcher, writer],
    tasks=[researchArticle, writeArticle],
    verbose=2,
    process=Process.sequential,  # Sequential process will have tasks executed one after the other and the outcome of the previous one is passed as extra content into this next.
)

# Get your crew to work!
result = crew.kickoff()

print("######################")
print(result)