import '../App.css'

function Navbar() {
	return (
		<div class="topnav">
			<ul>
				<a class="active" href="/"> Home</a>
				<a href="/weather"> Weather </a>
				<a href="/cryptos"> Cryptos </a>
			</ul>
		</div>
	);
}

export default Navbar;