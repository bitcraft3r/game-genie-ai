# aira-chatbot-openai-react
 
### Setting Up Frontend

1. `npx create-react-app client` in app folder to create react client in new folder.

2. `npm start` in `client` folder to run server.

### Setting Up Backend

In the `server` folder:

1. `npm init`

2. `npm install express cors body-parser morgan openai dotenv --save`

## Resources

1. OpenAI API: https://beta.openai.com/docs/introduction

2. Video tutorials:
- Let's Build ChatGPT 2.0 with React JS and OpenAI on your PC!: https://youtu.be/qwM23_kF4v4
- How To Use ChatGPT With JavaScript (NodeJS & Express): https://youtu.be/UQamG425RD0

3. Fine-tuning
- https://www.mlq.ai/fine-tuning-gpt-3-question-answer-bot/
- https://github.com/openai/openai-cookbook/blob/main/examples/Question_answering_using_embeddings.ipynb
- https://github.com/openai/openai-cookbook/blob/57024c70cff473fb520105e9aea3ab4e514be0df/examples/fine-tuned_qa/olympics-1-collect-data.ipynb

3a) Preparing Dataset for fine-tuning
- https://www.reddit.com/r/GPT3/comments/10jjbf1/using_davinci003_with_our_docs_for_automated/
- https://www.patterns.app/blog/2022/12/21/finetune-llm-tech-support/

3b) No-code model builder for fine-tuning
- https://www.reddit.com/r/OpenAI/comments/zpv2fy/why_arent_more_people_creating_custom_openai/
- https://no-code-ai-model-builder.com/custom-models
