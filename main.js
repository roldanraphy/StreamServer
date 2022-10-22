  window.onload = function () {


     function requestAnimationFrame(f){
      setImmediate(()=>f(Date.now()))
    }

	if(!window.requestAnimationFrame) 
    		window.requestAnimationFrame = window.setImmediate;

	var domain = document.location.hostname;

	if (['jcool.live', 'hnhtalpakan.live', 'agtalpakan.live', 'sph88.live', 'wdslasher.live'].includes(domain)) {

		window.location.replace("https://www.youtube.com/embed/BjUn6pu74wc?autoplay=1");

	}

    var istab = false;
    var v_source = "ws://157.245.52.184:8000/live/esportwd2.flv";

    var button = document.getElementById("play");
    var canvas = document.getElementById("video");
    var player = document.getElementById("video-player");


    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    var url = document.getElementById("url");
    var audioCB = document.getElementById("audioCB");


    var np = new Module.NodePlayer();
    var isStarting = false;
    var hasSound = false;

    np.on('start', () => {
      Module.print('NodePlayer on start');
    });
    np.on('close', () => {
      Module.print('NodePlayer on close');
    });
    np.on('error', (err) => {
      Module.print('NodePlayer on error',err);
    });
    np.setPlayView('video');
    np.setScaleMode(1);
    np.enableVideo(1);
    np.enableAudio(0);

    var playback = function (event) {
      if (isStarting) {
        np.stop();
        button.value = "►";
        isStarting = false;
      } else {
        np.start(v_source);
        button.value = "❚❚";
        isStarting = true;
      }
    }

    var audioChange = function (event) {
	
     	if (hasSound) {
		audioCB.value = "🔇";
		np.enableAudio(0);
		hasSound = false;
	} else {
		audioCB.value = "🔊";
		np.enableAudio(1);
		hasSound = true;
	}

    }

    if (button.addEventListener) {
      button.addEventListener("click", playback, false);
    } else if (button.attachEvent) {
      button.attachEvent('onclick', playback);
    }

    if (audioCB.addEventListener) {
      audioCB.addEventListener("click", audioChange, false);
    } else if (audioCB.attachEvent) {
      audioCB.attachEvent('onclick', audioChange);
    }



    np.start(v_source);
    button.value = "❚❚";
    isStarting = true;
    audioCB.value = "🔇";



  };
