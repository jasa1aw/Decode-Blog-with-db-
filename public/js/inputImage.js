let fileInput = document.getElementById("file-input");
let inputButton = document.getElementsByClassName("btnSelectAnImage");

inputButton.addEventListener('click', () =>{
    fileInput.click();
    // let file = target.files[0];
    // if(file){
    //     let fileName = file.name;
    //     console.log(fileName);
    // }
})
// fileInput.onchange = ({target}) =>{
//     // let file = target.files[0];
//     // if(file){
//     //     let fileName = file.name;
//     //     console.log(fileName);
//     // }

// }