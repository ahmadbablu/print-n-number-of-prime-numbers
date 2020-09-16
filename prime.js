
//create a function and pass parameter to that function to print n number of prime numbers;
function Printprime(range) {
    // create a for loop to print first n numbers(that is the range you want) 
    //  initialize i variable with value of 2 so the prime numbers start from 2
    for (i = 2; i <= range; i++) {
        //initialize a flag variable and set its value to true
        let flag = true;
        //create another for loop to check the printed n numbers are is prime or not;
        //initialize  for loop with j variable and set its value 2 as of we know prime numbers 
        //starts with 2
        for (j = 2; j < i; j++) {
            // check the printed number can give us reminder 0 when we devide with j;
            if (i % j == 0) {
                // if the condition becomes true,then the number is not prime number
                //set the flag value false;
                flag = false;
                // after executing the condition there is no need to run the inner loop
                //simply break the loop;
                break;
            }
        }
        // if the inner loop doesnt return reminder 0 when it is devided
        // then that number is prime number 
        if (flag) console.log(i);
    }
    
    
}

Printprime(30);