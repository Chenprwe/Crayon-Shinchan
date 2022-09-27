const $mouth = $('.mouth');
const $sound = $('#sound').get(0);

$mouth.on('click', () => {
  $sound.play();
})
