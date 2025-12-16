import React, {useState} from "react";
import "./App.css";
import tottenham from "./img/tottenham.png";
import wolverhampton from "./img/wolverhampton.png";
import westham from "./img/westham.png";
import liverpool from "./img/liverpool.png";
import astonvilla from "./img/astonvilla.png";
import leicester from "./img/leicester.png";
import arsenal from "./img/arsenal.png";
import manU2 from "./img/manU2.png";

const teams = [
    {
        id: 5,
        name: "Leicester City",
        nickname: "Foxes",
        founded: 1900,
        logo: leicester,
        groundname: 'King Power Stadium',
        legends: [
            {name: 'Gordon Banks', clubs: ['Chesterfield', 'Stoke City']},
            {name: 'Peter Shilton', clubs: ['Coventry', 'Derby County', 'Wimbledon']},
            {name: 'Steve Walsh', clubs: ['Norwich City', 'Tamworth', 'Wigan Athletic']}
        ],
        bgcolor: '#003090',
        fgcolor: '#fdbe11',
        namecolor: 'white'
    },
    {
        id: 1,
        name: "Tottenham Hotspur",
        nickname: "Spurs",
        founded: 1899,
        logo: tottenham,
        groundname: 'White Hart Lane',
        legends: [
            {name: 'Glenn Hoddle', clubs: ['Monaco', 'Swindon Town']},
            {name: 'Chris Waddle', clubs: ['Marseille', 'Sheffield', 'Newcastle']},
            {name: 'Paul Gascoigne', clubs: ['Lazio', 'Rangers', 'Everton', 'Burnley']},
            {name: 'Gary Mabutt', clubs: ['Bristol Rovers']},
            {name: 'Ardiles', clubs: ['Belgrano', 'Huracán', 'Swindon Town', 'Fort Lauderdale']},
            {name: 'Gary Lineker', clubs: ['Leicester City', 'Everton', 'Barcelona']}
        ],
        bgcolor: 'white',
        fgcolor: '#132257'
    },
    {
        id: 2,
        name: "Wolverhampton",
        nickname: "Wolves",
        founded: 1880,
        logo: wolverhampton,
        groundname: 'Molineux Stadium',
        legends: [
            {name: 'Paul Ince', clubs: ['Inter', 'Liverpool', 'Manchester United', 'Swindon Town']},
            {name: 'Steve Bull', clubs: ['Hereford', 'Tipton Town']}
        ],
        bgcolor: '#231F20',
        fgcolor: '#FDB913'
    },
    {
        id: 3,
        name: "West Ham United",
        nickname: "Hammers",
        founded: 1900,
        logo: westham,
        groundname: 'London Stadium',
        legends: [
            {name: 'Martin Peters', clubs: ['Gorleston', 'Norwich City', 'Tottenham Hotspur']},
            {name: 'Bobby Moore', clubs: ['Fulham', 'Eastern Athletic', 'Seattle Sounders', 'Herning Fremad']},
            {name: 'Trevor Brooking', clubs: ['Cork City', 'Kelmscott']},
            {name: 'Geoff Hurst', clubs: ['West Bromwich', 'Telford United']}
        ],
        bgcolor: '#7A263A',
        fgcolor: '#F3D459',
        namecolor: '#1bb1e7'
    },
    {
        id: 4,
        name: "Aston Villa",
        nickname: "Villians",
        founded: 1900,
        logo: astonvilla,
        groundname: 'Villa Park',
        legends: [
            {name: 'Luc Nilis', clubs: ['Anderlecht', 'PSV', 'Winterslag']},
            {name: 'Paul Mc Grath', clubs: ['Derby County', 'St. Patricks Athletic']}
        ],
        bgcolor: '#670e36',
        fgcolor: '#fee505',
        namecolor: '#95bfe5'
    },
    {
        id: 6,
        name: "Arsenal",
        nickname: "Gunners",
        founded: 1900,
        logo: arsenal,
        groundname: 'Highbury',
        legends: [
            {name: 'Thierry Henri', clubs: ['AS Monaco']},
            {name: 'Dennis Bergkamp', clubs: ['Ajax']},
            {name: 'Patrick Vieira', clubs: ['Cannes', 'Juventus']}
        ],
        bgcolor: '#DB0007',
        fgcolor: 'white',
        namecolor: '#9C824A'
    },
    {
        id: 7,
        name: "Manchester United",
        nickname: "Red Devils",
        founded: 1900,
        logo: manU2,
        groundname: 'Theatre of Dreams',
        legends: [
            {
                name: 'George Best',
                clubs: ['Brisbane Lions', 'Los Angeles Aztecs', 'Fulham', 'Hibernian', 'Cork Celtic', 'Dunstable Town', 'Hibernian']
            },
            {name: 'Bobby Charlton', clubs: ['Blackford City', 'Preston North End', 'Waterford']},
            {name: 'Dennis Law', clubs: ['Huddersfields Town', 'Torino']},
            {name: 'Norman Whiteside', clubs: ['Everton']}
        ],
        bgcolor: '#DA291C',
        fgcolor: 'black',
        namecolor: 'black'
    },
    {
        id: 8,
        name: "Liverpool",
        nickname: "Reds",
        founded: 1900,
        logo: liverpool,
        groundname: 'Anfield',
        legends: [
            {name: 'Jan Mölby', clubs: ['Ajax', 'Kolding', 'Swansea City']},
            {name: 'John Barnes', clubs: ['Charlton Athletic', 'Newcastle', 'Sudbury Court', 'Watford']},
            {name: 'Kevin Keegan', clubs: ['Hamburger S.V.', 'Southampton', 'Blacktown City']},
            {name: 'Ronnie Whelan', clubs: ['Home Fram', 'Southend United']},
            {name: 'Kenny Dalglish', clubs: ['Celtic']},
            {name: 'Phil Neal', clubs: ['Bolton Wanderers', 'Northampton Town']},
            {name: 'Steve Nicol', clubs: ['Ayr United', 'Notts County', 'Sheffield', 'Doncaster Rovers']},
            {name: 'Graeme Souness', clubs: ['Middlesborough', 'Sampdoria', 'Rangers']},
        ],
        bgcolor: '#c8102E',
        fgcolor: '#F6EB61',
        namecolor: 'white'
    },
];

