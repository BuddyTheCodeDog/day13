function createAndPlayAudioElement(){
    const audioElement = document.createElement('audio');
    const audioContainer = document.getElementById('audio-container');
    
    // Set the src attribute of the audio element to the URL of the MP3 file
    audioElement.src = 'https://cdn.pixabay.com/download/audio/2021/04/07/audio_8ed06844ef.mp3?filename=nightlife-michael-kobrin-95bpm-3783.mp3';
    
    // Set the controls attribute of the audio element to true
    audioElement.controls = true;
    // audioElement.autoplay = true;
    // audioElement.loop = true;
    
    // Append the audio element to the body of the page
    audioContainer.appendChild(audioElement);

}

module.exports = createAndPlayAudioElement