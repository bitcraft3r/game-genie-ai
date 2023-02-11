# Game Genie AI 

A Game Concept and Content Generation Tool

## Description

Game Genie AI is a website that leverages OpenAI and Stable Diffusion technology to provide game creators with an AI-powered toolkit to effortlessly generate game concepts, stories, art, and content. 

With the **Chat** and **Dream** features, users can interact with the AI and create anime-style profile picture images with text. 

The **Wish** feature expands the capabilities of the chatbot and stable diffusion by allowing users to create:
- *Game concepts* from ideas and game names, to designing campaigns and quests
- *Imaginative game worlds* with *immersive stories*, characters, game art, and 
- *Viral content* for social media platforms such as Instagram and Twitter.

### Technical Used

- React
- `openai` package
- [Fine-tuned stable diffusion model](https://twitter.com/sov3333/status/1618563856649052160)
- `express` server for interacting with openai and huggingface api
- `file-saver` and `react-csv` packages to save images and csv files
- `firebase` and `react-google-button` packages for "sign in with google"
- `dotenv` for keys/secrets storage

## APIs Used

1. OpenAI - Completions API: https://platform.openai.com/docs/api-reference/introduction

GPT-3 powered API for performing natural language tasks by providing text completion based on inputted prompts.

2. Hugging Face - Inference API: https://huggingface.co/inference-api

Free ML API for building, training, deploying, and interacting with ML models, including pre-trained models or user-uploaded fine-tuned models.

3. Firebase Authentication - Login with Google: https://firebase.google.com/docs/auth

Firebase Authentication offers backend services, SDKs, and UI libraries for authenticating app users via password, phone, popular federated identity providers, etc.

4. Firestore serverless database - Track user actions: https://firebase.google.com/docs/firestore

Firestore is a NoSQL document database, and can be directly accessed by mobile and web applications through native SDKs.

### User Stories

1. As a game creator, I want to be able to easily generate game concepts, stories, art, and content for my projects, so that I can save time and effort in the creative process.

2. As a game creator, I want to be able to interact with the AI using a chat interface and generate anime-style profile pictures with text, so that I can personalize my projects with unique and eye-catching visuals.

3. As a game creator, I want to be able to create imaginative game worlds with immersive stories, characters, game art, and viral content for social media platforms, so that I can expand the reach of my projects and engage with a larger audience.

4. As a user, I want to be able to log in using my Google account, so that I can easily access my game content and track my activity with the tool.

5. As a user, I want to be able to save my generated content as images and CSV files, so that I can easily access and share it in the future.

6. As a user, I want to have a seamless and intuitive experience using the tool, with a user-friendly interface and responsive design.

### Wireframes

<img src="https://user-images.githubusercontent.com/8282076/218234447-b8ac0f86-76fe-4b0d-acac-48eef6504818.png"  width="500">
<img src="https://user-images.githubusercontent.com/8282076/218234798-30309093-5843-44a4-b815-a084848b9ec5.png"  width="500">
<img src="https://user-images.githubusercontent.com/8282076/218234752-d230e24e-48e8-487d-9470-a5d19bf58b22.png"  width="500">
<img src="https://user-images.githubusercontent.com/8282076/218234778-f1ce268d-ea33-4466-bdaf-343b0df4e1c4.png"  width="500">
<img src="https://user-images.githubusercontent.com/8282076/218237646-c6fda58f-1340-43e8-9c28-6bb436db8cf6.png"  width="500">
<img src="https://user-images.githubusercontent.com/8282076/218237904-3e1811cf-0905-4850-8674-e11bfe8115ab.png"  width="500">
<img src="https://user-images.githubusercontent.com/8282076/218237927-f826b609-b2bd-4781-87fc-b7a7d320d459.png"  width="500">

## Planning and Development Process

1. Research and Ideation: Started with researching and gaining knowledge about AI and OpenAI API, and then decided to create a project related to AI. Initial idea was to create a Q&A chatbot using OpenAI API.

2. Implementing OpenAI API: Implemented the OpenAI completions API for simple prompting, with a focus on functionality rather than the user interface.

3. Brainstorming: After the basic chat function was done, brainstormed to add more features and functionalities to the project.

4. Adding new features: Decided to add a text-to-image function, using Stable Diffusion, to generate anime-style profile picture images with text.

5. Wish feature: To provide users with more ways to use the chatbot and stable diffusion, added a "Wish" feature that allows users to generate concepts, imaginative game worlds, game art, and viral content.

6. Getting feedback to iterate.

7. Continued development: Continued developing and improving the project, with a focus on functionality, usability, and user experience.

### Problem-Solving Strategy

- Writing down ideas and drawing mindmaps to visualize 
- ChatGPT, Google, and YouTube Tutorials
- GameGenie -> generated the name idea, images used for the badges & chat log profile pics

### Biggeset Challenges

1. State management architecture
- Which state management method for different situation? 
- Where is most efficient/effective to initialize state?

- useContext - global state
- useState
- useReducer - not tried
- useRedux - not tried

2. Organizing the file structure as the project gets bigger

3. Server on production
- unable to get API calls to work on prod.

4. Leaderboard 
- not sure what data stucture to use, 
- can't get userList from Firebase, 
- will be challenging to map Firebase user data to Firestore activity data.

### Unsolved problems & TODO

- Get the f*** off localhost!!! Deployed `server` to production w Firebase but currently not working.
- Refreshing on `/account` page will break the page
- Getting data of users & their stats to display on `Leaderboard` page, gamification e.g. badges and more
- Upgrade to Next.js for better page/router handling (multi pages with individiual metatitle and meta description)
- Organize file structure, refactor code to DRY
- Material UI, design, and mobile responsiveness
- Explore new features, e.g.:
    - Storyboard feature which combines existing feautres e.g. Storyline+Character+Dream -> to create a story/comic with dialogue and images.
    - Design custom avatar, with 5 separate parts, from text. E.g. crown, jacket, katana, leather pants, cros.
    - Mint avatar pfp images generated as NFT

## Setup
 
### Setting Up Frontend

1. `npx create-react-app client` in app folder to create react client in new folder.

2. `npm start` in `client` folder to run server.

3. `npm i file-saver` to install file-saver package.

4. `npm i react-csv` to install react-csv.

### Setting Up Backend

In the `server` folder:

1. `npm init`

2. `npm install express cors body-parser morgan openai dotenv --save`

3. setting up react router: `npm i react-router react-router-dom`

### Setting up Firebase Auth

1. `npm i firebase`
2. `npm i react-google-button` 

### Setting up Firebase CLI for Deploying Express API

1. `npm i -g firebase-tools` to install firebase tools globally.
2. `firebase init hosting` in the folder for the new API.
3. `cd functions`
4. `npm install express cors`
5. `cd ..`
6. `firebase deploy`

Configuring Server:
7. in `functions` folder, use `npm i dotenv body-parser openai`.
Deployed to: https://ggai-server.web.app/.

### Setup to retrieve all users from Firebase

1. `npm install firebase-admin --save`
https://firebase.google.com/docs/admin/setup#add-sdk

### Deploy frontend to Firebase

Deployed to: https://gamegenieai.web.app/

- [Publish your React app to FREE Firebase Hosting](https://jonathans199.medium.com/publish-your-react-app-to-free-firebase-hosting-c4aa38b84a5e)

## References

### Resources

1. Documentation
- [OpenAI API](https://beta.openai.com/docs/introduction)
- [Huggingface Inference API](https://huggingface.co/docs/api-inference/index)

2. Video tutorials
- [Let's Build ChatGPT 2.0 with React JS and OpenAI on your PC!](https://youtu.be/qwM23_kF4v4)
- [How To Use ChatGPT With JavaScript (NodeJS & Express)](https://youtu.be/UQamG425RD0)

3. Buildspace tutorials
- [Build your own AI writing assistant w/ GPT-3](https://buildspace.so/builds/ai-writer)
- [Build your own AI Avatar generator w/ Stable Diffusion](https://buildspace.so/builds/ai-avatar)

4. Firebase Auth
- [Google Authentication With React JS & Firebase - Sign In With Google - Firebase v9](https://www.youtube.com/watch?v=cZAnibwI9u8)
- [Add Firebase to your JavaScript project](https://firebase.google.com/docs/web/setup)
- [Authenticate Using Google with JavaScript](https://firebase.google.com/docs/auth/web/google-signin)

5. Firebase deploy Express API 
- [Deploy an Express API on Firebase hosting](https://medium.com/boca-code/the-basic-process-is-that-we-will-use-firebase-cloud-functions-to-create-a-single-function-app-13ba3b852077)

6. useContext for global state
- [Beginners Guide to React’s Context API](https://blog.devgenius.io/beginners-guide-to-reacts-context-api-d2fafc89404f)

7. Firebase Firestore for CRUD to Read and Update csv & png download stats:
- [CRUD Tutorial Using React + Firebase | Firebase 9 and Firestore Tutorial](https://youtu.be/jCY6DH8F4oc)
- [Documentation: Create/Add document, get timestamp, auto generate ID](https://firebase.google.com/docs/firestore/manage-data/add-data)
- [Documentation: Read/Get a document](https://firebase.google.com/docs/firestore/query-data/get-data#get_a_document)
- [Documentation: Update document & increment](https://firebase.google.com/docs/firestore/manage-data/add-data#increment_a_numeric_value)

8. Firebase retrieve all users
- [Documentation: List all users](https://firebase.google.com/docs/auth/admin/manage-users#list_all_users)

### TODO

A) TODO: Deploying backend to Vercel 
- https://vercel.com/guides/using-express-with-vercel
- https://shadowsmith.com/how-to-deploy-an-express-api-to-vercel
- https://dev.to/andrewbaisden/how-to-deploy-a-node-express-app-to-vercel-2aa

B) Stretch: Fine-tuning OpenAI models
- https://www.mlq.ai/fine-tuning-gpt-3-question-answer-bot/
- https://github.com/openai/openai-cookbook/blob/main/examples/Question_answering_using_embeddings.ipynb
- https://github.com/openai/openai-cookbook/blob/57024c70cff473fb520105e9aea3ab4e514be0df/examples/fine-tuned_qa/olympics-1-collect-data.ipynb

(i) Preparing Dataset for fine-tuning
- https://www.reddit.com/r/GPT3/comments/10jjbf1/using_davinci003_with_our_docs_for_automated/
- https://www.patterns.app/blog/2022/12/21/finetune-llm-tech-support/

(ii) No-code model builder for fine-tuning
- https://www.reddit.com/r/OpenAI/comments/zpv2fy/why_arent_more_people_creating_custom_openai/
- https://no-code-ai-model-builder.com/custom-models
