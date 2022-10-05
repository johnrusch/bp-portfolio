<script>
	import { fly, fade } from 'svelte/transition';
	import Item from './item.svelte';
	export let items, clickOutside, handleClose, contact;
</script>

<slot>
	{#if !contact}
		<div
			use:clickOutside
			on:outclick={handleClose}
			in:fly={{ y: -200, duration: 1000 }}
			out:fade={{ duration: 250 }}
			class="container"
			class:mobile={window.innerWidth <= 515}
			class:tablet={window.innerWidth > 515 && window.innerWidth <= 1050}
			class:default={window.innerWidth > 1050}
		>
			{#if items}
				{#each items as item}
					<Item class="text" {item} />
				{/each}
			{/if}
		</div>
	{:else}
		<div
			use:clickOutside
			on:outclick={handleClose}
			in:fly={{ y: -200, duration: 1000 }}
			out:fade={{ duration: 250 }}
			class="contact crt"
      class:mobile={window.innerWidth <= 515}
			class:tablet={window.innerWidth > 515 && window.innerWidth <= 1050}
			class:default={window.innerWidth > 1050}
		>
			<h2 style="font-family: Menlo;">All inquiries can be sent to</h2>
			<br />
			<h2 id="contact-email" class="crt">tboonep@gmail.com</h2>
		</div>
	{/if}
</slot>

<style>
  #contact-email {
    color: #fc804d;
    font-family: 'Menlo';
  }

  #contact-email:hover {
    cursor: pointer;
  }

	.container {
		position: absolute;
		z-index: 99;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: flex-start;
		height: auto;
		width: 60vw;
		top: 0;
		left: 20%;
		bottom: 0;
		padding: 1.5rem;
		margin: 1rem;
		border-radius: 0.5em;
		background-color: rgba(0, 0, 0, 0.75);
		overflow-y: scroll;
		overflow-x: hidden;
	}

  .tablet, .mobile {
    left: 0;
		right: 0;
		z-index: 90;
		margin-left: auto;
		margin-right: auto;
  }

	.container.tablet {
		width: 85%;
		bottom: 13%;
	}

	.container.mobile {
		width: 75%;
		bottom: 10%;
	}

	.contact {
		color: #ffffff;
		position: absolute;
		z-index: 99;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: flex-start;
		height: auto;
		width: 60vw;
		top: 40%;
		left: 20%;
		/* bottom: 0; */
		padding: 1.5rem;
		margin: 1rem;
		border-radius: 0.5em;
		background-color: rgba(0, 0, 0, 0.75);
		overflow-y: scroll;
		overflow-x: hidden;
	}

  .contact.tablet {
    left: 0;
    right: 0;
    margin: auto;
  }

  .contact.mobile {
    left: 0;
    right: 0;
    margin: auto;
  }

	@keyframes flicker {
		0% {
			opacity: 0.27861;
		}
		5% {
			opacity: 0.34769;
		}
		10% {
			opacity: 0.23604;
		}
		15% {
			opacity: 0.27861;
		}
		20% {
			opacity: 0.18128;
		}
		25% {
			opacity: 0.23604;
		}
		30% {
			opacity: 0.26559;
		}
		35% {
			opacity: 0.37288;
		}
		40% {
			opacity: 0.26559;
		}
		45% {
			opacity: 0.24387;
		}
		50% {
			opacity: 0.20313;
		}
		55% {
			opacity: 0.08594;
		}
		60% {
			opacity: 0.20313;
		}
		65% {
			opacity: 0.37288;
		}
		70% {
			opacity: 0.36108;
		}
		75% {
			opacity: 0.37288;
		}
		80% {
			opacity: 0.24387;
		}
		85% {
			opacity: 0.20313;
		}
		90% {
			opacity: 0.24387;
		}
		95% {
			opacity: 0.36108;
		}
		100% {
			opacity: 0.24387;
		}
	}
  @keyframes textShadow {
    0% {
      text-shadow: 0.4389924193300864px 0 1px rgba(0,30,255,0.5), -0.4389924193300864px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    5% {
      text-shadow: 2.7928974010788217px 0 1px rgba(0,30,255,0.5), -2.7928974010788217px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    10% {
      text-shadow: 0.02956275843481219px 0 1px rgba(0,30,255,0.5), -0.02956275843481219px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    15% {
      text-shadow: 0.40218538552878136px 0 1px rgba(0,30,255,0.5), -0.40218538552878136px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    20% {
      text-shadow: 3.4794037899852017px 0 1px rgba(0,30,255,0.5), -3.4794037899852017px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    25% {
      text-shadow: 1.6125630401149584px 0 1px rgba(0,30,255,0.5), -1.6125630401149584px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    30% {
      text-shadow: 0.7015590085143956px 0 1px rgba(0,30,255,0.5), -0.7015590085143956px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    35% {
      text-shadow: 3.896914047650351px 0 1px rgba(0,30,255,0.5), -3.896914047650351px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    40% {
      text-shadow: 3.870905614848819px 0 1px rgba(0,30,255,0.5), -3.870905614848819px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    45% {
      text-shadow: 2.231056963361899px 0 1px rgba(0,30,255,0.5), -2.231056963361899px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    50% {
      text-shadow: 0.08084290417898504px 0 1px rgba(0,30,255,0.5), -0.08084290417898504px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    55% {
      text-shadow: 2.3758461067427543px 0 1px rgba(0,30,255,0.5), -2.3758461067427543px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    60% {
      text-shadow: 2.202193051050636px 0 1px rgba(0,30,255,0.5), -2.202193051050636px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    65% {
      text-shadow: 2.8638780614874975px 0 1px rgba(0,30,255,0.5), -2.8638780614874975px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    70% {
      text-shadow: 0.48874025155497314px 0 1px rgba(0,30,255,0.5), -0.48874025155497314px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    75% {
      text-shadow: 1.8948491305757957px 0 1px rgba(0,30,255,0.5), -1.8948491305757957px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    80% {
      text-shadow: 0.0833037308038857px 0 1px rgba(0,30,255,0.5), -0.0833037308038857px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    85% {
      text-shadow: 0.09769827255241735px 0 1px rgba(0,30,255,0.5), -0.09769827255241735px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    90% {
      text-shadow: 3.443339761481782px 0 1px rgba(0,30,255,0.5), -3.443339761481782px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    95% {
      text-shadow: 2.1841838852799786px 0 1px rgba(0,30,255,0.5), -2.1841838852799786px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    100% {
      text-shadow: 2.6208764473832513px 0 1px rgba(0,30,255,0.5), -2.6208764473832513px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
  }
  .crt::after {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(18, 16, 16, 0.1);
    opacity: 0;
    z-index: 2;
    pointer-events: none;
    animation: flicker 0.2s infinite;
  }
  .crt::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    z-index: 2;
    background-size: 100% 2px, 3px 100%;
    pointer-events: none;
  }
  .crt {
    animation: textShadow 1.6s infinite;
  }
</style>
