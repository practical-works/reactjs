ReactDOM.render(
	React.createElement(
		"h1", { "style": { "color": "blue" } }, "hello world :D"
	),
	document.getElementById("root")
);
//==================================================
ReactDOM.render(
	React.createElement(
		"h1", { "style": { "color": "blue" } }, 
		React.createElement("i", null, "hello world :D")
	),
	document.getElementById("root")
);
//==================================================
ReactDOM.render(
	<h1 className="ok">Waw Hello There ! :O</h1>,
	document.querySelector("#root")
);
//==================================================
const Love = (props) => <h1>I Love {props.personName} {props.degree} ♥</h1>;
ReactDOM.render(
	<Love personName="Houda" degree="very much" />, 
	document.querySelector("#root")
);
//==================================================
const Ok = ({id, title}) => <h1>#{id} • {title}</h1>;
ReactDOM.render(
	<Ok id="17" title="Epic" />, 
	document.querySelector("#root")
);
//==================================================
const GoogleLink = ({ query }) => 
	<a href={"https://google.com/search?q=" + query} target="_blank">
		{query.toUpperCase()}
	</a>;
const MainGUI = () => (
		<div>
			<GoogleLink query="ambratolm"></GoogleLink><br/>
			<GoogleLink query="wracurd"></GoogleLink><br/>
			<GoogleLink query="kutu queen"></GoogleLink><br/>
		</div>
	);
ReactDOM.render(<MainGUI/>, document.querySelector("#root"));
//==================================================
class MainLook extends React.Component {
	x = "some x stuff";
	state = {
		connected: false
	};
	connect = () => this.setState({ connected: true });
	disconnect = () => this.setState({ connected: false });
	// connect = () => this.state.connected = true;
	// disconnect = () => this.state.connected = false;
	render() {
		return (
			<div>
				<button onClick={!this.state.connected ? this.connect : this.disconnect}>
					{!this.state.connected ? "CONNECT" : "DISCONNECT" }
				</button>
				<h1>Status: { this.state.connected ? "ON" : "OFF" }</h1>
				<p>==================================================</p>
				<h2>{this.x}</h2>
				<p>==================================================</p>
				<h1>♦ <GoogleLink query="castlevania"></GoogleLink><br/></h1>
				<h1>♦ <GoogleLink query="metroid"></GoogleLink><br/></h1>
				<h1>♦ <GoogleLink query="prince of persia"></GoogleLink><br/></h1>
				<h1>♦ <GoogleLink query="assassin's creed"></GoogleLink><br/></h1>
				<h1>♦ <GoogleLink query="league of legends"></GoogleLink><br/></h1>
			</div>
		);
	};
}
ReactDOM.render(<MainLook/>, document.querySelector("#root"));
//==================================================
const ConnectionMenu = ({ connected }) => 
	(<div>
		{ 
			!connected ? 
			<button onClick={() => connected=true}>► Connect Now !</button>
			:
			<a href="#" onClick={() => connected=false}>Diconnect</a>
		}
	</div>);
ReactDOM.render(<ConnectionMenu connected={true}/>, document.getElementById("root"));
//==================================================
const names = [ "soma", "mina", "arikado", "yoko", "graham", "julius" ];
const ULComp = ({list}) =>
	<ul>
		{ list.map((item, index) => <li key={index}>{item}</li>) }
	</ul>;
ReactDOM.render(<ULComp list={names}/>, document.querySelector("#root"));
//==================================================
const players = [ 
	{ id:98, name:"Fox", level:30, gold:1000 },
	{ id:99, name:"Vixen", level:7, gold:5000 },
	{ id:100, name:"Chacal", level:1, gold:7000 }
];
const PlayersListComp = ({players}) =>
	<ul style={{ fontSize: "200%", color: "blue" }}>
		{ 
			players.map(
				(player) => 
					<li key={"♦" + player.id.toString()}>
						#{player.id} ► {player.name} reached level {player.level} 
						and has ${player.gold}.
					</li>
			) 
		}
	</ul>;
ReactDOM.render(<PlayersListComp players={players}/>, document.querySelector("#root"));
//==================================================
//==================================================
//==================================================
//==================================================
//==================================================
//==================================================
//==================================================
//==================================================
//==================================================
//==================================================
//==================================================