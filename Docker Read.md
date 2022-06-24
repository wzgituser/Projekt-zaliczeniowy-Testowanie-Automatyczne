Tests are made in the virtual container Docker with included/cypress9.7.0 image.To set test in docker,is needed "e2e" folder in the path similar to package.json , cypress.json and Docker in the run mode 
Command to run test from command line is   docker run -it -v ${PWD}:/e2e -w /e2e cypress/included:9.7.0
