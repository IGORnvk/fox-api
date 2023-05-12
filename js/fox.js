const foxButton = document.getElementById('get-fox');

foxButton.addEventListener('click', function () {
    getData()
.then((response)=> {
    const foxImg = document.getElementById('fox');
    foxImg.src = response.image;
})
.catch((err) => {
    console.log('error')
    console.error(err);
})

function getData(){
   return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', "https://randomfox.ca/floof/", true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4)
            {
                if(xhr.status === 200){
                    console.log('done');
                    const resp = xhr.responseText;
                    const respJSON = JSON.parse(resp);
                    resolve(respJSON);
                }
                else{
                    reject(xhr.status);
                    console.log('err');
                }
            }
            else {
                console.log('ah');
            }
        };
    });
}
});
