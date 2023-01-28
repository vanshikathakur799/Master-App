class Home{
  constructor(){
    this.state = {
      teamsRank: [],
    };
  }
    
    display(){
        this.input = createInput("").attribute("placeholder", "Type here...");
        this.input.position(width / 2 - 110, height / 2 );
        this.input.class("customInput");

        this.enterButton = createButton("Play");
        this.enterButton.position(width / 2 - 90, height / 2 + 60);
        this.enterButton.class("customButton");

        this.greeting = createElement("h2");
        this.greeting.position(width / 2 - 350, height / 2 - 110);
        this.greeting.class("greeting");
        var message = `Type the number of buzzers to be created...`;
        this.greeting.html(message);
      }
      
      mousePress(){
        this.resetButton = createButton("Reset");
        this.resetButton.position(width / 2 - 200, height / 2 + 230);
        this.resetButton.class("resetButton");

        this.greeting2 = createElement("h2");
        this.greeting2.position(width / 2 - 200, height / 2 - 110);
        this.greeting2.class("team");
        var message = `Team`;
        this.greeting2.html(message);

        this.backButton = createButton('< =');
        this.backButton.position(width / 2 - 670 ,height - 610);
        this.backButton.class("backButton");

        this.greeting2 = createElement("h2");
        this.greeting2.position(width / 2 - 50, height / 2 - 180);
        this.greeting2.class("result");
        var message = `Result`;
        this.greeting2.html(message);
      }

      getState() {
        var teams = [];
        var gameStateRef = database.ref("Teams/");
        gameStateRef.on("value", function(data) {
          var teamList = data.val();
      for (var team in teamList) {
        if (teamList[team]['isBuzzerPressed'] === true) {
          teamList[team]['teamName'] = team;
          teams.push(teamList[team]);
        }
      }
      teams.sort(function (team1, team2) {
        return team1.timestamp - team2.timestamp;
      });
      this.setState({ teamsRank: teams });
      teams = [];
          
        });
    }

}