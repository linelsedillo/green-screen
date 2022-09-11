let url = "https://gsa.sfo3.digitaloceanspaces.com/watermarked_videos/"
let video;
function Video(url,title,name,desc,category, tags, format,save) {
    this.url = url,
    this.title = title,
    this.name = name,
    this.desc = desc,
    this.category = category,
    this.tags = tags,
    this.format = format,
    this.save = save

    this.getVideo = ()=>{
        return this.url+this.name+this.format
    }
}

$.get({
    'async': false,
    url: "https://greenscreenactors.com/api/video_details.php", 
    data: {
        account_id: 0,
        clip_id: 95
    },
}, function(data, status){
    let obj = JSON.parse(data)
    video = obj.response_body
});

let account_0 = new Video(
    url,
    video[0].clip_title,
    video[0].clip_public_filename,
    video[0].clip_description,
    new Array(video[0].clip_category),
    video[0].tags,
    ".mov",
    video[0].is_saved,
    );

function displayVideo() {    
    let title = document.getElementById("title-txt")    
    let embed = document.getElementById("vid");
    let desc = document.getElementById("desc-txt");
    let catg = document.getElementById("cat");
    let tags = document.getElementById("tags");

    title.innerHTML = account_0.title.replace(/_/g, " ");
    title.style.textTransform = "capitalize";
    desc.innerHTML = account_0.desc;
    embed.src = account_0.getVideo();
    account_0.tags.map(tag=>{
        let span = document.createElement("span");

        span.innerHTML = tag;
        tags.appendChild(span)
        
    });
    account_0.category.map(cat=>{
        let span = document.createElement("span");
        span.style.textTransform = "lowercase";
        span.innerHTML = cat
        catg.appendChild(span);                
    })

}

displayVideo()

// let embed = document.getElementById("vid")
// embed.src = newVid.getVideo()

// function requestData() {
//     return $.get({
//     url: "https://greenscreenactors.com/api/video_details.php", 
//     data: {
//         account_id: 0,
//         clip_id: 95
//     },
//     }, function(data, status){
//         let obj = JSON.parse(data)

//         return obj.response_body
//     });
// }

// function testAjax() {
//     return $.ajax({
//         url: "https://greenscreenactors.com/api/video_details.php", 
//         data: {
//             account_id: 0,
//             clip_id: 95
//         }
//     });
// };

// function displayData(x) {
//     x.success(function(realData) {
//         console.log(realData)
//     });
// }