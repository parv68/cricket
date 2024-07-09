const teams = {
    India: {
      team: "India",
      sport: "Cricket",
      year: [1983, 2007, 2011, 2024],
      isWorldCupWinner: true,
      headCoach: {
        coachName: "Rahul Dravid",
        matches: 70,
      },
      players: [
        {
          name: "Rohit Sharma",
          position: "opner",
          number: 45,
          isCaptain: true,
          nickname: null,
        },
        {
          name: "Virat Kohli",
          position: "opner",
          number: 18,
          isCaptain: false,
          nickname: "Chiku",
        },
        {
          name: "Rishab Pant",
          position: "wicketkeeper",
          number: 18,
          isCaptain: false,
          nickname: null,
        },
        {
          name: "Surya Kumar Yadav",
          position: "batsman",
          number: 63,
          isCaptain: false,
          nickname: "SKY",
        },
        {
          name: "Hardik Pandaya",
          position: "all-rounder",
          number: 33,
          isCaptain: false,
          nickname: "Kunfu-Pandya",
        },
        {
          name: "Jasprit Bumrah",
          position: "bowler",
          number: 93,
          isCaptain: false,
          nickname: "boom-boom",
        },
        {
          name: "Ravindra Jadeja",
          position: "all-rounder",
          number: 8,
          isCaptain: false,
          nickname: "Jaddu",
        },
        {
          name: "Axar Patel",
          position: "all-rounder",
          number: 56,
          isCaptain: false,
          nickname: "Bapu",
        },
        {
          name: "Shivan Dube",
          position: "all-rounder",
          number: 59,
          isCaptain: false,
          nickname: null,
        },
        {
          name: "Arshdeep Singh",
          position: "bowler",
          number: 9,
          isCaptain: false,
          nickname:null,
        },
        {
          name: "Kuldeep Yadav",
          position: "bowler",
          number: 96,
          isCaptain: false,
          nickname:null,
        },
      ],
    },
    Australia: {
      team: "Australia",
      sport: "Cricket",
      year: [1987, 1999, 2003, 2007, 2015, 2023],
      isWorldCupWinner: true,
      headCoach: {
        coachName: "Justin Langer",
        matches: 50,
      },
      players: [
        {
          name: "David Wraner",
          position: "opner",
          number: 5,
          isCaptain: false,
          nickname: "warner",
        },
        {
          name: "Travis Head",
          position: "opner",
          number: 49,
          isCaptain: false,
          nickname: "head",
        },
        {
          name: "Mitchel Marsh",
          position: "all-rounder",
          number: 31,
          isCaptain: true,
          nickname: "Bull",
        },
        {
          name: "Glen Maxwell",
          position: "all-rounder",
          number: 47,
          isCaptain: false,
          nickname: "maxy",
        },
        {
          name: "Tim David",
          position: "batsman",
          number: 30,
          isCaptain: false,
          nickname: null,
        },
        {
          name: "Patrick Cummins",
          position: "all-rounder",
          number: 83,
          isCaptain: false,
          nickname: "pat",
        },
        {
          name: "Mitchel Starc",
          position: "bowler",
          number: 93,
          isCaptain: false,
          nickname: "starc",
        },
        {
          name: "Josh Hezlwood",
          position: "bowler",
          number: 2,
          isCaptain: false,
          nickname: null,
        },
        {
          name: "Adam Zampa",
          position: "opener",
          number: 49,
          isCaptain: false,
          nickname: "zampy",
        },
        {
          name: "Marcus Stoinis",
          position: "all-rounder",
          number: 74,
          isCaptain: false,
          nickname: null,
        },
        {
          name: "Mahtew Wade",
          position: "wicketkeeper",
          number: 49,
          isCaptain: false,
          nickname: null,
        },
        // Add other players here...
      ],
    },

     England: {
        team: "England",
        sport: "Cricket",
        year: [2019, 2022],
        isWorldCupWinner: true,
        headCoach:{
            coachName: "Mathew Matt",
            matches: "30"
        },
        players: [
          {
            name: "Joss Buttler",
            position: "opner",
            number: 18,
            isCaptain: true,
            nickname: "joss the boss", 
          },
          {
            name: "Phlip Salt",
            position: "opner",
            number: 89,
            isCaptain: false,
            nickname: "salty", 
          },
          {
            name: "Moin ali",
            position: "all-rounder",
            number: 8,
            isCaptain: false,
            nickname: "ali", 
          },
          {
            name: "Jhony Bairstrow",
            position: "wicketkeeper",
            number: 12,
            isCaptain: false,
            nickname: "jhonny", 
          },
          {
            name: "Harry Brook",
            position: "batsman",
            number: 90,
            isCaptain: false,
            nickname: "harry", 
          },
          {
            name: "Sam Curran",
            position: "all-rounder",
            number: 93,
            isCaptain: false,
            nickname: "sam", 
          },
          {
            name: "Liam Livingstone",
            position: "all-rounder",
            number: 47,
            isCaptain: false,
            nickname: null, 
          },
          {
            name: "Chris Jordan",
            position: "all-rounder",
            number: 38,
            isCaptain: false,
            nickname: null, 
          },
          {
            name: "Jofra Archer",
            position: "bowler",
            number: 67,
            isCaptain: false,
            nickname: "archer", 
          },
          {
            name: "Adil Rashid",
            position: "bowler",
            number: 45,
            isCaptain: false,
            nickname: null, 
          },
          {
            name: "Riley Topley",
            position: "bowler",
            number: 38,
            isCaptain: false,
            nickname: null, 
          },

        ]
     }
}

  Object.freeze(teams);
  
  const setTeamData = (team) => {
    const { sport, team: teamName, year, players, headCoach } = team;
    document.getElementById("sport").textContent = sport;
    document.getElementById("team").textContent = teamName;
    document.getElementById("year").textContent = year.join(", ");
    document.getElementById("head-coach").textContent = headCoach.coachName;
  
    const playerCards = document.getElementById("player-cards");
    playerCards.innerHTML = players
      .map(
        ({ name, position, number, isCaptain, nickname }) => `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname || "N/A"}</p>
        </div>
      `
      )
      .join("");
  };
  
  document.getElementById("teams").addEventListener("change", (e) => {
    setTeamData(teams[e.target.value]);
  });
  
  const playersDropdownList = document.getElementById("players");
  playersDropdownList.addEventListener("change", (e) => {
    const selectedTeam = document.getElementById("teams").value;
    const { players } = teams[selectedTeam];
    const playerCards = document.getElementById("player-cards");
    playerCards.innerHTML = "";
  
    switch (e.target.value) {
      case "nickname":
        setPlayerCards(players.filter((player) => player.nickname !== null));
        break;
      case "opner":
        setPlayerCards(players.filter((player) => player.position === "opner"));
        break;
      case "batsman":
        setPlayerCards(players.filter((player) => player.position === "batsman"));
        break;
      case "wicketkeeper":
        setPlayerCards(players.filter((player) => player.position === "wicketkeeper"));
        break;
      case "all-rounder":
        setPlayerCards(players.filter((player) => player.position === "all-rounder"));
        break;
      case "bowler":
        setPlayerCards(players.filter((player) => player.position === "bowler"));
        break;
      default:
        setPlayerCards(players);
    }
  });
  
  const setPlayerCards = (arr) => {
    const playerCards = document.getElementById("player-cards");
    playerCards.innerHTML = arr
      .map(
        ({ name, position, number, isCaptain, nickname }) => `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname || "N/A"}</p>
        </div>
      `
      )
      .join("");
  };
  
  // Set initial team data to India
  setTeamData(teams["India"]);
  