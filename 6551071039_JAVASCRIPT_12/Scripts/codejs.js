function tinhMu(){
    var b = document.getElementById("b").value;
    var n = document.getElementById("n").value;

    document.getElementById("ketQua").innerText = Math.pow(b, n);
}