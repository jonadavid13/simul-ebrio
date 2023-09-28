
function createTable() {
    let innerTable = "";

    for(i=1; i <= 20; i++){
        innerTable += `<tr id='row-${i}' class='table-row'>`;

        for(j=1; j <= 20; j++){
            innerTable += `<td id=${i}-${j} class='table-cell'></td>`
        }
        innerTable += `</tr>`
    }


    document.getElementById("table-tbody").innerHTML = innerTable;
    // $("#table-tbody").html(innerTable);
}
