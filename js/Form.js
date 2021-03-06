class Form{
  constructor(){
     this.input = createInput("Name");
     this.button = createButton('Play');
     this.greeting = createElement('h2');
     this.reset = createButton('Reset');
  }
  hide() {
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
  }
  display() {
      this.input.position(260,300);
      this.input.style('width', '250px');
      this.input.style('height', '40px');
      this.button.position(310,525);
      this.button.style('width', '124px');
      this.button.style('height', '84px');
      this.reset.position(480, 634);
      this.reset.style('width', '60px');
      this.reset.style('height', '30px');

      this.button.mousePressed(() => {
          this.input.hide();
          this.button.hide();
          this.reset.hide();
          player.name = this.input.value();
          playerCount += 1;
          player.index = playerCount;
          player.update();
          player.updateCount(playerCount);
          this.greeting.html("Hello " + player.name)
          this.greeting.position(400,250);
          this.greeting.style('color', 'white');
          this.greeting.style('font-size', '100px');
      });

      this.reset.mousePressed(() => {
          player.updateCount(0);
          game.update(0);
          //this.name = "";
          //this.score = 0;
      });

  }
}