document.getElementById("controls").addEventListener("click", function(e) {

  const go = "go";
  let target = e.target.id;
  let partialID = target.substr(0, 4);
  let goID = partialID.substr(0, 2);


  // e.target is the clicked element!

  if (e.target && e.target.className === "button") {


    if (goID === go) {
      partialID = goID;
    }


    let trafficID = partialID + "Light";

    document.getElementById(trafficID).classList.add(partialID);


  }


});
