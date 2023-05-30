# NakedJSX Documentation.

This is the source project for the [NakedJSX website](https://nakedjsx.org).

NakedJSX is used to build this project. It requires the documentation submodule, which means you need to clone it recursively:

`git clone --recurse-submodules https://github.com/NakedJSX/nakedjsx.github.io.git`

To build into ./dist:

`$ npx nakedjsx <path to nakedjsx.github.io>/src --out ./dist`

Or to build into ./dev and launch a development server:

`$ npx nakedjsx <path to nakedjsx.github.io>/src --out ./dev --dev`