function App() {
    return (
        <div className="app">
            <h1>Engelse voetbalclubs</h1>
            <div className="team-container">
                {teams.map((team) => (
                    <div key={team.id} className="team-card" style={{background: team.bgcolor, color: team.fgcolor}}>
                        <div className="team-header">
                            <img className="team-logo" src={team.logo} alt={team.name}/>
                            <h2 style={{color: team.namecolor}}>{team.name}</h2>
                        </div>
                        <p><strong>Nickname:</strong> {team.nickname}</p>
                        <p><strong>Founded:</strong> {team.founded}</p>
                        <p><strong>Ground:</strong> {team.groundname}</p>
                        <Legends legends={team.legends}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Legends({legends}) {
    return <>
        <h4>Legends</h4>
        <Legend legends={legends}/>
    </>
}

function Legend({legends}) {
    const [idx, setIdx] = useState(0);
    const [indeks, setIndeks] = useState(0);

    return (
        <div>
            <div className="legend-panel">
                <button onClick={() => {
                    setIdx(idx > 0 ? idx - 1 : legends.length - 1);
                    setIndeks(0);
                }}>
                    &lt;
                </button>
                <div className="legend-info">
                    <p>{legends[idx].name}</p>
                </div>
                <button onClick={() => {
                    setIdx(idx < legends.length - 1 ? idx + 1 : 0);
                    setIndeks(0);
                }}>
                    &gt;
                </button>
            </div>
            <h4>Other clubs</h4>
            <div className="club-panel">
                <button onClick={() => setIndeks(indeks > 0 ? indeks - 1 : legends[idx].clubs.length - 1)}>
                    &lt;
                </button>
                <div className="club-info">
                    <p>{legends[idx].clubs[indeks]}</p>
                </div>
                <button onClick={() => setIndeks(indeks < legends[idx].clubs.length - 1 ? indeks + 1 : 0)}>
                    &gt;
                </button>
            </div>
        </div>
    );
}

export default App;
