function asyncFunction (resolveAfter) {
  return new Promise ((resolve, reject) => {
    setTimeout (() => {
      resolve ('I am called asynchronously');
      reject ('There is an error');
    }, resolveAfter);
  });
}
// Log after 3 seconds
asyncFunction (3000)
  .then (response => console.log (response))
  .catch (err => console.log (err));

// Log after 6 seconds
asyncFunction (6000).then (console.log).catch (console.log);
