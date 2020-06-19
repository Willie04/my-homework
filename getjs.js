
$('#right').click(() => {
    var data_id = document.getElementById("right").dataset.id

    if (data_id == 1) {
        $.ajax({
            url: "/card.json",
            type: "GET",
            dataType: "json",
            success: function (Jdata) {
                console.log("SUCCESS!!!");
                for (var i = 0; i < 6; i++) {
                    console.log(String(i))
                    var d1 = '<div class="card" class="position-absolute" style="width:19rem;" id="show' + i + '"id ="hi">' + Jdata[i].img
                    d1 += '<div class="card-body"><h3>' + Jdata[i].hname + '</h3>';
                    d1 += '<p class="card-text">' + Jdata[i].p + '</p>' + Jdata[i].ahref;
                    d1 += '</div></div>'
                    $("#all").prepend(d1);
                }
            },

            error: function () {
                console.log("ERROR!!!");
            }
        });
    }
})
/*
if (data_id !== 0)
    $.ajax({
        url: "/card.json",
        type: "GET",
        dataType: "json",
        
        success: function (Jdata) {
            console.log("SUCCESS!!!");
            for (var i = (data_id - 1) * 6; i < data_id + 6; i++) {
                var d1 = '<div class="card" style="width:19rem;">' + Jdata[i].img
                d1 += '<div class="card-body"><h3>' + Jdata[i].hname + '</h3>';
                d1 += '<p class="card-text">' + Jdata[i].p + '</p>' + Jdata[i].ahref;
                d1 += '</div></div>'
                console.log(i);
                $("#result").prepend(d1);
            }
        },

        error: function () {
            console.log("ERROR!!!");
        }
    });*/
function checkchange() {
    var dataid = document.getElementById("right").dataset.id
    alert(dataid)
}
