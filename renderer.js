/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
let fs = require('fs');

function listFiles(dir) {
let files = fs.readdirSync('C:/', {withFileTypes:true});

console.log(files);
let ul = document.querySelector('#files');
ul.innerHTML='';
if(dir != 'C:/'){
    ul.innerHTML+='<li><a href="#">..</a></li>';
}
for(const file of files) {
    if(file.isDirectory()){
        ul.innerHTML+='<li><a href="#">' + file.name + '</a></li>';
    } else if(file.isFile()) {
        ul.innerHTML+='<li>' + file.name + '</li>';
    }
    
}

let links = document.querySelectorAll('a');
for(const link of links){
    link.addEventListener('click', event =>{
        listFiles(dir+event.target.innerText+'/');

    })
}

}
listFiles('C:/');