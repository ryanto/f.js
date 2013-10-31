window.F = function(context, f) {
  var args = Array.prototype.slice.call(arguments, 2),
      toCall = (typeof f == "string" ? context[f] : f);

  var full = function() {
    return toCall.apply(context, args);
  };

  var partial = function() {
    var additionalArgs = Array.prototype.slice.call(arguments, 0);
    return toCall.apply(context, args.concat(additionalArgs));
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
