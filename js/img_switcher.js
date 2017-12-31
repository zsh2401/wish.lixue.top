var imgs = ["a.jpg","b.jpg","c.jpg","d.jpg","e.jpg"];
var img_path = "img/";
var img_id = "header_img";
var currentIndex=1;
var maxIndex=imgs.length; 
function autoSwitch(){
    if(currentIndex >= maxIndex){
        currentIndex = 0;
    }
    setImg(imgs[currentIndex]);
    currentIndex++;
}
function setImg(imgname){
    fileName = img_path + imgname;
    var imgObj = document.getElementById(img_id);
    imgObj.height = document.body.clientWidth;
    imgObj.src=fileName;
}