// let const var
let xbolinha =300; // padrão comelCase
let yBolinha = 200;
let diametro = 25;
let raio = diametro / 2 ;
let velocidadeXbolinha = 6;
let velocidadeYbolinha = 6;

//velocidade da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

// varáveis da raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

//Pontuação 
let meusPontos = 0;
let meusPontosOponente = 0;
   
function setup() {
  createCanvas(600, 400);
  console.log("iniciou o setup");
}
  
function draw() {
  background(0);
  mostrarBolinha(); // Chamando a função mostrar bolinha
  movimentaBolinha();
  verificarColisaoBorda();
  mostrarRaquete();
  movimentarRaquete();
  verificarColisaoRaquete();
  mostrarRaqueteOponente();
  movimentaRaqueteOponente();
  verificaColisaoRaqueteOponente();
  incluirPlacar();
  marcarPontos();
  movimentaRaqueteOponenteCimaBaixo();
  }
  
 // cria a função mostraBolinha
function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
 }

function movimentaBolinha() {
  xBolinha += velocidadeXbolinha;
  yBolinha += velocidadeYbolinha;
}

function verificaColisaoBorda() {
   if (xBolinha > width || xBolinha < 0) { 
     velocidadeXbolinha *= -1;
   }

  if(xBolinha > height || yBolinha < 0) {
     velocidadeYbolinha *= -1;
   }
}

function mostraRaquete() {
  rect(xRaquete, yRaquete, raqueteComoleto, raqueteAltura)
}

function movimentaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
   yRaquete += 10;
  }
}

function verificaColisaoRaquete() {
  if (
    xBolinha - raio < xRaquete + raqueteComprimento &&
    yBolinha - raio < yRaquete + raqueteAltura &&
    yBolinha + raio
 ) {
     velocidadeXbolinha *= -1;
    }
  }

function mostraRaqueteOponente() {
  rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura);
}

function movimentaRaqueteOponente() { 
 velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteAltura/ 2;
 yRaqueteOponente +=velocidadeYOponente;
}

function verificaColisaoRaqueteOponente() {
 colidiu = collideRectCircle(
  xRaqueteOponente,
  yRaqueteOponente,
  raqueteComprimento,
  raqueteAltura,
  xBolinha,
  yBolinha,
  raio