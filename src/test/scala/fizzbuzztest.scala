import org.scalatest._
import FizzBuzz._

class TestFizzBuzzSpec extends FlatSpec with Matchers {

  "fizzBuzz" should " return corresponding 'FizzBuzz'values for number passed" in {

    for (i <- 1 to 100) {
      var data = ""
      i match {
        case i if i % 15 == 0 => data = "FizzBuzz"
        case i if i % 5  == 0 => data = "Buzz"
        case i if i % 3  == 0 => data = "Fizz"
        case _                => data = i.toString
      }
      assert(fizzBuzz(i) === data)     
    }
  } 
}
