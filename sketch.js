function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#F7F5E9');
  drawGlyphs();
}

  //rescale
function windowResized() { 
  resizeCanvas(windowWidth, windowHeight); 
  background('#F7F5E9');
  drawGlyphs();
}


  //area 
function drawGlyphs() {
  let ellipseX = width / 2;
  let ellipseY = height / 2;
  let ellipseW = width * 0.7;
  let ellipseH = height * 0.5;

  //area > celle
  let cols = 25; 
  let rows = 25; 
  let cellW = ellipseW / cols;
  let cellH = ellipseH / rows;


  //area > celle > glifi
  for (let i = 0; i < cols; i++) { 
    for (let j = 0; j < rows; j++) { 
      let x = ellipseX - ellipseW / 2 + i * cellW + random(-cellW / 8, cellW / 8);
      let y = ellipseY - ellipseH / 2 + j * cellH + random(-cellH / 8, cellH / 8);

      //ignora punti fuori A
      let dx = x - ellipseX;
      let dy = y - ellipseY;
      if ((dx * dx) / (ellipseW / 2) ** 2 + (dy * dy) / (ellipseH / 2) ** 2 <= 1) {
        
        //area > celle > glifi > parametri
        let capLength = random(10, 15); 
        let lineLength = random(10, 40); 
        let orientation = random(["vertical", "horizontal"]);
        let isConnected = random([true, false]); //link glifo

        push();
        translate(x, y); //pos glifo
        strokeWeight(2);

        if (orientation === "vertical") {
          line(0, -lineLength / 2, 0, lineLength / 2);                                                                           //linea main
          line(-capLength / 2, -lineLength / 2 - (isConnected ? 0 : 5), capLength / 2, -lineLength / 2 - (isConnected ? 0 : 5)); //tratto H
        } else {
          line(-lineLength / 2, 0, lineLength / 2, 0);                                                                           //linea main2
          line(-lineLength / 2 - (isConnected ? 0 : 5), -capLength / 2, -lineLength / 2 - (isConnected ? 0 : 5), capLength / 2); //tratto V
        }

        pop(); 
      }
    }
  }
}

