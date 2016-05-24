(defun fizzbuzz (n) 
  (cond 
    ((and (= 0 (mod n 3)) (= 0 (mod n 5))) "FizzBuzz")
    ((= 0 (mod n 5)) "Buzz")
    ((= 0 (mod n 3)) "Fizz")
    (1 n)
  )
)