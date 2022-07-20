let fontInput = document.querySelector(".font_size_input");
fontInput.addEventListener("change",function(){
    // console.log(fontInput.value);
    let fontSize = fontInput.value;
    console.log(fontSize);
    let address =  addressInput.value;
    console.log(address);
    let ridcidObj = getRidCidFromAddress(address);
    let tobeChangedCell = document.querySelector(`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);       
     tobeChangedCell.style.fontSize = fontSize+"px";


})
let fontFamily = document.querySelector(".font_family-input");
fontFamily.addEventListener("change",function(){
    // console.log(fontInput.value);
    let fonts = fontFamily.value;
    // console.log(fonts);
    let address =  addressInput.value;
    let ridcidObj = getRidCidFromAddress(address);
    let tobeChangedCell = document.querySelector(`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);       
     tobeChangedCell.style.fontFamily = fonts;


})