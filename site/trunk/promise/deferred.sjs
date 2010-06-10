// ----Deferreds for Acre----

// Deferreds encapsulate asynchronous operations by notifying users of
// the result of operations, and providing pipelined chaining of callbacks.

// Based on the CommonJS spec for promises:
// http://wiki.commonjs.org/wiki/Promises

// Inspired by implementations for node and dojo:
// http://github.com/kriszyp/node-promise
// http://bugs.dojotoolkit.org/browser/tags/release-1.5.0rc1/dojo/_base/Deferred.js

// Written by Bryan Culbertson
// BSD Licensed - http://creativecommons.org/licenses/BSD/

acre.require("es5");

// Exports
var Deferred;
var unresolved, resolved, rejected;
var when;
var makePromise, maybePromise;
var all, any;
var RequestCanceled, RequestTimeout;

(function() {
  
  // --- Possible Errors for Deferreds ---
  
  // Used to signal that a deferred has been canceled
  RequestCanceled = function(message) {
    this.message = message;
  };
  RequestCanceled.prototype = new Error();
  
  // Used to signal that a deferred has timed out
  RequestTimeout = function(message) {
    this.message = message;
  };
  RequestTimeout.prototype = new Error();
  
  // --- Deferred Implementation ---
  Deferred = function() {
    var result, finished;
    var waiting = [];
    var promise = this.promise = {};
    
    // Complete can only be called once for each deferred
    //  it records the result and notifies all the listeners
    function complete(value) {
      if (finished) {
        throw new Error("This deferred has already been resolved");
      }
      result = value;
      finished = true;
      waiting.forEach(function(listener) {
        notify(listener);
      });
    }
    
    // Calls the listener's errback or callback depending on the 
    //  current result. It will resolve returned promises before
    //  passing them on. If this listener doesn't handle this type of 
    //  result then it passes it along.
    function notify(listener) {
      // Determine which callback to call based on whether
      //   we in error or not
      var func = (result instanceof Error ? listener.error : listener.resolved);
      if (func) {
          try {
            // Pass along the result down the chain
            // If its a deferred then resolve it first
            when(func(result), function(new_result) {
              listener.deferred.resolve(new_result)
            }, function(new_error) {
              listener.deferred.reject(new_error)
            });
          } catch(e) {
            // If the callback errored then pass that error down the chain
            listener.deferred.reject(e);
          }
      
      } else {
        // This promise doesn't handle this type of result so pass it along
        if (result instanceof Error) {
          listener.deferred.reject(result);
        } else {
          listener.deferred.resolve(result);
        }
      }
    }
    
    // A deferred can be completed by either resolving, or rejecting it
    //  based on success or error.
    
    // Calling resolve will put the deferred in a success state
    var resolve = this.resolve = function(value) {
      complete(value);
      return promise;
    };
    
    // Calling reject will put the deferred in a failure state
    //  by coercing the value into an error
    var reject = this.reject = function(error) {
      if (!(error instanceof Error)) {
          // Turn it into an error
          error = new Error(""+error);
      }
      complete(error);
      console.warn(error.toString(), error);
      return promise;
    };
    
    // Adds a new success and/or failure listener to this deferred.
    // All of these listeners will be called when the deferred 
    //   is resolved or rejected.
    var then = this.then = promise.then = function(callback, errback) {
      var return_deferred = new Deferred();
      var listener = {
        resolved: callback,
        error: errback,
        deferred: return_deferred
      }; 
      
      if (finished) {
        notify(listener);
      } else {
        waiting.push(listener);
      }
      return return_deferred.promise;
    };
    
    // Cancels an uncompleted deferred by rejecting it with a canceled error.
    //  This just cancels the callback chain, if the deferred creator wants to
    //  cancel the request as well then they should attach an errback to 
    //  catch RequestCanceled errors
    var cancel = this.cancel = function(reason) {
      // Cancels the asynchronous operation
      if (!finished){
        reject(new RequestCanceled(reason));
      }
    }
    
  }
  
  // Convenience function to return an unresolved deferred
  unresolved = function() {
    return new Deferred();
  }
  
  // Convenience function to return a resolved promise
  resolved = function(value) {
    return unresolved().resolve(value);
  }
  
  // Convenience function to return a rejected promise
  rejected = function(error) {
    return unresolved().reject(error);
  }
  
  // Determines whether a value is a promise by checking
  //  for a .then method
  function is_promise(value) {
    return value && typeof value.then === "function";
  }
  
  // Call either the async or sync function depending on
  //  whether value is a promise or not, returns a 
  //  promise for when its fulfilled
  function perform(value, async, sync){
    try {
      if (is_promise(value)) {
        value = async(value);
      } else {
        value = sync(value);
      }
      
      if (is_promise(value)) {
        return value;
      }
      
      return resolved(value).promise;
    } catch(e) {
      return rejected(e).promise;
    }
  }
  
  // Returns a promise with callback and errback already
  //   set on the promise
  whenPromise = function(value, callback, errback) {
    return perform(value, 
      function(value) {
        return value.then(callback, errback);
      },
      function(value) {
        return callback(value);
      }
    );
  };
  
  // Takes any value and calls either the callback 
  //   or the errback depending on the value
  when = function(value, callback, errback) {
    if (is_promise(value)){
      return whenPromise(value, callback, errback);
    }
    
    if (value instanceof Error) {
      return errback(value);
    } else {
      return callback(value);
    }
  };
  
  // Takes an array or dict of promises and returns a promise that 
  //   is fulfilled when all of those promises have been fulfilled
  all = function(promises) {
    var deferred = unresolved();
    
    var fulfilled = 0;
    var length = Object.size(promises);
    var results;
    if (promises instanceof Array) {
      results = [];
    } else {
      results = {};
    }
    
    if (length === 0) {
      deferred.resolve(results)
    } else {
      for (var key in promises) {
        (function() {
          var k = key;
          var handle_promise = function(value){
            results[k] = value;
            fulfilled++;
            if (fulfilled === length){
              deferred.resolve(results);
            }
          }
          when(promises[k], handle_promise, handle_promise);
        })()
      }
    }
    return deferred.promise;
  };
  
  // Takes an array or dict of promises and returns a promise that 
  //   is fulfilled when the first of those promises have been fulfilled
  any = function(promises){
    var deferred = unresolved();
    var fulfilled;
    for (var key in promises) {
      when(promises[key], function(value){
        if (!fulfilled) {
          fulfilled = true;
          deferred.resolve(value);
        }
      },
      function(error) {
        if (!fulfilled) {
          fulfilled = true;
          deferred.resolve(error);
        }
      });
    }
    return deferred.promise;
  };
  
  //  Return a promise whether func returns a promise or not
  maybePromise = function(func, args) {
    var value = func.apply(this, args);
    if (is_promise(value)) {
      return value;
    } else {
      return resolved(result);
    }
  };

  //  Make a deferred from an async function with callback and/or errback args
  //    - func = function reference
  //    - callback_pos = number or dict with callback postiion in func signature
  //      - position = array position in arguments
  //      - key = key if argument is an object
  //    - errback_pos = same as callback_pos, but for errback
  makePromise = function(func, callback_pos, errback_pos) {
    
    function _normalize_pos(pos) {
      switch (typeof pos) {
        case "undefined" :
          return { position: null, key: null };
        case "number" : 
          return { position: pos, key: null };
        case "object" :
          if (pos.position && typeof pos.position !== "number") {
            throw "Callback 'position' property must be a number";
          }
          return pos;
        default :
          throw "Unrecognized type for callback position -- must be a number or object with 'position' and/or 'key' values";
      }
    }
    
    function _place_callback(args, pos, func) {
      if (!pos.position) {
        return args;
      }
      
      if(!pos.key) {
        args[pos.position] = func;
        return args;
      }
      
      if (typeof args[pos.position] !== "object") {
        args[pos.position] = {};
      }
      
      args[pos.position][pos.key] = func;
      return args;
    }
    
    return function() {
      var d = unresolved();
      
      args = Array.prototype.slice.call(arguments);
      _place_callback(args, _normalize_pos(callback_pos), function(res) {
          d.resolve(res);
      });
      _place_callback(args, _normalize_pos(errback_pos), function(e) {
          d.reject(e);
      });
      
      try {
        func.apply(null, args);
      } catch(e) {
        d.reject(e);
      }
      return d.promise;
    }
  }
  
})();