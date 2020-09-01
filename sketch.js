var hr,s,m,hrAngle,sAngle,mAngle


function setup() {
  createCanvas(1600,800);
  angleMode(DEGREES)
}

function draw() {
  background("black"); 

  translate(800,400)
  rotate(-90)

  hr=hour()
  s=second()
  m=minute()
  
  hrAngle=map(hr%12,0,12,0,360)
  sAngle=map(s,0,60,0,360)
  mAngle=map(m,0,60,0,360)
  strokeWeight(7)

  push()

  stroke("red")
  rotate(sAngle)
  line(0,0,100,0)
  
  pop()
  

  push()
  stroke("green")
  rotate(mAngle)
  line(0,0,75,0)
  pop()
  
  push()
  stroke("blue")
  rotate(hrAngle)
  line(0,0,50,0)
  pop()

  strokeWeight(10)
  stroke("red")
  noFill()
  arc(0,0,300,300,0,sAngle)
  
  stroke("green")
  noFill()
  arc(0,0,280,280,0,mAngle)

  stroke("blue")
  noFill()
  arc(0,0,260,260,0,hrAngle)
}