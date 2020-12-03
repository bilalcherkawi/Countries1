fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(json => {
        for (let i = 0; i < json.length; i++) {
            
            Boolean = true;
            var j=0;
            if((true)&&(i==j)){
                link = 'https://en.wikipedia.org/wiki/dubai'
            }
            var x = document.createElement('li')
            var content = `<div class="card" style="width:400px">
    <img class="card-img-top" src="XXX" alt="Card image">
    <div class="card-body">
      <h4 class="card-title">YYY</h4>
      <p class="card-text">ZZZ</p>
      <a href=link class="btn btn-primary">Visit Country</a>
    </div>
  </div>`
          var test=content.replace("XXX",json[i].flag);
             test=test.replace("YYY",json[i].name);
             test=test.replace("ZZZ",'Capital:' + json[i].capital + '<br>' +'Calling code:'+ json[i].callingCodes + '<br>' +'Area:'+ json[i].area + '<br>' +'Region:'+ json[i].region + '<br>' +'Population:'+ json[i].population + '<br>' +'Currencies:'+ json[i].currencies[0].code  );
            x.innerHTML =test;
           x.className = 'list-group-item';
            document.getElementById('myul').appendChild(x)
        }
    });
