<slot>
    <div class="container">
        <h1 class="header">LIVEEEEE</h1>
        
    </div>
</slot>

<style>
	.header {
		color: whitesmoke;
		font-size: 5em;
		position: fixed;
		z-index: 99;
	}
	.container {
        position: absolute;
        z-index: 99;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 90vh;
		width: 60vw;
		top: 0;
		left: 20%;
        padding: 2em;
		margin: 1rem;
		border-radius: 0.5em;
		background-color: rgba(37, 105, 182, 0.75);
	}
</style>