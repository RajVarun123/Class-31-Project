const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var particles = [];

function setup(){
    var canvas = createCanvas(480, 800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width / 2, height, width, 20);

    plinkos1 = new Plinko(50, 70);
    plinkos2 = new Plinko(100, 70);
    plinkos3 = new Plinko(150, 70);
    plinkos4 = new Plinko(200, 70);
    plinkos5 = new Plinko(250, 70);
    plinkos6 = new Plinko(300, 70);
    plinkos7 = new Plinko(350, 70);
    plinkos8 = new Plinko(400, 70);
    plinkos9 = new Plinko(450, 70);

    plinkos10 = new Plinko(25, 120);
    plinkos11 = new Plinko(75, 120);
    plinkos12 = new Plinko(125, 120);
    plinkos13 = new Plinko(175, 120);
    plinkos14 = new Plinko(225, 120);
    plinkos15 = new Plinko(275, 120);
    plinkos16 = new Plinko(325, 120);
    plinkos17 = new Plinko(375, 120);
    plinkos18 = new Plinko(425, 120);

    plinkos19 = new Plinko(50, 170);
    plinkos20 = new Plinko(100, 170);
    plinkos21 = new Plinko(150, 170);
    plinkos22 = new Plinko(200, 170);
    plinkos23 = new Plinko(250, 170);
    plinkos24 = new Plinko(300, 170);
    plinkos25 = new Plinko(350, 170);
    plinkos26 = new Plinko(400, 170);
    plinkos27 = new Plinko(450, 170);

    plinkos28 = new Plinko(25, 220);
    plinkos29 = new Plinko(75, 220);
    plinkos30 = new Plinko(125, 220);
    plinkos31 = new Plinko(175, 220);
    plinkos32 = new Plinko(225, 220);
    plinkos33 = new Plinko(275, 220);
    plinkos34 = new Plinko(325, 220);
    plinkos35 = new Plinko(375, 220);
    plinkos36 = new Plinko(425, 220);

    plinkos37 = new Plinko(50, 270);
    plinkos38 = new Plinko(100, 270);
    plinkos39 = new Plinko(150, 270);
    plinkos40 = new Plinko(200, 270);
    plinkos41 = new Plinko(250, 270);
    plinkos42 = new Plinko(300, 270);
    plinkos43 = new Plinko(350, 270);
    plinkos44 = new Plinko(400, 270);
    plinkos45 = new Plinko(450, 270);

    plinkos46 = new Plinko(25, 320);
    plinkos47 = new Plinko(75, 320);
    plinkos48 = new Plinko(125, 320);
    plinkos49 = new Plinko(175, 320);
    plinkos50 = new Plinko(225, 320);
    plinkos51 = new Plinko(275, 320);
    plinkos52 = new Plinko(325, 320);
    plinkos53 = new Plinko(375, 320);
    plinkos54 = new Plinko(425, 320);

    plinkos55 = new Plinko(50, 370);
    plinkos56 = new Plinko(100, 370);
    plinkos57 = new Plinko(150, 370);
    plinkos58 = new Plinko(200, 370);
    plinkos59 = new Plinko(250, 370);
    plinkos60 = new Plinko(300, 370);
    plinkos61 = new Plinko(350, 370);
    plinkos62 = new Plinko(400, 370);
    plinkos63 = new Plinko(450, 370);

    division1 = new Division(0, 400, 10, 800);
    division2 = new Division(80, 620, 10, 400);
    division3 = new Division(160, 620, 10, 400);
    division4 = new Division(240, 620, 10, 400);
    division5 = new Division(320, 620, 10, 400);
    division6 = new Division(400, 620, 10, 400);
    division7 = new Division(479, 400, 10, 800);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    plinkos1.display();
    plinkos2.display();
    plinkos3.display();
    plinkos4.display();
    plinkos5.display();
    plinkos6.display();
    plinkos7.display();
    plinkos8.display();
    plinkos9.display();

    plinkos10.display();
    plinkos11.display();
    plinkos12.display();
    plinkos13.display();
    plinkos14.display();
    plinkos15.display();
    plinkos16.display();
    plinkos17.display();
    plinkos18.display();

    plinkos19.display();
    plinkos20.display();
    plinkos21.display();
    plinkos22.display();
    plinkos23.display();
    plinkos24.display();
    plinkos25.display();
    plinkos26.display();
    plinkos27.display();

    plinkos28.display();
    plinkos29.display();
    plinkos30.display();
    plinkos31.display();
    plinkos32.display();
    plinkos33.display();
    plinkos34.display();
    plinkos35.display();
    plinkos36.display();

    plinkos37.display();
    plinkos38.display();
    plinkos39.display();
    plinkos40.display();
    plinkos41.display();
    plinkos42.display();
    plinkos43.display();
    plinkos44.display();
    plinkos45.display();

    plinkos46.display();
    plinkos47.display();
    plinkos48.display();
    plinkos49.display();
    plinkos50.display();
    plinkos51.display();
    plinkos52.display();
    plinkos53.display();
    plinkos54.display();

    plinkos55.display();
    plinkos56.display();
    plinkos57.display();
    plinkos58.display();
    plinkos59.display();
    plinkos60.display();
    plinkos61.display();
    plinkos62.display();
    plinkos63.display();

    division1.display();
    division2.display();
    division3.display();
    division4.display();
    division5.display();
    division6.display();
    division7.display();

    if(frameCount % 60 === 0) {
        particles.push(new Particles(random(width / 2 - 10, width / 2 + 10), 10));
    }
    
    for(var j = 0; j < particles.length; j++) {
        particles[j].display();
    }
}