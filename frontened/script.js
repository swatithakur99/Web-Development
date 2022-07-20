(function(){
   let btn = document.querySelector("#My_first_btn");
   let divContainer = document.querySelector("#container");
   let MyTemplates = document.querySelector("#MyTemplates");
   let fid = 0;
   let folders = [];
   btn.addEventListener("click",function(){
  let fname = prompt("Enter folder's name");
  if(fname == null){
      return;
  }
  let divfolderTemplates = MyTemplates.content.querySelector(".folder");
  let divfolder =  document.importNode(divfolderTemplates,true);
  let spanName = divfolder.querySelector("[purpose='name']")
  spanName.innerHTML = fname;
  divfolder.setAttribute("fid",++fid);

  let spanDelete = divfolder.querySelector("span[action ='delete']");
  spanDelete.addEventListener("click",function(){
      let flag = confirm("Do you want to delete "+ spanName.innerHTML );
      if(flag == true){
          console.log(divfolder);
          divContainer.removeChild(divfolder);
          let idx = folders.findIndex(f => f.id == parseInt(divfolder.getAttribute("fid")));
          folders.splice(idx,1);
          persistFolders();
      }
  })
   divContainer.appendChild(divfolder);

   let spanEdit = divfolder.querySelector("span[action ='edit']");
  spanEdit.addEventListener("click",function(){
      let fname = prompt("Do you want to edit the folder");
      if(fname == null){
        return;
    }
  spanName.innerHTML = fname;
  let folder = folders.find(f => f.id == parseInt(divfolder.getAttribute("fid")));
  folder.name = fname;
  persistFolders();
  });
   divContainer.appendChild(divfolder);
   folders.push({
    id : fid,
    name : fname
});
persistFolders();
   });
  

   function persistFolders(){
       console.log(folders);
       let fjson = JSON.stringify(folders);
       localStorage.setItem("data",fjson);
   }
})();