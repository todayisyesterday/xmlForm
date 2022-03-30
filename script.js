let parametri = ["ime", "autor", "godina"];
let knjiga = { };
let knjige = [];
document.getElementById("unesi").addEventListener("click", e => {
  parametri.forEach(f => {
    let atribut = document.getElementById([f,"Knjige"].join("")).value;
    if(atribut){
      knjiga[f] = atribut;
    }
  })
  let knjigaXML = mojKonverter(knjiga);
  let xmlElement = document.createElement("p");
  knjige.push(knjigaXML);
  console.log(knjiga);
  console.log(knjigaXML);
  console.log(knjige);
  xmlElement.innerText=knjigaXML;
  document.getElementById("list").appendChild(xmlElement);
  document.getElementById("kreiraj").addEventListener("click", f => {
    let linkZaPreuzimanje = document.getElementById("preuzmi");
    linkZaPreuzimanje.href=kreirajFajl(noviXML(knjige.join("")));
    linkZaPreuzimanje.innerHTML="preuzmi";
    linkZaPreuzimanje.download="knjizara.xml";
  })
})

function mojKonverter(objekat){
  let pocetni = `<knjiga>`;
  let xml = "";
  parametri.forEach(f => {
    xml = `<${f}>${objekat[f]}</${f}>`;
    pocetni += xml;
  });
  pocetni += `</knjiga>`;
  return pocetni;
}

function noviXML(xml){
  let pocetni = "<knjizara>";
  pocetni+=xml+"</knjizara>";
  return pocetni;
}

let textFile=null, kreirajFajl = function (text) {
  let data = new Blob([text], {type: 'text/xml'});

  // If we are replacing a previously generated file we need to
  // manually revoke the object URL to avoid memory leaks.
  if (textFile !== null) {
    window.URL.revokeObjectURL(textFile);
  }

  textFile = window.URL.createObjectURL(data);

  // returns a URL you can use as a href
  return textFile;
};
