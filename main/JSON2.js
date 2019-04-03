var xhttp = new XMLHttpRequest();
var url = 'https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD';


xhttp.onreadystatechange = function() {
    // textContent = xhttp.response;
    if(xhttp.status === 200 && xhttp.readyState === 4){
        let array = JSON.parse(this.responseText)
        for(let i = 0; i < array.data.length; i++){
            let value = array.data[i]
            if(value[10] === 'Golden Gate Bridge'){
                document.getElementById('result').innerHTML += 'Movie: '+ value[8] + ', Year:  '+ value[9]+ ', Production:  '+ value[12]+ '<br>'+'<br>'
            }
        }
    }

};


xhttp.open('GET', url, true);
xhttp.send();
