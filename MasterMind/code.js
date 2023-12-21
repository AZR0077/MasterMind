var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["57e7c43f-a2c7-43b3-a951-7759e0bc0004","49c6051c-2f9d-407b-b0e9-96bff4215b89","51264457-ae1d-49b4-ae9b-dcfb5103b271","284ef7f3-37d8-49e0-9506-3eb283e82f39","201b9892-ded6-4ff9-b013-1e46af521a96","b8488c7d-c5b6-4cd4-a620-4801f5932a3f","3844af2a-470b-4c20-8b0a-641678109fa3","120f9908-4e78-4c8b-a8dd-74270f414c40","62de2f50-ad01-4a6a-a8c6-f0e61dbcbab6","00eba20f-1580-4bf3-92d9-a889f184b5bf","b078e41f-868b-4c52-bacc-825e262e96c0","47c16020-be93-48bf-98d3-f7bb79417614","a388e91e-0584-4d22-949d-7e289c121a07","7023ee15-1766-4301-9e52-89d4a6d3b654","1d9f3f40-4815-42c8-a353-025171876b59","e5222488-ef42-4322-837c-c236091c91cd","8df57cda-7af5-4236-8196-2575efee974f"],"propsByKey":{"57e7c43f-a2c7-43b3-a951-7759e0bc0004":{"name":"greenB","sourceUrl":null,"frameSize":{"x":72,"y":72},"frameCount":1,"looping":true,"frameDelay":12,"version":"2jo6uutyriJ751ouEKEnvAyQwLDaNNxv","loadedFromSource":true,"saved":true,"sourceSize":{"x":72,"y":72},"rootRelativePath":"assets/57e7c43f-a2c7-43b3-a951-7759e0bc0004.png"},"49c6051c-2f9d-407b-b0e9-96bff4215b89":{"name":"blueB","sourceUrl":null,"frameSize":{"x":72,"y":72},"frameCount":1,"looping":true,"frameDelay":12,"version":"UTOS9x16CkjlYFRQOJ..toIsuNjUUubx","loadedFromSource":true,"saved":true,"sourceSize":{"x":72,"y":72},"rootRelativePath":"assets/49c6051c-2f9d-407b-b0e9-96bff4215b89.png"},"51264457-ae1d-49b4-ae9b-dcfb5103b271":{"name":"purpleB","sourceUrl":null,"frameSize":{"x":72,"y":72},"frameCount":1,"looping":true,"frameDelay":12,"version":"exqxKSrVxNVUATuOgKuEis1G.r0JLWog","loadedFromSource":true,"saved":true,"sourceSize":{"x":72,"y":72},"rootRelativePath":"assets/51264457-ae1d-49b4-ae9b-dcfb5103b271.png"},"284ef7f3-37d8-49e0-9506-3eb283e82f39":{"name":"yellowB","sourceUrl":null,"frameSize":{"x":72,"y":72},"frameCount":1,"looping":true,"frameDelay":12,"version":"sBStU1XdXRYjSnsaIOpslY0r60XYzqHN","loadedFromSource":true,"saved":true,"sourceSize":{"x":72,"y":72},"rootRelativePath":"assets/284ef7f3-37d8-49e0-9506-3eb283e82f39.png"},"201b9892-ded6-4ff9-b013-1e46af521a96":{"name":"redB","sourceUrl":null,"frameSize":{"x":72,"y":72},"frameCount":1,"looping":true,"frameDelay":12,"version":"TrH1JY0defCwhCq2sEDJuymVoi4ivEgY","loadedFromSource":true,"saved":true,"sourceSize":{"x":72,"y":72},"rootRelativePath":"assets/201b9892-ded6-4ff9-b013-1e46af521a96.png"},"b8488c7d-c5b6-4cd4-a620-4801f5932a3f":{"name":"orangeB","sourceUrl":null,"frameSize":{"x":72,"y":72},"frameCount":1,"looping":true,"frameDelay":12,"version":"PZAIoLXzhopcxkeSnJiuaYewxxCWO4po","loadedFromSource":true,"saved":true,"sourceSize":{"x":72,"y":72},"rootRelativePath":"assets/b8488c7d-c5b6-4cd4-a620-4801f5932a3f.png"},"3844af2a-470b-4c20-8b0a-641678109fa3":{"name":"blackB","sourceUrl":null,"frameSize":{"x":36,"y":36},"frameCount":1,"looping":true,"frameDelay":12,"version":"EP4uqzJpg_w8duDlKM_QHSgsouiCrYI7","loadedFromSource":true,"saved":true,"sourceSize":{"x":36,"y":36},"rootRelativePath":"assets/3844af2a-470b-4c20-8b0a-641678109fa3.png"},"120f9908-4e78-4c8b-a8dd-74270f414c40":{"name":"whiteB","sourceUrl":null,"frameSize":{"x":36,"y":36},"frameCount":1,"looping":true,"frameDelay":12,"version":"dK0jvuhndrwUGNyK6cvPuZJBzyJBDXq1","loadedFromSource":true,"saved":true,"sourceSize":{"x":36,"y":36},"rootRelativePath":"assets/120f9908-4e78-4c8b-a8dd-74270f414c40.png"},"62de2f50-ad01-4a6a-a8c6-f0e61dbcbab6":{"name":"block","sourceUrl":null,"frameSize":{"x":300,"y":83},"frameCount":1,"looping":true,"frameDelay":12,"version":"IP6r7VvSOgmuScOEM84Esux2bJ6TIUPJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":83},"rootRelativePath":"assets/62de2f50-ad01-4a6a-a8c6-f0e61dbcbab6.png"},"00eba20f-1580-4bf3-92d9-a889f184b5bf":{"name":"solution","sourceUrl":null,"frameSize":{"x":200,"y":77},"frameCount":1,"looping":true,"frameDelay":12,"version":"7wXWxoq1rmHQwtgzfUIQDfieqgJuDKe4","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":77},"rootRelativePath":"assets/00eba20f-1580-4bf3-92d9-a889f184b5bf.png"},"b078e41f-868b-4c52-bacc-825e262e96c0":{"name":"current","sourceUrl":null,"frameSize":{"x":56,"y":92},"frameCount":1,"looping":true,"frameDelay":12,"version":"H.bfEc49VhQNZIIqDQLge_2.okLMAJya","loadedFromSource":true,"saved":true,"sourceSize":{"x":56,"y":92},"rootRelativePath":"assets/b078e41f-868b-4c52-bacc-825e262e96c0.png"},"47c16020-be93-48bf-98d3-f7bb79417614":{"name":"check","sourceUrl":null,"frameSize":{"x":107,"y":43},"frameCount":1,"looping":true,"frameDelay":12,"version":"Y1IpzSN9RN_HKcH5B9gtk17eSDBbfn7S","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":43},"rootRelativePath":"assets/47c16020-be93-48bf-98d3-f7bb79417614.png"},"a388e91e-0584-4d22-949d-7e289c121a07":{"name":"delete","sourceUrl":null,"frameSize":{"x":109,"y":43},"frameCount":1,"looping":true,"frameDelay":12,"version":"aMSpT1DJB_DVMvBHWgECAac5Du_IZTnv","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":109,"y":43},"rootRelativePath":"assets/a388e91e-0584-4d22-949d-7e289c121a07.png"},"7023ee15-1766-4301-9e52-89d4a6d3b654":{"name":"title","sourceUrl":null,"frameSize":{"x":460,"y":79},"frameCount":1,"looping":true,"frameDelay":12,"version":"zPibkg.pbnOKuR.1xGJ5OuNGJonH5Wty","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":460,"y":79},"rootRelativePath":"assets/7023ee15-1766-4301-9e52-89d4a6d3b654.png"},"1d9f3f40-4815-42c8-a353-025171876b59":{"name":"solutionTitle","sourceUrl":null,"frameSize":{"x":329,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"cMVnZUGC.czmI_fGzYEhSXZ_2lhq0QZL","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":329,"y":60},"rootRelativePath":"assets/1d9f3f40-4815-42c8-a353-025171876b59.png"},"e5222488-ef42-4322-837c-c236091c91cd":{"name":"lose","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"0Kr54dyPcVpIMsyMX_9cbyPEgi2nfzpM","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/e5222488-ef42-4322-837c-c236091c91cd.png"},"8df57cda-7af5-4236-8196-2575efee974f":{"name":"win","sourceUrl":null,"frameSize":{"x":85,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"YoHzHTRySxmWCULoSV6_k.gLR.4dYmze","loadedFromSource":true,"saved":true,"sourceSize":{"x":85,"y":100},"rootRelativePath":"assets/8df57cda-7af5-4236-8196-2575efee974f.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// Sprites
var greenBSel = createSprite(50, 90);
greenBSel.setAnimation("greenB");
greenBSel.scale = 0.5;

var blueBSel = createSprite(100, 90);
blueBSel.setAnimation("blueB");
blueBSel.scale = 0.5;

var redBSel = createSprite(150, 90);
redBSel.setAnimation("redB");
redBSel.scale = 0.5;

var purpleBSel = createSprite(50, 140);
purpleBSel.setAnimation("purpleB");
purpleBSel.scale = 0.5;

var yellowBSel = createSprite(100, 140);
yellowBSel.setAnimation("yellowB");
yellowBSel.scale = 0.5;

var orangeBSel = createSprite(150, 140);
orangeBSel.setAnimation("orangeB");
orangeBSel.scale = 0.5;

var title = createSprite(100, 30);
title.setAnimation("title");
title.scale = 0.3;

var solutionTitle = createSprite(105, 310);
solutionTitle.setAnimation("solutionTitle");
solutionTitle.scale = 0.3;

// Creates Circle Placement Blocks
spawnBlock();

var current = createSprite(226, -200);
current.setAnimation("current");
current.scale = 0.5;

var check = createSprite(100, 200);
check.setAnimation("check");
check.scale = 0.6;

var del = createSprite(100, 250);
del.setAnimation("delete");
del.scale = 0.6;

var sol = createSprite(105, 368);
sol.setAnimation("solution");
sol.scale = 0.6;

var winV = createSprite(188, 368);
winV.setAnimation("win");
winV.scale = 0.3;
winV.visible = false;

var loseV = createSprite(188, 368);
loseV.setAnimation("lose");
loseV.scale = 0.3;
loseV.visible = false;

// Groups for Circles
var row0 = createGroup();
var row1 = createGroup();
var row2 = createGroup();
var row3 = createGroup();
var row4 = createGroup();
var row5 = createGroup();
var row6 = createGroup();
var row7 = createGroup();

var hint0 = createGroup();
var hint1 = createGroup();
var hint2 = createGroup();
var hint3 = createGroup();
var hint4 = createGroup();
var hint5 = createGroup();
var hint6 = createGroup();
var hint7 = createGroup();

var solG = createGroup();

// Creates Random Solution
spawnSol();

// Variables
var mouseD = false;

var row = 0;
var col = 0;

var rot = -1;
var color = "";

var win = false;
var lose = false;

// Spawns Blocks for Circles
function spawnBlock() {
  for (var i = 0; i < 8; i++) {
    var block = createSprite(300, 32 + (i * 48));
    block.setAnimation("block");
    block.scale = 0.6;
  }
}

// Creates Random Solution
function spawnSol() {
  for (var i = 0; i < 4; i++) {
    var ball = createSprite(60.5 + (i * 29.75), 368);
    randomColor();
    ball.setAnimation(color);
    ball.rotation = rot;
    ball.scale = 0.3;
    ball.visible = false;
    solG.add(ball);
  }
}

// Creates Random Color for Circles
function randomColor() {
  rot = -1;
  var temp = randomNumber(0, 5);
  if (temp == 0) {
    color = "greenB";
    rot = 0;
  }
  else if (temp == 1) {
    color = "blueB";
    rot = 1;
  }
  else if (temp == 2) {
    color = "redB";
    rot = 2;
  }
  else if (temp == 3) {
    color = "purpleB";
    rot = 3;
  }
  else if (temp == 4) {
    color = "yellowB";
    rot = 4;
  }
  else {
    color = "orangeB";
    rot = 5;
  }
}

// Draw Loop
function draw() {
  background("white");
  
  if (mouseDown()) {
    mouseD = true;
  }
  else {
    mouseD = false;
  }
  
  if (!win && !lose) {
    if (col < 4) {
      run();
    }
  
    if (mousePressedOver(check) && !mouseD) {
      checkF();
    }
    if (mousePressedOver(del) && !mouseD) {
      delF();
    }
  }
  
  if (win) {
    winV.visible = true;
  }
  if (lose) {
    loseV.visible = true;
  }
  
  drawSprites();
}

// Constant Check
function run() {
  current.y = 32 + (row * 48);
  
  if (mousePressedOver(greenBSel) && !mouseD) {
    var ball = createSprite(257 + (32 * col), 32 + (48 * row));
    ball.setAnimation("greenB");
    ball.scale = 0.3;
    eval("row" + row + ".add(ball);");
    
    col++;
  }
  else if (mousePressedOver(blueBSel) && !mouseD) {
    var ball = createSprite(257 + (32 * col), 32 + (48 * row));
    ball.setAnimation("blueB");
    ball.scale = 0.3;
    ball.rotation = 1;
    eval("row" + row + ".add(ball);");
    
    col++;
  }
  else if (mousePressedOver(redBSel) && !mouseD) {
    var ball = createSprite(257 + (32 * col), 32 + (48 * row));
    ball.setAnimation("redB");
    ball.scale = 0.3;
    ball.rotation = 2;
    eval("row" + row + ".add(ball);");
    
    col++;
  }
  else if (mousePressedOver(purpleBSel) && !mouseD) {
    var ball = createSprite(257 + (32 * col), 32 + (48 * row));
    ball.setAnimation("purpleB");
    ball.scale = 0.3;
    ball.rotation = 3;
    eval("row" + row + ".add(ball);");
    
    col++;
  }
  else if (mousePressedOver(yellowBSel) && !mouseD) {
    var ball = createSprite(257 + (32 * col), 32 + (48 * row));
    ball.setAnimation("yellowB");
    ball.scale = 0.3;
    ball.rotation = 4;
    eval("row" + row + ".add(ball);");
    
    col++;
  }
  else if (mousePressedOver(orangeBSel) && !mouseD) {
    var ball = createSprite(257 + (32 * col), 32 + (48 * row));
    ball.setAnimation("orangeB");
    ball.scale = 0.3;
    ball.rotation = 5;
    eval("row" + row + ".add(ball);");
    
    col++;
  }
}

// Check Button
function checkF() {
  if (col == 4 && eval("row" + row + ".get(0).rotation == solG.get(0).rotation") && eval("row" + row + ".get(1).rotation == solG.get(1).rotation") && eval("row" + row + ".get(2).rotation == solG.get(2).rotation") && eval("row" + row + ".get(3).rotation == solG.get(3).rotation")) {
    solG.get(0).visible = true;
    solG.get(1).visible = true;
    solG.get(2).visible = true;
    solG.get(3).visible = true;
    
    win = true;
  }
  else if (col == 4) {
    var temp1 = solG.get(0).rotation;
    var temp2 = solG.get(1).rotation;
    var temp3 = solG.get(2).rotation;
    var temp4 = solG.get(3).rotation;
    
    for (var i = 0; i < 4; i++) {
      if (eval("solG.get(i).rotation == row" + row + ".get(i).rotation")) {
        solG.get(i).rotation = -1;
        eval("row" + row + ".get(i).rotation = -1");
        var black = createSprite(200, -200);
        black.setAnimation("blackB");
        black.scale = 0.2;
        eval("hint" + row + ".add(black)");
      }
    }
    
    for (var i = 0; i < 4; i++) {
      if (solG.get(i).rotation != -1) {
        for (var j = 0; j < 4; j++) {
          if (eval("solG.get(i).rotation == row" + row + ".get(j).rotation")) {
            var white = createSprite(200, -200);
            white.setAnimation("whiteB");
            white.scale = 0.2;
            eval("hint" + row + ".add(white)");
            break;
          }
        }
      }
    }
    
    for (var i = 0; i < eval("hint" + row + ".length"); i++) {
      eval("hint" + row + ".get(i).x = 379");
      eval("hint" + row + ".get(i).y = 15 + (i * 11) + (row * 48)");
    }
    
    solG.get(0).rotation = temp1;
    solG.get(1).rotation = temp2;
    solG.get(2).rotation = temp3;
    solG.get(3).rotation = temp4;
    
    if (row == 7) {
      solG.get(0).visible = true;
      solG.get(1).visible = true;
      solG.get(2).visible = true;
      solG.get(3).visible = true;
    
      lose = true;
    }
    else {
      row++;
      col = 0;
    }
  }
}

// Delete Button
function delF() {
  eval("row" + row + ".destroyEach()");
  col = 0;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
