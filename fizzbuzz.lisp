(defun fizzbuzz (n) 
#| BEGIN_CHALLENGE |#
  (cond 
    ((and (= 0 (mod n 3)) (= 0 (mod n 5))) "FizzBuzz")
    ((= 0 (mod n 5)) "Buzz")
    ((= 0 (mod n 3)) "Fizz")
    (T n)
  )
#| END_CHALLENGE |#
)