


callitems = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        
        if (this.readyState == 1  ) {
            console.log("server connection established")
            document.getElementById("demo").innerHTML= "server connection established";
            
        }
        
        else if (this.readyState == 2) {
            console.log("request received")
            document.getElementById("demo").innerHTML= "request received";
        } 
        
        else if (this.readyState == 3) {
            document.getElementById("demo").innerHTML= "processing request";
            console.log("processing request")
        } 
        
        else if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
        
        else{
            document.getElementById("demo").innerHTML = "error";
        }
    };

    xhttp.open("GET", "content.html", true);
    xhttp.send();
}