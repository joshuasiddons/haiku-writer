# Devlog - Haiku Writer

## 2026-02-23
- set up the project with vite (to set up reactjs frontend)
- i'm using express for the backend, which makes api calls easier
- also using axios in the front-end, which allows for making api calls to server
- had problems with versions / dependencies - npm showing security flaws, but these were for eslint, which won't reach production, so they won't affect the security of the final application
- i resolved this by choosing to leave these vulnerabilities so i could still use axios
- followed this tutorial to set up the project (but will be departing from this soon)
    - https://www.youtube.com/watch?v=mKmxc8TcWQ8

- had some trouble setting up calls to back end - was using proxy in vite settings wrong
    - did manually without proxy, using full url, and it worked fine !

- removed the vast majority of boilerplate code so I could really learn how the app is working
    - i think i will start from scratch without vite for my next project

- been using gemini to research stacks, find out what the file structure is all about, etc.
    - not been using it for code generation since i want to learn!
        - this is one bit that i will need to work on after this project, since I have used a generator (vite) to set most of it up