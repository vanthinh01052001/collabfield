document.addEventListener('turbo:load', function() {
    if (document.querySelectorAll(".single-post-card").length) {
        // set a solid background color style
        if (mode == 1) {  
            document.querySelectorAll(".single-post-card").forEach(function(card) {
                card.classList.add("solid-color-mode");
                card.style.backgroundColor = randomColor();
            });
        }
        // set a border color style
        else {
            document.querySelectorAll(".single-post-card").forEach(function(card) {
                card.classList.add("border-color-mode");
                card.style.border = '5px solid ' + randomColor();
            });
        }
    }
    
    // Bắt đầu thay đổi xử lý hover
    const feed = document.getElementById('feed');
    feed.addEventListener('mouseenter', function(event) {
        if (event.target.classList.contains('single-post-list')) {
            event.target.style.borderColor = randomColor();
        }
    });

    feed.addEventListener('mouseleave', function(event) {
        if (event.target.classList.contains('single-post-list')) {
            event.target.style.borderColor = 'rgba(0, 0 , 0, 0.05)';
        }
    });
    // Kết thúc thay đổi xử lý hover
});

var colorSet = randomColorSet();
var mode = Math.floor(Math.random() * 2);

// Randomly returns a color scheme
function randomColorSet() {
    // Các mảng màu của bạn ở đây
    var colorSet1 = ['#45CCFF', '#49E83E', '#FFD432', '#E84B30', '#B243FF'];
  var colorSet2 = ['#FF6138', '#FFFF9D', '#BEEB9F', '#79BD8F', '#79BD8F'];
  var colorSet3 = ['#FCFFF5', '#D1DBBD', '#91AA9D', '#3E606F', '#193441'];
  var colorSet4 = ['#004358', '#1F8A70', '#BEDB39', '#FFE11A', '#FD7400'];
  var colorSet5 = ['#105B63', '#FFFAD5', '#FFD34E', '#DB9E36', '#BD4932'];
  var colorSet6 = ['#04BFBF', '#CAFCD8', '#F7E967', '#A9CF54', '#588F27'];
  var colorSet7 = ['#405952', '#9C9B7A', '#FFD393', '#FF974F', '#F54F29'];
  var randomSet = [colorSet1, colorSet2, colorSet3, colorSet4, colorSet5, colorSet6, colorSet7];
  return randomSet[Math.floor(Math.random() * randomSet.length )];
}

// Randomly returns a color from an array of colors
function randomColor() {
    var color = colorSet[Math.floor(Math.random() * colorSet.length)];
    return color;
}
