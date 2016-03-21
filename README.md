## FizzBuzz

Write a function to implement FizzBuzz Logic.

## Challenge Description
- *Use [FizzBuzz.java](https://github.com/code-check/fizzbuzz/blob/java/src/main/java/FizzBuzz.java) for solving the challenge*
- *See [TestFizzBuzz.java](https://github.com/code-check/fizzbuzz/blob/java/src/test/java/TestFizzBuzz.java) for seeing the tests*
- FizzBuzz Logic,
  - If the number is
    - Divisible by ` 3 `  replace it with ` "Fizz" `
    - Divisible by ` 5 `  replace it with ` "Buzz" `
    - Divisible by ` 15 ` replace it with ` "FizzBuzz" `
    - Not Divisible by ` 3, 5 or 15 ` do not change

### Example

<table>
  <tr>
    <td><b>Input</b></td>
    <td>1</td>
    <td>3</td>
    <td>5</td>
    <td>15</td>
  </tr>
  <tr>
    <td><b>Output</b></td>
    <td>1</td>
    <td>Fizz</td>
    <td>Buzz</td>
    <td>FizzBuzz</td>
  </tr>
</table>

### Test Results *before* solving the challenge
Initially all the tests will fail with following output.

```
[ERROR] COMPILATION ERROR :
[INFO] BUILD FAILURE
FizzBuzz: Compilation failure
codecheck: Finish with code 1
codecheck: tests  : 0
codecheck: success: 0
codecheck: failure: 0
```

### Test Results *after* solving the challenge
Solve the challenge to pass the tests.

 ```
 codecheck: Finish with code 0
 codecheck: tests  : 1
 codecheck: success: 1
 codecheck: failure: 0
 ```

If you have any suggestions or more interesting way of having this challenge please let us know in [answer.md](answer.md) file.

--- --- ---

## Run Tests
### In your local environment
If you are solving the test locally please install codecheck globally by running the following command in terminal.

```
$ npm install codecheck -g
```

Now run `codecheck` command in terminal in the root folder of challenge.

```
$ codecheck
```

### In web editor
If you are solving it on web editor of [codecheck](http://code-check.io/) please click on `Run` button on top-left of web editor terminal.
