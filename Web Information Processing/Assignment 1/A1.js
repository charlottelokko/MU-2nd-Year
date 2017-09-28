/*function calculate() {
    var a1 = parseFloat(document.getElementById('1a').textContent);
    var a2 = parseFloat(document.getElementById('1b').textContent);
    var a3 = parseFloat(document.getElementById('1c').textContent);
    var a4 = parseFloat(document.getElementById('1d').textContent);
    var a5 = parseFloat(document.getElementById('1e').textContent);
    var atot=a1+a2+a3+a4+a5;
    atot=atot/5;
    document.getElementById('g1').innerHTML=atot;
}*/
function calculate() {
    var table = document.getElementById('score');
    for (var i = 1; i < table.rows.length; i++) {
        var rowtot = 0;
        var cell = '';
        for (var j = 2; j < 7; j++) {
            cell = table.rows[i].cells[j];
            if (cell.textContent != '-') {
                rowtot += parseFloat(cell.textContent);
            }
        }
        rowtot /= 5;
        cell = table.rows[i].cells[7];
        cell.innerHTML = Math.floor(rowtot) + '%';
        if (rowtot < 40) cell.style = "background-color:#db2804;color:white";
        else cell.style = "background-color:white;color:black";
    }
}

function yellow() {
    var table = document.getElementById('score');
    for (var i = 1; i < table.rows.length; i++) {
        var rowtot = 0;
        var cell = '';
        for (var j = 2; j < 7; j++) {
            cell = table.rows[i].cells[j];
            if (cell.textContent == '-') {
                cell.style = "background-color: #f4f442";
            }
            else {
                cell.style = "background-color: white";
            }
        }
    }
}

function download_csv(csv, filename) {
    var csvFile;
    var downloadLink;
    // CSV FILE
    csvFile = new Blob([csv], {
        type: "text/csv"
    });
    // Download link
    downloadLink = document.createElement("a");
    // File name
    downloadLink.download = filename;
    // We have to create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);
    // Make sure that the link is not displayed
    downloadLink.style.display = "none";
    // Add the link to your DOM
    document.body.appendChild(downloadLink);
    // Lanzamos
    downloadLink.click();
}

function toCSV(html) {
    var html = document.querySelector("table").outerHTML;
    var csv = [];
    var rows = document.querySelectorAll("table tr");
    for (var i = 0; i < rows.length; i++) {
        var row = []
            , cols = rows[i].querySelectorAll("td, th");
        for (var j = 0; j < cols.length; j++) row.push(cols[j].innerText);
        csv.push(row.join(","));
    }
    // Download CSV
    download_csv(csv.join("\n"), "Grades.csv");
}

function checkValid() {
    var count = 0;
    var table = document.getElementById('score');
    for (var i = 1; i < table.rows.length; i++) {
        var cell = '';
        for (var j = 2; j < 7; j++) {
            cell = table.rows[i].cells[j];
            if (((cell.textContent) != '-' && isNaN(cell.textContent)) || ((cell.textContent)>100)) {
                cell.innerHTML = "-";
                count++;
            }
            else if (cell.textContent == '-') {
                count++;
            }
        }
    }
    document.getElementById("count").innerHTML = count;
    yellow();
    calculate();
}
window.onload = function () {
    yellow();
    checkValid();
}
