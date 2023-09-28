let matrizCalles = []
let celdaGenerada = "c10-10";
let iteraciones = 0;

function createTable() {
    let innerTable = "";

    for(i=1; i <= 20; i++){
        let rowArray = [] 
        innerTable += `<tr id='row-${i}' class='table-row'>`;

        for(j=1; j <= 20; j++){
            innerTable += `<td id='c${i}-${j}' class='table-cell'></td>`;
            rowArray.push(`c${i}-${j}`);
        }
        innerTable += `</tr>`;
        matrizCalles.push(rowArray);
    }

    document.getElementById("table-tbody").innerHTML = innerTable;
    console.log(matrizCalles);

    // $("#table-tbody").html(innerTable);
    document.getElementById("c10-10").innerHTML = "<span class='badge rounded-pill text-bg-primary'> </span>"
}

function caminataRandom() {
    document.getElementById(celdaGenerada).innerHTML = "";
    const direcciones = ["N","S","E","O"];
    let probabilidad = 0.00;
    
    // Posicion en: [X, Y]
    let position = [10,10]
    
    for(i=0; i<10; i++){
        let random = Math.floor(Math.random() * direcciones.length)
        let randomMove = direcciones[random];

        // console.log(randomMove)
        switch(randomMove){
            case "N":
                position[0] += - 1;
                break;
            case "S":
                position[0] += + 1;
                break;
            case "E":
                position[1] += +1;
                break;
            case "O":
                position[0] += -1;
                break;
        }
    }

    celdaGenerada = "c" + position[0] + "-" + position[1];
    iteraciones += 1;

    console.log(celdaGenerada)

    document.getElementById(celdaGenerada).innerHTML = "<span class='badge rounded-pill text-bg-primary'> </span>";

    probabilidad = (Math.pow(2,5) / Math.pow(4,10))*100;

    document.getElementById("card-info").innerHTML = `<div>
        <p class="mb-4">Número de iteraciones: ${iteraciones}</p>

        <span class="fw-semibold">Probabilidad: </span>
        <span>${probabilidad.toFixed(8)}%</span>
    </div>`
}
