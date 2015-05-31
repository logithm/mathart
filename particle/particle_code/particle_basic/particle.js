function Particle(ctx, x, y) {
  this.ctx = ctx;
  this.x = x;
  this.y = y;
  this.vx = Math.random();
  this.vy = Math.random();
  this.radius = Math.random() * 2;
  this.color = 'rgba(0,0,0,0.2)';
}

Particle.prototype.update = function () {
  this.x = this.x + this.vx;
  this.y = this.y + this.vy;
};

Particle.prototype.render = function () {
  var ctx = this.ctx;
  var radius = this.radius;//粒子的半径
  ctx.beginPath();//开始画图
  ctx.fillStyle = this.color;//设置填充色
  ctx.arc(this.x - radius, this.y - radius, radius, 0, Math.PI * 2);//画一个圆形
  ctx.fill();//填颜色
  ctx.closePath();//结束绘图
};