window.F = function(context, f) {
  var args = Array.prototype.slice.call(arguments, 2),
      toCall = (typeof f == "string" ? context[f] : f);

  var full = function() {
    return F.apply(toCall, context, args);
  };

  var partial = function() {
    var additionalArgs = Array.prototype.slice.call(arguments, 0);
    return F.apply(toCall, context, args.concat(additionalArgs));
  };

  full.partial = partial;

  return full;
};

F.K = function(context, f) {
  f.apply(context);
  return context;
};

F.partial = function() {
  return F.apply(null, arguments).partial;
};

F.apply = function(f, context, args) {
  return f.apply(context, args);
};

