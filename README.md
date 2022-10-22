# FinGenie

**Demo Release**

This is an Electron application derived from the [Quick Start Guide](https://electronjs.org/docs/latest/tutorial/quick-start) within the Electron documentation.

FinGenie is a project mockup for an investing system. It aims to automatically use manually alloted portions 
of user funds pulled from paypal or similar services and invest them into safe stocks or currencies in an 
effort to give users financial assistance and peace of mind. 

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - Some web page to render. This is the app's **renderer process**.
- `preload.js` - A content script that runs before the renderer process loads.

You can learn more about each of these components in depth within the [Tutorial](https://electronjs.org/docs/latest/tutorial/tutorial-prerequisites).

## To help

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. 
From your command line:

```bash
# Clone this repository
git clone https://github.com/Alex-z01/Hackathon2022.git
# Go into the repository
cd Hackathon2022
# Install dependencies (MUST)
npm install
# Run the app
npm start

# If you'd like to build the project 
npm run make
# You can then find it in the out directory
```

## Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [Electron Fiddle](https://electronjs.org/fiddle) - Electron Fiddle, an app to test small Electron experiments

## License

[MIT](LICENSE.md)
