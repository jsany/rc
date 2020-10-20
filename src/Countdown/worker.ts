const workerScript = `
var cache = {}
self.addEventListener('message', function(event) {
  var id = event.data.id;
  if(!cache[id]){
    cache[id] = function() {
      var second = event.data.second;
      var T = setInterval(function() {
        // console.log('worker:',id, second)
        self.postMessage({id: id, second: --second});
        if (second < 0) {
          // console.log('clearInterval');
          clearInterval(T);
        }
      }, 1000)
    }
    cache[id]()
  }
  // console.log(cache)
});
`;
const workerScriptBlob = new Blob([workerScript]);
export const workerScriptBlobUrl = window.URL.createObjectURL(workerScriptBlob);

const intanceWorker = new Worker(workerScriptBlobUrl);

export default intanceWorker;
