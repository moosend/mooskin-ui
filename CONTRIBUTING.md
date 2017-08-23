# Contributing 

We welcome community support with both pull requests and reporting bugs. Please don't hesitate to jump in. Thank you for helping us make this project great and being a part of the Mooskin-UI, so here are a few guidelines that will help you along the way.

### Structure

Mooskin uses a specific structure, for a more organized code. Components, for example, are structured this way:

```
Components
├── Button
|   ├── Button.css                 // Styles related to that component
|   ├── Button.spec.tsx            // Tests for the component
|   ├── Button.tsx                 // The React Component
|   ├── index.ts                   // An index exporting file
|   └── README.md                  // Docs related to the component
├── Input
|   ├── index.ts
|   ├── Input.css
|   ├── Input.spec.tsx
|   ├── Input.tsx
|   └── README.md
└── Radio
    ├── index.ts
    ├── Radio.css
    ├── Radio.spec.tsx
    ├── Radio.tsx
    └── README.md
```

There's also the playground, which is used to demonstrate components, and a newly added feature to the Playground which is the Live Editor for library components. It uses the following structure

```
Playground
├── examples
|   ├── Button.example.txt                 // class where Button component is used
|   ├── Input.example.txt
|   └── Radio.example.txt
├── App.tsx                                // Import the example in the App and you're good to go
├── index.html
└── playground.tsx
```

Let's take the Button component for example. If we want to display the component to the Playground using the ReactLiveEditor, first create a .txt file inside the `examples` folder. In this file, create the react class that you want to display in ES2015, pls do not use imports or exports here as it is just a txt file that our Live Editor component needs to render the component, the dependencies that you would otherwise import you need to provide in App.tsx (see other examples). Also you can look at how the other components have their examples. We're done here.

The component should now appear on the Playground, with an `Edit Code` above it.

### Issues

If you think you have found a bug, or have a new feature idea, please start by making sure it hasn't already been. You can search through existing issues and PRs to see if someone has reported one similar to yours.

Next, create a new issue that briefly explains the problem, and provides a bit of background as to the circumstances that triggered it, and steps to reproduce it.

For code issues please include:
* Mooskin version
* React version
* Browser version
* A code example or link to a repo, gist or running site.

### Pull Request

Pull requests are always welcome, but before working on a large change, it is best to open an issue first to discuss it with the maintainers.

When in doubt, keep your pull requests small. To give a PR the best chance of getting accepted, don't bundle more than one feature or bug fix per pull request. It's always best to create two smaller PRs than one big one.

### Getting started

Please create a new branch from an up to date `develop` branch on your fork. (Note, urgent hotfixes should be branched off the latest stable release rather than `develop`)

1. Fork the Mooskin repository on Github
2. Clone your fork to your local machine `git clone git@github.com:<yourname>/mooskin-ui.git`
3. Create an upstream remote and sync your local copy before you branch. `git remote add upstream git@github.com:moosend/mooskin-ui.git`
4. Create a branch `git checkout -b my-topic-branch`
5. Make your changes, lint, then push to github with `git push origin my-topic-branch`.
6. Visit github and make your pull request.

### Coding style

Please follow the coding style of the current code base. Mooskin uses tslint, so if possible, enable linting in your editor to get realtime feedback.

Finally, when you submit a pull request, linting is run again by Continuous Integration testing, but hopefully by then your code is already clean!

## License

By contributing your code to the moosend/mooskin-ui GitHub repository, you agree to license your contribution under the MIT license