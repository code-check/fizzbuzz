import spock.lang.Specification
import spock.lang.Unroll

class Test1Spec extends Specification {

  @Unroll
  def "fizzBuzz(#n) == resultdata[#n]"() {
    setup:
    def fizzbuzz = new FizzBuzz()
    
    String[] resultdata = new String[100]
    for (i in 1..100) {
      if(i % 15 == 0) resultdata[i-1] =  "FizzBuzz"
      else if(i % 5 == 0) resultdata[i-1] = "Buzz"
      else if(i % 3 == 0) resultdata[i-1] = "Fizz"
      else resultdata[i-1] = i
    }

    expect:
    for (n in 1..100) {
      assert fizzbuzz.fizzBuzz(n) == resultdata[n-1]
    }
  }
}