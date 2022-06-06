window.onscroll = function()
{
    scroll()
};

let topButton = document.getElementById("topButton");
function scroll()
{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
    } else {
    topButton.style.display = "none";
    }
}

function toTop()
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
