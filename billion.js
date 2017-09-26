//0.01 first day, then double until 30th day
//How much is the reward after 30 days?
//function ForAFewBillion(amount)
    var amount = 0.01;
    var mon = 0;
    for(var day = 1; day <=30; day++)
    {
        amount = amount*2;
    }
    console.log((amount-0.01))
