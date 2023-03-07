import _default from '../../node_modules/@vimeo/player';
    // If you want to control the embeds, you’ll need to create a Player object.
    // You can pass either the `<div>` or the `<iframe>` created inside the div.
    const handstickPlayer = new Vimeo.Player('handstick');
    handstickPlayer.on('play', function() {
        console.log('played the handstick video!');
    });

    const playerTwoPlayer = new Vimeo.Player('playertwo');
    playerTwoPlayer.on('play', function() {
        console.log('played the player 2.0 video!');
    });
    player.pause().then(function() {
      // the video was paused
  }).catch(function(error) {
      switch (error.name) {
          case 'PasswordError':
              // the video is password-protected and the viewer needs to enter the
              // password first
              break;
  
          case 'PrivacyError':
              // the video is private
              break;
  
          default:
              // some other error occurred
              break;
      }
  });