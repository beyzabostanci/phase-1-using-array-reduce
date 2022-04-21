const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce( function(first, current){
return  first + current;
  }, 0);




/*reminder for myself:
.reduce() executes the callback for each element in turn,
 passing in the current value of the accumulator and the current element each time.
 if no initial value is supplied,the first element in the array is used as the starting value.
  The callback is where we'll push*/