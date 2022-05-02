const play_list = [{
    Title: "가나다라마바사",
    Artist: "박재범(feat. IU)",
}]

const Title = document.querySelector("#play_list span:first-child");
const Artist = document.querySelector("#play_list span:last-child");

// 랜덤 0-1 사이 수 반환 Math.random();
const select_music = play_list[Math.floor(Math.random() * play_list.length)]
console.log(select_music);
Title.innerText = `${select_music.Title}`;
Artist.innerText = ` - ${select_music.Artist}`;