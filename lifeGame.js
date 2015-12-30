size = 3;
stop = true;
map = document.getElementById('map');

var data = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,1,1,1,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
]

var tmp = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
]

function show(){
    map.innerHTML = "";
    for(var i=1;i<=size;i++) {
        for(var j=1;j<=size;j++) {
            var block = document.createElement('div');
            if(data[i][j]=='0') block.className = "block";
            else block.className = "block black";
            map.appendChild(block);
        }
        var block = document.createElement('div');
        block.className = "clr";
        map.appendChild(block);

    }
}

function lifegame() {
    for(var i=1;i<=size;i++) {
        for(var j=1;j<=size;j++) {
            if(check_map(i, j)) tmp[i][j] = 1;
            else tmp[i][j] = 0;
        }
    }
    for(var i=1;i<=size;i++) {
        for(var j=1;j<=size;j++) {
            data[i][j] = tmp[i][j];
        }
    }
}

function check_map(tate, yoko) {
    var count = 0;
    for(var i=-1;i<=1;i++){
        for(var j=-1;j<=1;j++){
            if(data[tate + i][yoko + j] == "1") count += 1;
        }
    }
    if(2 < count && count < 5) return true;
    return false;
}

var loop = function () {
    setTimeout(function () {
        lifegame();
        show();
        if(stop) loop();
    }, 1000);
}

loop();
