var Calculator = {
 average: function() {
   var sum = 0;
   if (arguments.length === 0) { return 0; };
   for (key in arguments) {
     sum += arguments[key];
   }
   return sum / arguments.length;
 }
};
