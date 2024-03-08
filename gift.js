
var to = 'Bạn tớ!';
var gift_url = '';
var gift_image_url = 'https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/431025016_448261690890573_6759796660144100881_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGqQthqz_DBHxlXiJqogY-C_xJde7OBZo7_El17s4Fmjh7RcKuoFsGhVVTo-x_E2oNYUSD7xOJQuYXASRmTqDUl&_nc_ohc=xVdYNeWybVYAX8OFYhm&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAHiLExoSGAeXsMthzUA_HC-VyDsiMVBCehIpe0GwEvSA&oe=65EF1284';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

