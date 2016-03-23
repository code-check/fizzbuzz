function fizzbuzz(data) {
  //Solve the challenge here and pass all the tests
  //BEGIN_CHALLENGE
  var result;
  if(data % 15 == 0) { result = "FizzBuzz"; }
  else if(data % 5 == 0) {result = "Buzz"; }
  else if(data %3 ==0 ) {result = "Fizz"; }
  else result = data.toString();
  return result;
  //END_CHALLENGE

}

module.exports = fizzbuzz;
