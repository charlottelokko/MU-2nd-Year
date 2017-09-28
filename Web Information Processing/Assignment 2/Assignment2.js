var rowcount = "";
var colscount = "";
var intab = "";

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function addRow() {
    var table = document.getElementById("score");
    var rowCols = table.rows[0].cells.length;
    var now = table.rows.length;
    var row = table.insertRow(now);
    for (var i = 0; i < rowCols; i++) {
        row.insertCell(i).innerHTML = "-";
        if (i == 0 || i == 1) {
            row.cells[i].style.textAlign = "left";
        }
        else {
            row.cells[i].style.textAlign = "right";
        }
    }
    rowcount++;
    checkValid();
}

function delRow() {
    toCookieundo();
    var table = document.getElementById("score");
    if (table.rows.length - 1 > 0) {
        table.deleteRow(table.rows.length - 1);
    }
    rowcount--;
    calculate();
    checkValid();
}

function addCol() {
    var table = document.getElementById("score");
    var length = table.rows[0].cells.length - 1;
    for (var i = 0; i < table.rows.length; i++) {
        createCell(table.rows[i].insertCell(table.rows[i].cells.length - 1));
        table.rows[0].cells[length].innerHTML = "Assignment: " + (length - 1);
        table.rows[0].cells[length].style = "text-align:center";
        table.rows[i].cells[length].innerHTML = "-";
        table.rows[i].cells[length].style = "text-align:right";
    }
    colscount++;
    checkValid();
}

function delCol() {
    toCookieundo();
    var allRows = document.getElementById('score').rows;
    if (allRows[0].cells.length > 4) {
        var delthis = allRows[0].cells.length - 2;
        for (var i = 0; i < allRows.length; i++) {
            allRows[i].deleteCell(delthis); // logic to remove the last column
            //allRows[i].deleteCell(0);// logic to remove the first column of the modified table.     
        }
    }
    colscount--;
    calculate();
    checkValid();
}

function createCell(cell, text, style) {
    var txt = document.createTextNode(text);
}

function checkCookie() {
    rowcount = getCookie("rows");
    colscount = getCookie("columns");
    intab = getCookie("table");
    if ((rowcount == "") && (colscount == "") && (intab == "")) {
        alert("No saved table!");
    }
}

function genString() {
    intab = "";
    var table = document.getElementById('score');
    for (var i = 1; i < table.rows.length; i++) {
        var cell;
        for (var j = 0; j < table.rows[0].cells.length - 1; j++) {
            cell = table.rows[i].cells[j];
            intab += cell.innerHTML + "*";
        }
    }
}

function toCookie() {
    genString();
    var table = document.getElementById('score');
    rowcount = table.rows.length;
    colscount = table.rows[0].cells.length;
    setCookie("rows", rowcount, 365);
    setCookie("columns", colscount, 365);
    setCookie("tablecont", intab, 365);
}

function toCookieundo() {
    genString();
    var table = document.getElementById('score');
    rowcount = table.rows.length;
    colscount = table.rows[0].cells.length;
    setCookie("urows", rowcount, 365);
    setCookie("ucolumns", colscount, 365);
    setCookie("utablecont", intab, 365);
    calculate();
}

function initTable(rows, columns) {
    var table = document.getElementById('score');
    rowcount = table.rows.length;
    colscount = table.rows[0].cells.length;
    if (rowcount <= rows) {
        for (var i = rowcount; i <= rows - 1; i++) {
            addRow();
        }
    }
    else if (rowcount > rows) {
        for (var i = rowcount; i > rows; i--) {
            delRow();
        }
    }
    if (colscount <= columns) {
        for (var i = colscount; i <= columns - 1; i++) {
            addCol();
        }
    }
    else if (colscount > columns) {
        for (var i = colscount; i > columns; i--) {
            delCol();
        }
    }
}

function loadCookie() {
    var table = document.getElementById('score');
    var lotable = getCookie("tablecont");
    var count = 0;
    lotable = lotable.split("*");
    var lorow = getCookie("rows");
    var locols = getCookie("columns");
    initTable(lorow, locols);
    for (var i = 1; i < lorow; i++) {
        for (var j = 0; j < locols - 1; j++) {
            cell = table.rows[i].cells[j];
            cell.innerHTML = lotable[count];
            count++;
        }
    }
    calculate();
    checkValid();
}

function undoCookie() {
    var table = document.getElementById('score');
    var lotable = getCookie("utablecont");
    var count = 0;
    lotable = lotable.split("*");
    var lorow = getCookie("urows");
    var locols = getCookie("ucolumns");
    initTable(lorow, locols);
    for (var i = 1; i < lorow; i++) {
        for (var j = 0; j < locols - 1; j++) {
            cell = table.rows[i].cells[j];
            cell.innerHTML = lotable[count];
            count++;
        }
    }
    calculate();
    checkValid();
}

function tableLoop() {
    var table = document.getElementById('score');
    for (var i = 0; i < table.rows.length; i++) {
        var cell;
        for (var j = 0; j < table.rows[0].cells.length - 1; j++) {
            cell = table.rows[i].cells[j];
        }
    }
}

function calculate() {
    var table = document.getElementById('score');
    for (var i = 1; i < table.rows.length; i++) {
        var rowtot = 0;
        var cell;
        var count = (table.rows[0].cells.length) - 3;
        for (var j = 2; j < table.rows[0].cells.length - 1; j++) {
            cell = table.rows[i].cells[j];
            if (cell.textContent != '-') {
                rowtot += parseFloat(cell.textContent);
            }
        }
        rowtot /= count;
        cell = table.rows[i].cells[table.rows[0].cells.length - 1];
        cell.textContent = Math.floor(rowtot) + '%';
        if (rowtot < 40) cell.style = "background-color:#db2804;color:white; text-align:right";
        else cell.style = "background-color:white;color:black; text-align:right";
    }
}



function checkValid() {
    var count = 0;
    var table = document.getElementById('score');
    for (var i = 1; i < table.rows.length; i++) {
        var cell = '';
        for (var j = 2; j < table.rows[0].cells.length - 1; j++) {
            cell = table.rows[i].cells[j];
            if (((cell.textContent) != '-' && isNaN(cell.textContent)) || ((cell.textContent) > 100)) {
                cell.innerHTML = "-";
                count++;
            }
            else if (cell.textContent == '-') {
                count++;
            }
        }
    }
    document.getElementById("count").innerHTML = count;
    calculate();
}
window.onload = function () {
    checkValid();
}