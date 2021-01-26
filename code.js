var address= {
  "city": "Anytown",
  "country": "US",
  "line1": "1234 Main street",
  "line2": null,
  "postal_code": "123456",
  "state": null
  }
  console.log(address)
  var result = Object.keys(address).map((key) => [String(key), address[key]]);
  var filtered = result.filter(function (el) {
    return el[1] != null;
  });
  console.log("filtered")
  console.log(filtered)
  
  var t="asv"
  console.log(t.toUpperCase())

  var g='';
  if(address.line1 !=null){
    g+=address.line1+' ';
  }
  if(address.line2 !=null){
    t+=address.line2+' '
  }
  console.log(g)

  
