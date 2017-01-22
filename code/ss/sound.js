function Sound() {
  if (arguments.callee._singeltonInstance) {
    return arguments.callee._singeltonInstance;
  }

  arguments.callee._singeltonInstance = this;

  this.soundDir = "sound/";

  this.sounds = {
                   "Theme": this.soundDir + "whale_force_theme_final.ogg",
                   "Flow": this.soundDir + "flow.ogg",
                   "Flex": this.soundDir + "flex.ogg",
                   "Floyd": this.soundDir + "floyd.ogg",
                 }

  this.soundEffects = {
                        "Flow-Death": this.soundDir + "flow_death.ogg",
                        "Flex-Death": this.soundDir + "flex_death.ogg",
                        "Floyd-Death": this.soundDir + "floyd_death.ogg",
                        "Drowning": this.soundDir + "drowning.ogg",
                        "Whale-Cry": this.soundDir + "whale_cry.ogg",
                        "Ladder": this.soundDir + "ladders.ogg",
                      }

  this.bgSound = new Audio();
  this.sound = new Audio();

  this.flowSound = new Audio(this.sounds["Flow"]);
  this.flexSound = new Audio(this.sounds["Flex"]);
  this.floydSound = new Audio(this.sounds["Floyd"]);

  this.playerSoundInit = false;
  this.playerSoundVolume = 0.7; //range of 0 - 1.0
}

Sound.prototype.displayControls = function(id) {
  controls = document.getElementById(id);

  mute = document.createElement("button");
  mute.setAttribute("data-mute","false");
  muteText = document.createTextNode("mute");
  mute.appendChild(muteText);

  mute.addEventListener("click", function() {
    if ( mute.getAttribute("data-mute") == "false") {
      sound.muteAll();
      mute.textContent = "unmute";
      mute.setAttribute("data-mute", "true");
    } else {
      sound.unmuteAll();
      mute.textContent = "mute";
      mute.setAttribute("data-mute", "false");
    }

  }, false)

  controls.appendChild(mute);
};

Sound.prototype.playBgSound = function (name) {
  this.bgSound.src = this.sounds[name];
  this.bgSound.play();
  this.bgSound.addEventListener('ended', function() {
    this.play();
  }, false);
};

Sound.prototype.initPlayerSound = function () {
  if ( !this.playerSoundInit ) {
    this.flowSound.loop = true;
    this.flowSound.play();
    this.flowSound.volume = this.playerSoundVolume;

    this.flexSound.loop = true;
    this.flexSound.play();
    this.flexSound.volume = 0;

    this.floydSound.loop = true;
    this.floydSound.play();
    this.floydSound.volume = 0;

    this.playerSoundInit = true;
  }
};

Sound.prototype.playerSwitch = function (playerName) {
  if ( !this.playerSoundInit ) {
    this.initPlayerSound();
  }

  if ("Flow" == playerName) {
      this.flowSound.volume = this.playerSoundVolume;
      this.flexSound.volume = 0;
      this.floydSound.volume = 0;
  } else if ("Flex" == playerName) {
      this.flowSound.volume = 0;
      this.flexSound.volume = this.playerSoundVolume;
      this.floydSound.volume = 0;
  } else if ("Floyd" == playerName) {
      this.flowSound.volume = 0;
      this.flexSound.volume = 0;
      this.floydSound.volume = this.playerSoundVolume;
  } else {
    console.log("ERROR: Unknown Player Name");
  }
};

Sound.prototype.triggerSound = function (soundName) {
  if ("Drowning" == soundName || "Whale-Cry" == soundName ) {
    this.sound.muteAll();
    this.sound.src = this.soundEffects[soundName];
    this.sound.play();
    this.sound.unmuteAll();
  }
};

Sound.prototype.triggerPlayerSound = function (playerName, soundName) {
  if ("Flow-Death" == soundName || "Flex-Death" == soundName || "Floyd-Death" == soundName) {
    this.muteAll();
    this.sound.muted = false;

    if ("Flow" == playerName) {
      this.sound.src = this.soundEffects[soundName];
      this.sound.play();
    } else if ("Flex" == playerName) {
      this.sound.src = this.soundEffects[soundName];
      this.sound.play();
    } else if ("Floyd" == playerName) {
      this.sound.src = this.soundEffects[soundName];
      this.sound.play();
    } else {
      console.log("ERROR: Wrong player name: " + playerName);
    }

    this.sound.play();

    this.sound.addEventListener('ended', function() {
      sound.unmuteAll();

      //remove this event listener again
      this.removeEventListener('ended', arguments.callee);
    }, false);

  } else {
    console.log("ERROR: Wrong sound name: " + soundName);
  }
};

Sound.prototype.muteAll = function () {
  this.bgSound.muted = true;
  this.flexSound.muted = true;
  this.flowSound.muted = true;
  this.floydSound.muted = true;
  this.sound.muted = true;
};

Sound.prototype.unmuteAll = function () {
  this.bgSound.muted = false;
  this.flexSound.muted = false;
  this.flowSound.muted = false;
  this.floydSound.muted = false;
  this.sound.muted = false;
};

