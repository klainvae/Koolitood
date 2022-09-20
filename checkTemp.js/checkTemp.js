function checkTemp(temp) {
    if (temp <= 20)
    {return -1}
   else if (temp > 20 && temp < 41)
    {return 0}
   else if (temp > 40)
    {return 1}
}
console.log(checkTemp(23))