const NodeMediaServer = require('node-media-server');
 
const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }, 

 relay: {
  ffmpeg: '/usr/bin/ffmpeg',
  tasks: [
            {
                app: 'live',
                mode: 'push',
                edge: 'rtmp://159.223.50.66:1935',
            },

            {
                app: 'live',
                mode: 'push',
                edge: 'rtmp://139.59.249.120:1935',
            }

        ]
   }


};
 
var nms = new NodeMediaServer(config)