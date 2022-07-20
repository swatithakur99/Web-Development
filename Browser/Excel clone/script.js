let gridContainer = document.querySelector(".grid_container");
let topRow = document.querySelector(".top_row");
let leftCol = document.querySelector(".left_col");
let grid = document.querySelector(".grid");

// create cell
// Rows
for(let i=0;i<26;i++){
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.textContent= String.fromCharCode(65+i);
    topRow.appendChild(div) ;
}
// columns
for(let i=1;i<=100;i++){
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
        div.textContent= i;
        leftCol.appendChild(div) ;
    }
    // 2D-Array
    for(let j=0;j<100;j++){
        let row = document.createElement("div");
        row.setAttribute("class","row");
        for(let i=0;i<26;i++){
            let div = document.createElement("div");
            div.setAttribute("class", "cell");
            // div.textContent=j +","+i;
            // div.textContent = String.fromCharCode(i+65)+(j+1)  
            div.setAttribute("contentEditable","true");
            div.setAttribute("rId", j);
            div.setAttribute("cId", i);
            row.appendChild(div);
        }
        grid.appendChild(row);
        
    }
    
    let addressInput = document.querySelector(".address_input");
    let AllGridCells = document.querySelectorAll(".grid .cell");

for (let i = 0; i < AllGridCells.length; i++) {
    AllGridCells[i].addEventListener("click", function (e) {
        let prevAddress = addressInput.value;
        if (prevAddress != "") {
            let ridcidObj = getRidCidFromAddress(prevAddress);
            // alert(ridcidObj.rid +""+ ridcidObj.cid)
            let prevCell = document
                .querySelector
            (`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
            prevCell.style.border ="0.1px solid rgb(233, 230, 230)";
                   }
        // alert("cell was clicked");
        let rid = AllGridCells[i].getAttribute("rId");
        let cid = AllGridCells[i].getAttribute("cId");
        rid = Number(rid);
        cid = Number(cid);
        addressInput.value = String.fromCharCode(cid + 65) + (rid + 1);
        let cCell = AllGridCells[i];
        cCell.style.border = "2px solid green";
        

    })
}
// get first elem
let firstCell = document.querySelector(".grid .cell[rId='0'][cId='0']");
firstCell.click();

function getRidCidFromAddress(address) {
    let AsciiValue = address.charCodeAt(0);
    let cid = AsciiValue - 65;
    let rid = Number(address.substring(1)) - 1;
    return {
        rid: rid, cid: cid
    }

}