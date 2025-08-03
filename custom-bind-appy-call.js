Function.prototype.myCall = function (context, ...boundArgs) {
   context.tempFn = this;
   context.tempFn(...boundArgs)
}

Function.prototype.myApply = function (context, ...boundArgs) {
   context.tempFn = this;
   let arguments = boundArgs[0]
   context.tempFn(...arguments)
}

Function.prototype.myBind = function (context, ...boundArgs) {
   context.tempFn = this;
   return function (...args) {
    context.tempFn(...boundArgs,...args)
   }
}   