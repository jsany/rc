const workerScript = `
var cache = {}
self.onmessage = function(event) {
  var second = event.data.second;
  var id = event.data.id;
  if(!cache[id]){
    cache[id] = function() {
      var T = setInterval(function() {
        // console.log('worker:',id, second)
        self.postMessage({id: id, second: second--});
        if (second <= 0) {
          // console.log('clearInterval');
          clearInterval(T);
          self.close();
        }
      }, 1000)
    }
    cache[id]()
  }
  console.log(cache)
};
`;
const workerScriptBlob = new Blob([workerScript]);
export const workerScriptBlobUrl = window.URL.createObjectURL(workerScriptBlob);

const intanceWorker = new Worker(workerScriptBlobUrl);

export default intanceWorker;
