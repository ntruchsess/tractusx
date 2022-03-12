# Catena-X Portal

Frontend web application for Catena-X. Development instances:

- Protoype: https://catenax-dev003-app-portal-2.azurewebsites.net/
- Storybook: https://catenax-dev003-app-portal-2.azurewebsites.net/storybook/


steps

    # install dependencies
    yarn

    # run on your local machine http://localhost:3000/
    yarn start

    # check UI components http://localhost:6006/
    yarn storybook

    # unit tests
    yarn test

    # linter
    yarn lint --fix

    # formatter
    yarn pretty


known TODO's

    - set up a uniform redux store pattern
    - proper error handling
    - write missing unit tests
    - convert Javascript files to TypeScript
    - define types that are given as any
    - some files are formatted differently by prettier and eslint --fix