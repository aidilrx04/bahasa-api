<script>
	let host = 'http://bahasa-api.vercel.app';
	const GITHUB_REPO_URL = 'https://github.com/aidilrx04/bahasa-api';
</script>

<svelte:head>
	<meta name="google-site-verification" content="k02xarkW9i_LIXjSEX--j2KwfpENd4rqRuau9ynMhkc" />
</svelte:head>

<main>
	<h1>Welcome to BahasaApi</h1>
	<p>Welcome to Bahasa API. A simple API built using SvelteKit</p>

	<section>
		<div>
			<h2>How to use</h2>

			<p>
				The base API url point <code
					><a href="/api/word?length=10&amount=10&order=random"
						>{host}/api/word?length=10&amount=10&amp;order=random</a
					>
				</code>
			</p>

			<h3>Parameter</h3>
			<p>Heres are available parameters to fetch the words</p>
			<ul>
				<li><a href="#param-length">Length</a></li>
				<li><a href="#param-amount">Amount</a></li>
				<li><a href="#param-order">Order</a></li>
			</ul>
		</div>
	</section>

	<section>
		<h2>Length Parameter</h2>
		<p>
			<code>length</code> is used to fetch words with specific amount of character length.
			<br />
			<b>Default: </b> <code>999999999</code>
			<br />
			<b>E.g.</b>
			<br />
			<code><a href="/api/word/?length=10">{host}/api/word?length=10</a></code> with return any words
			that is less or equal than 10 characters in length
		</p>
	</section>

	<section>
		<h2>Amount Parameter</h2>
		<p>
			<code>amount</code> is used to fetch specific amount of words
			<br />
			<b>Default: </b> <code>10</code>
			<br />
			<b>E.g.</b>
			<code>
				<a href="/api/word?amount=20">{host}/api/word?amount=20</a>
			</code> will return 20 words from database
		</p>
	</section>

	<section>
		<h2>Order Parameter</h2>
		<p>
			<code>order</code> is used to fetch words in a specific order
			<br />
			<b>Available Types: </b> <code>asc</code> for ascending order, <code>desc</code> from
			descending order, <code>random</code> for a random order
			<br />
			<b>Default: </b> <code>random</code>
			<br />
			<b>E.g</b>
			<code>
				<a href="/api/word?order=desc">{host}/api/word?order=desc</a>
			</code> will return words in descending order based on the characters of the wordss
		</p>
	</section>

	<section>
		<h2>More...</h2>
		<p>
			One or more of these parameter can be combined to build a complex query based on what you
			need. If you found any error or problem using this application, please report it to the <a
				href={GITHUB_REPO_URL}>{GITHUB_REPO_URL}</a
			>
		</p>
	</section>
</main>

<footer>2022 aidilrx04, built using <a href="kit.svelte.dev">SvelteKit</a></footer>
