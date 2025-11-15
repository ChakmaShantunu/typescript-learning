// oop -- abstraction

// interface MediaPlayer {
//     play(): void;
//     pause(): void;
//     stop(): void;
// }



// class MusicPlayer implements MediaPlayer {
//     play() {
//         console.log('Playing Music');
//     }
//     pause() {
//         console.log('Paused Music');
//     }
//     stop() {
//         console.log('Stopped Music');
//     }
// }

// const ShantunuPlayer = new MusicPlayer()
// ShantunuPlayer.play();
// ShantunuPlayer.pause();
// ShantunuPlayer.stop();

abstract class MediaPlayer {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}

class ShantunuPlayer extends MediaPlayer {
    play(): void {
        console.log(`Playing Music`);
    }
    pause(): void {
        console.log(`Music is Paused`);
    }
    stop(): void {
        console.log(`Music is stopped`);
    }
}

const shantunuPlayer1 = new ShantunuPlayer()
shantunuPlayer1.play();
