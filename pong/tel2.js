var img_1;
//var img_2;
var smiley_sprite;
var group_smiley;
var score=0;
var nul=0;
function preload() {
    img_1=loadImage("asset/smiley.png")
//    img_2=loadImage("asset/smiley_blood.png")
}
function setup() {
    createCanvas(800,600);
    textSize(32);
    smiley_sprite=createSprite(random(20,380),random(20,280));
    smiley_sprite.addImage(img_1);
    smiley_sprite.mass=0;
    smiley_sprite.setVelocity(5,5);
    group_smiley=new Group();
    for (j=0;j<4;j++){
        for (i=0;i<15;i++){
            var smiley_sprite_blood;
            smiley_sprite_blood=createSprite(50+50*i,10+30*j,45,20);
    //        smiley_sprite_blood.addImage(img_2);
            group_smiley.add(smiley_sprite_blood);
        }
    }
    wall_g=createSprite(-5,0,10,7600);
    wall_d=createSprite(805,0,10,7600);
    wall_h=createSprite(400,-5,800,10);
    wall_b=createSprite(400,605,800,10);
    pad_sprite=createSprite(400,580,125,10);
    wall_d.immovable=true;
    wall_g.immovable=true;
    wall_h.immovable=true;
    wall_b.immovable=true;
    group_smiley.immovable=true;
    pad_sprite.immovable=true;
}
function draw() {
    background(240,240,240);
    v=score*12+3
    group_smiley.bounce(wall_g);
    group_smiley.bounce(wall_d);
    group_smiley.bounce(wall_b);
    group_smiley.bounce(wall_h);
    smiley_sprite.bounce(wall_g);
    smiley_sprite.bounce(wall_d);
    smiley_sprite.overlap(wall_b,perdu);
    smiley_sprite.bounce(wall_h);
    smiley_sprite.bounce(group_smiley,contact);
    group_smiley.bounce(smiley_sprite);
//    smiley_sprite.overlap(group_smiley,contact);
//    smiley_sprite.overlap(wall_b,perdu);
    pad_sprite.bounce(smiley_sprite)
    text("Score : "+score,10,550)
//    text("Score : "+nul,10,600)
    drawSprites();
    pad_sprite.position.x = mouseX
    if(nul>0) { text("T'AS PERDU",300,500);}
    
}
function contact(sprite_1,sprite_2){
    score=score+1;
    sprite_2.remove();
 //   smiley_sprite.velocity =smiley_sprite.velocity +1; 
 
}

function perdu(sprite_1,sprite_2){
    nul += 1
 
}
