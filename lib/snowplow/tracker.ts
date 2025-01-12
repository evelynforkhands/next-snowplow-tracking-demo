import { newTracker } from '@snowplow/node-tracker';

const tracker = newTracker({
    namespace: "blog-tracker", 
    appId: "blog",
    encodeBase64: false, 
  }, {
    endpoint: "http://localhost", 
    port: 9090, // for local dev - to talk to Snowplow Micro
    eventMethod: "post", 
    bufferSize: 1, // only send events once n are buffered
  });


export default tracker;