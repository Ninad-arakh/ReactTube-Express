const code = "US";
const keyword = "deathNote";

 const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=${code}&key=${process.env.API_NEW}`;

 const YOUTUBE_SUGGESTION_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=
`;

const YOUTUBE_SEARCH_CHANNEL_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${keyword}&type=video&key=${process.env.API_NEW}`;

module.exports = {
    YOUTUBE_VIDEO_API ,
    YOUTUBE_SUGGESTION_API,
    YOUTUBE_SEARCH_CHANNEL_API
}