let bodyright = document.querySelector("#right");
var threefshow = document.getElementById("threef");
let temp = 0;
var count = 6;
function firststep(e0) {
    let x = e0.offsetX;
    let y = e0.offsetY;
    console.log(x, y)
    document.querySelector("#right").dataset.id = '0';

    if (x > 130 && x < 430 && y < 324 && y > 124 && temp == 0) {


        bodyright.style.backgroundImage = 'url(https://ws.nmmba.gov.tw/001/Upload/226/ckfile/f9f83808-8917-4d91-be95-98955736b763.jpg)';
        temp = 1;
        document.querySelector("#right").dataset.id = '1';
    }
    if (x > 300 && x < 750 && y > 30 && y < 156 && temp == 0) {

        bodyright.style.backgroundImage = 'url(https://ws.nmmba.gov.tw/001/Upload/226/ckfile/be3ac2e6-4910-4308-9c19-d797081ea4e1.jpg)';
        threefshow.style.display = " block";
        document.querySelector("#right").dataset.id = '2';
        temp = 2;
    }
    if (x > 470 && x < 855 && y > 170 && y < 300 && temp == 0) {
        bodyright.style.backgroundImage = 'url(https://ws.nmmba.gov.tw/001/Upload/226/ckfile/aeee9399-5776-4dc9-bc34-74f3de9610ad.jpg)';
        temp = 4;
        document.querySelector("#right").dataset.id = '4';
    }
}
function taiwanmap(e) {
    let x = e.offsetX;
    let y = e.offsetY;
    if(x>150&&x<200&&y>60&&y<100)
        {console.log("A")
        document.getElementById("show0").style.visibility="visible"
        setTimeout(()=>{
            document.getElementById("show0").style.visibility="hidden"},2000)}

    else if(y>155&&y<200&&x>75&&x<125)
    {
        console.log("B")
        document.getElementById("show1").style.visibility="visible"
        
        setTimeout(()=>{
            document.getElementById("show1").style.visibility="hidden";},2000)
    }
    else if(x>70&&x<115&&y>370&&y<420)
    {
        console.log("c");
        document.getElementById("show2").style.visibility="visible"
        setTimeout(()=>{
            document.getElementById("show2").style.visibility="hidden";},2000)
    }
    else if(x>50&&x<90&&y>460&&y<500)
    {
        console.log("D")
        document.getElementById("show3").style.visibility="visible"
        setTimeout(()=>{
            document.getElementById("show3").style.visibility="hidden";},2000)
    }
    else if(x>290&&x<330&&y>355&&y<390)
    {
        console.log("E")
        document.getElementById("show4").style.visibility="visible"
        setTimeout(()=>{
        document.getElementById("show4").style.visibility="hidden";},2000)
    }
    else if(x>370&&y>215&&x<410&&y<255)
    {
        console.log("F")
        document.getElementById("show5").style.visibility="visible"
        setTimeout(()=>{
        document.getElementById("show5").style.visibility="hidden";},2000)
    }
    
}


$('#right').click(firststep)

bodyright.addEventListener("mousemove", function () {
    if (temp === 1) {
        bodyright.addEventListener('mousemove', taiwanmap)
    }
    else{
        bodyright.removeEventListener('mousemove',taiwanmap);
    }
})
/*
bodyright.addEventListener('mousemove', function (event) {
    bodyright.removeEventListener('click', firststep);
    if (temp === 0) {
        bodyright.addEventListener("click", firststep);
        threefshow.style.display = "none";
        document.querySelector("#right").dataset.id = '0';
    }
    else if (temp === 1) {
        document.querySelector("#right").dataset.id = '1';
    }
    else if (temp === 2) {
        document.querySelector("#right").dataset.id = '2';
    }
    else if (temp === 3) {
        document.querySelector("#right").dataset.id = '3';
    }
    else if(temp === 4) {
        document.querySelector("#right").dataset.id = '4';
    }
})*/
document.getElementById("threef").addEventListener("click", () => {
    if (temp === 3) {
        var one_twof = document.createElement('p');
        var text = document.createTextNode("3F");
        threefshow.innerHTML = "";
        one_twof.appendChild(text);
        threefshow.appendChild(one_twof);
        temp = 2;
        bodyright.style.backgroundImage = 'url(https://ws.nmmba.gov.tw/001/Upload/226/ckfile/be3ac2e6-4910-4308-9c19-d797081ea4e1.jpg)';
    }
    else {
        bodyright.style.backgroundImage = 'url(https://ws.nmmba.gov.tw/001/Upload/226/ckfile/c7e10c76-a9aa-49ea-abe4-81066e8fd518.jpg)';
        temp = 3;
        var one_twof = document.createElement('p');
        var text = document.createTextNode("1、2F");
        threefshow.innerHTML = "";
        one_twof.appendChild(text);
        threefshow.appendChild(one_twof);
    }
})
document.getElementById("back").addEventListener("click", () => {
    bodyright.style.backgroundImage = 'url(https://ws.nmmba.gov.tw/001/Upload/217/ckfile/b3f1548b-831c-4cf7-bfad-6235bc3049e2.jpg)';
    threefshow.style.display = "none";
    temp = 0;
    $(".card").remove();
})


////ajax請求

/*function big(e) {
    var x, y;
    x = e.offsetX;
    y = e.offsetY;
    var disppear = document.querySelector(".Tosee");

    var bg = "url(https://ws.nmmba.gov.tw/001/Upload/217/ckfile/b3f1548b-831c-4cf7-bfad-6235bc3049e2.jpg)";
    if (x > 130 && x < 430 && y < 324 && y > 124) {
        $(".Tosee").css("left", 130 + "px").css("top", 124  + "px").css('background', bg);
        $(".Tosee").css("visibility","visible")
    }else if(x > 300 && x < 750 && y > 30 && y < 156)
    {
        $(".Tosee").css("left", 300 + "px").css("top", 30 + "px").css('background', bg);
        $(".Tosee").css("visibility","visible")
    }
    else if(x > 470 && x < 855 && y > 170 && y < 300)
    {
        $(".Tosee").css("left", 470 + "px").css("top", 170 + "px").css('background', bg);
        $(".Tosee").css("visibility","visible")
    }
    else
    {
        disppear.style.visibility = "hidden";
    }


}*/
