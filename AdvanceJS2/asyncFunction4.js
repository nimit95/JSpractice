

function downlaodFiles(url, dowloaded){
    console.log("downloaded");
    setTimeout(dowloaded('dowloaded data'),3000);
}

function compressFile(data, compressionType, compressed){

    console.log("compressed");
    setTimeout(compressed('after compress data'),2000);
}

function saveFile(data, dataLocation, saved) {
    console.log("saved");
    setTimeout(saved(),2000);
}

downlaodFiles('google.com/files', function (downloadedData){
   compressFile(downloadedData,'small', function (compressedData) {
       saveFile(compressedData,'C:/main', function () {
           console.log("download completed");
       })
   }) 
});

console.log('download started');