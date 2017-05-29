#Contributing

If you're reading this, welcome! Thank you for helping us make this project great and being a part of the Mooskin-UI community. Here are a few guidelines that will help you along the way.

###Submitting a Pull Request

Mooskin-ui is an open-source project, so pull requests are always welcome, but before working on a large change, it is best to open an issue first to discuss it with the maintainers.

When in doubt, keep your pull requests small. To give a PR the best chance of getting accepted, don't bundle more than one feature or bug fix per pull request. It's always best to create two smaller PRs than one big one.

As with issues, please begin the title with [ComponentName].

When adding new features or modifying existing code, please attempt to include tests to confirm the new behaviour.

###Getting started

Please create a new branch from an up to date develop branch on your fork. (Note, urgent hotfixes should be branched off the latest stable release rather than develop)

    1. Fork the Mooskin-UI repository on Github
    2. Clone your fork to your local machine `git clone git@github.com:<yourname>/mooskin-ui.git`.
    3. If it's a new feature that you're building move to the develop branch `git checkout develop`. For hotfixes use the master branch `git checkout master`.
    4. Create a new feature `git branch feature/<feature name>` and move to the feature `git branch feature/<feature name>`.
    5. Commit and push changes to your forked repository.
    6. Visit GitHub and create a Pull Request to the moosend/mooskin-ui repository. Keep in mind, if the feature originates from the develop branch, the PR must target that specific branch of the moosend/mooskin-ui.

####Component structure

Mooskin Components are organized within the Components folder. Each Component has its own folder and within each folder there are files related to that Component.

```
src
├── Components
|   ├── Button
|   |   ├── Button.css
|   |   ├── Button.spec.tsx
|   |   ├── Button.tsx
|   |   └── README.md
|   ├── Your-Component
|   |   ├── Your-Component.css
|   |   ├── Your-Component.spec.tsx
|   |   ├── Your-Component.tsx
|   |   └── README.md
|   └── Input

```

In the `.tsx` file there is the actual Component implementation. The `.css` file is all about styling related to that specific Component. And in the `.spec.tsx` file belong all tests related to that Component.


####Coding style

Please follow the coding style of the current code base. MooSkin-UI uses tslint, so if possible, enable TypeScript linting in your editor to get realtime feedback.

Finally, when you submit a pull request, linting is run again by Travis CI testing, but hopefully by then your code is already clean!

###License

By contributing your code to the moosend/mooskin-ui GitHub repository, you agree to license your contribution under the MIT license.