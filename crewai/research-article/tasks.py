from crewai import Task
from agents import researcher, writer
from tools import search_tool

# Research task
research_task = Task(
  description=(
    "Identify the next big trend in {topic}."
    "Focus on identifying the consensus views and the contrarian takes."
    "Your report should clearly articulate the the current approach,"
    "the prevailing ideas, and the ideas that are could discontinue the status quo."
  ),
  expected_output='A comprehensive 3 paragraphs long report that make includes bullet points and tables formatted as markdown.',
  tools=[search_tool],
  agent=researcher,
)

write_task = Task(
  description=(
    "Compose an insightful article on {topic}."
    "Focus on the latest trends and how it's impacting the industry."
    "This article should create tension by contrasting a consensus view with the contrarian ideas"
    "that could discontinue the status quo or trigger unexpected trends."
  ),
  expected_output='A 4 paragraph article on {topic} advancements formatted as markdown.',
  tools=[search_tool],
  agent=writer,
  async_execution=False,
  output_file='output/new-blog-post.md'  # Example of output customization
)
