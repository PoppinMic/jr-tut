document.addEventListener(
  "DOMContentLoaded",
  function() {
    var list = document.createElement("UL");
    document.body.appendChild(list);
    for (var i = 0; i < 5; i++) {
      var listElement = document.createElement("LI");
      var listText = document.createTextNode(
        "List item #" + (i + 1)
      );
      listElement.appendChild(listText);
      list.appendChild(listElement);
      listElement.addEventListener("click", function() {
        console.log("index", i);
      });
    }
  }
);