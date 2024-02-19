# SwagProducts
UI tests automation on Saucedemo website

# Installation
To install the project, follow these steps:

1. Clone the repository: `git clone https://github.com/smithaaparanji/SwagProducts.git`
2. Install dependencies: `npm install cypress --save-dev`

# Running Tests

1. From the root directory , navigate to e2e folder

2. To launch cypress interface - which allows you to select the type of testing, choose which browser to run, select specific test files or spec, run the below command. 

### `npx cypress open`

3. To run all the cypress tests in headless mode and outputs the result to the terminal, run 

### `npx cypress run`



# Folder structure

cypress
├── e2e              # All end to end test spec files
├── fixtures         # static data files
├── pages            # Locators,labels, methods to action on locators,validations and verification methods
├── support          # Custom commands and other supporting files






