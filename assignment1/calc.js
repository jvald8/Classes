module.exports = function(a,b){
  return {add: function() {
            return a + b},
         subtract: function() {
            return a - b},
         multiply: function() {
            return a * b},
         divide: function() {
            return a / b}
  };
};
