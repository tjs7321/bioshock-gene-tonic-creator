const plasmids = [
    {
        id: 1,
        title: {
            rapture: "Electro Bolt",
            columbia: "Shock Jockey"
        },
        tagline: {
            rapture: "Don't be a dolt, use electro bolt!",
            columbia: "The future of power!"
        },
        effect: {
            rapture: "Sends a jolt of electricity from your fingertips",
            columbia: "Sends a jolt of electricity from your fingertips"
        },
        image: {
            rapture: "https://static.wikia.nocookie.net/bioshock/images/3/35/Electro.png/revision/latest?cb=20100125014940",
            columbia: "https://static.wikia.nocookie.net/bioshock/images/f/fe/ShockJockeyIcon.png/revision/latest/scale-to-width-down/250?cb=20130411040145"
        }
    },
    {
        id: 2,
        title: {
            rapture: "Incinerate",
            columbia: "Devil's Kiss"
        },
        tagline: {
            rapture: "Don't wait, incinerate!",
            columbia: "Light the way!"
        },
        effect: {
            rapture: "Sets the target on fire",
            columbia: "Throws a flaming projectile which detonates"
        },
        image: {
            rapture: "https://static.wikia.nocookie.net/bioshock/images/6/6b/Inc.png/revision/latest?cb=20100125034122",
            columbia: "https://static.wikia.nocookie.net/bioshock/images/a/ad/DevilsKissIcon.png/revision/latest/scale-to-width-down/250?cb=20130411040144"
        }
    },
    {
        id: 3,
        title: {
            rapture: "Insect Swarm",
            columbia: "Murder of Crows"
        },
        tagline: {
            rapture: "Nothing clears the room like swarms of stinging bees",
            columbia: "Proven deterrent against hooligans"
        },
        effect: {
            rapture: "Sends a swarm of bees towards the target",
            columbia: "Sics a murder of crows on the target"
        },
        image: {
            rapture: "https://static.wikia.nocookie.net/bioshock/images/7/79/Insect.png/revision/latest?cb=20100125034618",
            columbia: "https://static.wikia.nocookie.net/bioshock/images/3/34/MurderOfCrowsIcon.png/revision/latest/scale-to-width-down/250?cb=20130411040144"
        }
    },
    {
        id: 4,
        title: {
            rapture: "Winter Blast",
            columbia: "Old Man Winter"
        },
        tagline: {
            rapture: "Give your foes the cold shoulder!",
            columbia: "Stop 'em cold!"
        },
        effect: {
            rapture: "Temporarily freezes the target",
            columbia: "Throws a ball of dry ice at the target"
        },
        image: {
            rapture: "https://static.wikia.nocookie.net/bioshock/images/0/01/Cryo.png/revision/latest?cb=20100125035304",
            columbia: "https://static.wikia.nocookie.net/bioshock/images/f/f9/Old_Man_Winter_Icon.png/revision/latest?cb=20131114030213"
        }
    },
    {
        id: 5,
        title: {
            rapture: "Cyclone Trap",
            columbia: "Bucking Bronco"
        },
        tagline: {
            rapture: "Teach them a lesson they'll never forget!",
            columbia: "Break even the curliest wolf!"
        },
        effect: {
            rapture: "Spawns a stationary mini tornado that flings enemies in the air",
            columbia: "Cracks the ground and sends enemies in the air"
        },
        image: {
            rapture: "https://static.wikia.nocookie.net/bioshock/images/a/a9/Trap.png/revision/latest?cb=20100125033540",
            columbia: "https://static.wikia.nocookie.net/bioshock/images/e/ea/BuckingBroncoIcon.png/revision/latest/scale-to-width-down/250?cb=20130411040143"
        }
    },
    {
        id: 6,
        title: {
            rapture: "Hypnotize",
            columbia: "Possession"
        },
        tagline: {
            rapture: "Confuse your foes into attacking each other!",
            columbia: "Any stallion can be tamed!"
        },
        effect: {
            rapture: "Causes the target to attack any nearby enemies",
            columbia: "Causes the target to attack any nearby enemies"
        },
        image: {
            rapture: "https://static.wikia.nocookie.net/bioshock/images/9/9b/Befriend.png/revision/latest?cb=20100125033830",
            columbia: "https://static.wikia.nocookie.net/bioshock/images/2/23/PossessionIcon.png/revision/latest/scale-to-width-down/250?cb=20130411040144"
        }
    },
    {
        id: 7,
        title: {
            rapture: "Sonic Boom",
            columbia: "Undertow"
        },
        tagline: {
            rapture: "When push comes to shove!",
            columbia: "Wash away your enemies!"
        },
        effect: {
            rapture: "Throws all targets in front of the user back with a burst of air",
            columbia: "Throws all targets in front of the user back with a watery tendril"
        },
        image: {
            rapture: "https://static.wikia.nocookie.net/bioshock/images/f/fc/97.png/revision/latest?cb=20100113051545",
            columbia: "https://static.wikia.nocookie.net/bioshock/images/a/ac/UndertowIcon.png/revision/latest/scale-to-width-down/250?cb=20130411040145"
        }
    },
    {
        id: 8,
        title: {
            rapture: "Aero Dash",
            columbia: "Charge"
        },
        tagline: {
            rapture: "Run like the wind!",
            columbia: "Hit hard, hit fast!"
        },
        effect: {
            rapture: "Pulls the user towards a target at ramming speed",
            columbia: "Pulls the user towards a target at ramming speed"
        },
        image: {
            rapture: "https://static.wikia.nocookie.net/bioshock/images/f/fa/Areo_Dash.png/revision/latest?cb=20110217090657",
            columbia: "https://static.wikia.nocookie.net/bioshock/images/9/9a/ChargeIcon.png/revision/latest/scale-to-width-down/250?cb=20130411040144"
        }
    },
]