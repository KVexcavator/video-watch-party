import { screenshareMode } from './app_helpers.js';
 
export default class Screenshare {
  constructor(session, name) {
    this.session = session;
    this.name = name;
    this.watchLink = document.getElementById("watch-mode");
    this.clickStatus = 'on';
  }

  toggle() {
    if (this.name === moderator_env_name) {
      this.shareScreen();
    } else {
      this.subscribe();
    }
  }

  shareScreen() {
    this.setupPublisher();
    this.setupAudioPublisher();
    this.setupClickStatus();
  }

  setupClickStatus() {
    // screen share mode off if clicked off
    // Set click status
    let self = this;
    this.watchLink.addEventListener('click', function(event) {
      event.preventDefault();
      if (self.clickStatus == 'on') {
        self.clickStatus = 'off';
        screenshareMode(self.session, 'off');
      };
    });
  }

  setupAudioPublisher() {
    var self = this;
    var audioPublishOptions = {};
    audioPublishOptions.insertMode = 'append';
    audioPublishOptions.publishVideo = false;
    var audio_publisher = OT.initPublisher('audio', audioPublishOptions,
      function(error) {
        if (error) {
          console.log(error);
        } else {
          self.session.publish(audio_publisher, function(error) {
            if (error) {
              console.log(error);
            }
          });
        };
      }
    );
  }

  setupPublisher() {
    var self = this;
    var publishOptions = {};
    publishOptions.videoSource = 'screen';
    publishOptions.insertMode = 'append';
    publishOptions.height = '100%';
    publishOptions.width = '100%';
    var screen_publisher = OT.initPublisher('screenshare', publishOptions,
      function(error) {
        if (error) {
          console.log(error);
        } else {
          self.session.publish(screen_publisher, function(error) {
            if (error) {
              console.log(error);
            };
          });
        };
      }
    );
  }

  setupClickStatus() {
    // screen share mode off if clicked off
    // Set click status
    let self = this;
    this.watchLink.addEventListener('click', function(event) {
      event.preventDefault();
      if (self.clickStatus == 'on') {
        self.clickStatus = 'off';
        screenshareMode(self.session, 'off');
      };
    });
  }

  setupAudioPublisher() {
    var self = this;
    var audioPublishOptions = {};
    audioPublishOptions.insertMode = 'append';
    audioPublishOptions.publishVideo = false;
    var audio_publisher = OT.initPublisher('audio', audioPublishOptions,
      function(error) {
        if (error) {
          console.log(error);
        } else {
          self.session.publish(audio_publisher, function(error) {
            if (error) {
              console.log(error);
            }
          });
        };
      }
    );
  }

  setupPublisher() {
    var self = this;
    var publishOptions = {};
    publishOptions.videoSource = 'screen';
    publishOptions.insertMode = 'append';
    publishOptions.height = '100%';
    publishOptions.width = '100%';
    var screen_publisher = OT.initPublisher('screenshare', publishOptions,
      function(error) {
        if (error) {
          console.log(error);
        } else {
          self.session.publish(screen_publisher, function(error) {
            if (error) {
              console.log(error);
            };
          });
        };
      }
    );
  }
}
