from dotenv import load_dotenv
load_dotenv()

from crew import crew

result = crew.kickoff(inputs={'topic': 'AI in healthcare'})
print(result)
