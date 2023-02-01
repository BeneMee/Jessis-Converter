const select = document.getElementById("select");
const cm = document.querySelector(".cm");
const px = document.querySelector(".px");

select.addEventListener("change", function() {
    switch (select.value) {
      case "A0":
        cm.innerText = "84,1 cm x 118,9 cm";
        px.innerText = "9933 x 14043 Pixel";
        break;
      case "A1":
        cm.innerText = "59,4 cm x 84,1 cm";
        px.innerText = "7016 x 9933 Pixel";
        break;
      case "A2":
        cm.innerText = "42,0 cm x 59,4 cm";
        px.innerText = "4961 x 7016 Pixel";
        break;
      case "A3":
        cm.innerText = "29,7 cm x 42,0 cm";
        px.innerText = "3508 x 4961 Pixel";
        break;
      case "A4":
        cm.innerText = "21,0 cm x 29,7 cm";
        px.innerText = "2480 x 3508 Pixel";
        break;
      case "A5":
        cm.innerText = "14,8 cm x 21,0 cm";
        px.innerText = "1748 x 2480 Pixel";
        break;
      case "A6":
        cm.innerText = "10,5 cm x 14,8 cm";
        px.innerText = "1240 x 1748 Pixel";
        break;
      case "A7":
        cm.innerText = "7,4 cm x 10,5 cm";
        px.innerText = "874 x 1240 Pixel";
        break;
      case "A8":
        cm.innerText = "5,2 cm x 7,4 cm";
        px.innerText = "614 x 874 Pixel";
        break;
      
      default:
        cm.innerText = "";
        px.innerText = "";
        break;
    }
  });


