var option = document.getElementById("root").onclick = function () {
    var r = document.getElementById("root").style.background = "white";
    var c1 = document.getElementById("child1").style.background = "pink";
    var c2 = document.getElementById("child2").style.background = "pink";
    var content = document.getElementById("phb").style.display = "block";
    var content1 = document.getElementById("phl").style.display = "none";
    var content2 = document.getElementById("phhoathinh").style.display = "none";
}
var option1 = document.getElementById("child1").onclick = function () {
    var r = document.getElementById("root").style.background = "pink";
    var c1 = document.getElementById("child1").style.background = "white";
    var c2 = document.getElementById("child2").style.background = "pink";
    var content = document.getElementById("phl").style.display = "block";
    var content1 = document.getElementById("phb").style.display = "none";
    var content2 = document.getElementById("phhoathinh").style.display = "none";
}
var option2 = document.getElementById("child2").onclick = function () {
    var r = document.getElementById("root").style.background = "pink";
    var c1 = document.getElementById("child1").style.background = "pink";
    var c2 = document.getElementById("child2").style.background = "white";
    var content = document.getElementById("phhoathinh").style.display = "block";
    var content1 = document.getElementById("phl").style.display = "none";
    var content2 = document.getElementById("phb").style.display = "none";
}

var a = [1,8,0,1,6,7,11];
function insert(a,n) {
    for(let i = 1 ; i < n ; i++) {
        let temp = a[i];
        let j = i-1;
        for( ; j>=0 && a[j] > temp ; j--) {
            a[j+1] = a[j];
        }
        a[j+1] = temp;
    }

}
insert(a,7);
for (let i = 0 ; i < 7 ; i++) console.log(a[i]);