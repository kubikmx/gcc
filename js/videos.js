	var overlayShown = false;

	function showOverlay() {
		// Hide video, show poster
		var overlay = document.getElementById("overlayvideo");
		overlay.style.visibility = "visible";
		var videoContainer = document.getElementById("videoContainer");
		videoContainer.style.position = "absolute";
		videoContainer.style.top = "-2000px";
		overlayShown = true;
	}

	function hideOverlay() {
		// Hide poster, show video
		var overlay = document.getElementById("overlayvideo");
		overlay.style.visibility = "hidden";
		var videoContainer = document.getElementById("videoContainer");
		videoContainer.style.position = "relative";
		videoContainer.style.top = "0px";
		overlayShown = false;
	}

	// init
	function loadvideo(){
		var overlayElement = document.getElementById("overlayElement");
		overlayElement.onclick = function(e) {
			var el = e.target;
			$("#overlayElement").css("opacity","0.5");
			window.setTimeout(function() {
				// "Play" button clicked
				if (overlayShown) {
					hideOverlay();
					var videoElement = document.getElementById("video");
					videoElement.play();
				} else {
					showOverlay();
				}
			}, 750);
		};

		var videoElement = document.getElementById("video");
		videoElement.addEventListener('pause', function() {
			// Paused, show poster
			showOverlay();
		});
		videoElement.addEventListener('ended', function() {
			// Ended, try to close fullscreen if possible
			if (typeof videoElement.webkitExitFullscreen !== "undefined") {
				videoElement.webkitExitFullscreen();
			}

		});

		showOverlay();
	}

