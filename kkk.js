var request=new XMLHttpRequest()
request.open('GET','http://api.countrylayer.com/v2/all?access_key=d31535cc3b9c60d5d9994f2338a2f7b4' );
request.send()
request.onload = function(){
    var a = JSON.parse(this.responseText);
    console.log(a);
    }
