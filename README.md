# test my Project
## in this project I will test my project (index.js)
> I used mocha to do the job

###todos:
1. import the mocha and my index.js this will allow access methods for testing
2. write a describe block for Rooster (is in my index.js)
3. I have a nasted describe to .announceDawn (Rooter method)
4. check if return a rooster call - "cock-a-doodle-doo" (change it if you want to see an error)
5. I use the asser function with the four fases (I use three to DRY) of a test:
>setup - define the expected result
>exercise - call the function under test
>verify - use assert
>teardown(optional)
6. I write a second block for .timeAtDawn
7. test if returns its argument as a string
8. test if the .timeAtDawn throws an error if its argument is not a valid hour less than 0 or bigger than 24
