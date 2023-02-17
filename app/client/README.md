# Migrating Create-React-App to NextJS



## Setup

1. `npm uninstall react-scripts`
2. `npm install next`
3. Add to `package.json`:
```
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
},
```

4. Create `pages` folder in root directory with `index.js` inside.

5. `npm run dev` to run application.

### Migrating from React Router

6. `npm uninstall react-router-dom`

References:
- https://www.geeksforgeeks.org/how-to-migrate-from-create-react-app-to-next-js/
- https://nextjs.org/docs/migrating/from-create-react-app
