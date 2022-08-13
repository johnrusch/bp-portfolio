
    <video autoplay muted loop id="bg-video">
        <source src="https://s3.us-east-2.amazonaws.com/bp.house/imh+looped.mp4" type="video/mp4" />
    </video>
    <div id="tab-container">
        <div id="tabs">
            <h1 class="tab-button">Video</h1>
            <h1 class="tab-button">Audio</h1>
            <h1 class="tab-button">Live</h1>
            <h1 class="tab-button">Contact</h1>
        </div>
    </div>

<style>
    #bg-video {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  min-width: 100%;
  min-height: 100%;
  object-fit: fill;
}

#tab-container {
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 18vw;
    top: 0;
    left: 0;
}

#tabs {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2em;
    margin-top: 1em;
    margin-left: 1em;
    margin-bottom: 1em;
    border-radius: 0.5em;
    background-color: rgba(37, 105, 182, 0.75);
}

.tab-button{
    font-family: 'Rubik';
    color: #ffffff;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    box-shadow:inset -1px -5px 7px 0px #10506e;
	background:linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
	background-color:#2dabf9;
	border-radius:8px;
    border:1px solid #0b0e07;
    padding: 9px 23px;
    text-decoration: none;
    text-shadow:0px 0px 0px #263666;
}

.tab-button:hover {
    color: rgb(0, 0, 0, 1);
    cursor: pointer;
    background:linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
	background-color:#0688fa;
}

</style>