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
            rapture: "https://static.wikia.nocookie.net/bioshock/images/3/35/Electro.png",
            columbia: "https://static.wikia.nocookie.net/bioshock/images/f/fe/ShockJockeyIcon.png"
        },
        video:{
            rapture: "https://www.youtube.com/embed/eqLSZGRJDjc",
            columbia: "https://www.youtube.com/embed/rPM11kJPDQo"
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
            rapture: "https://static.wikia.nocookie.net/bioshock/images/6/6b/Inc.png",
            columbia: "https://static.wikia.nocookie.net/bioshock/images/a/ad/DevilsKissIcon.png"
        },
        video:{
            rapture: "https://www.youtube.com/embed/NaLQNRdH0Xw",
            columbia: "https://www.youtube.com/embed/8yVmueGn2PE"
        }
    },
    {
        id: 3,
        title: {
            rapture: "Insect Swarm",
            columbia: "Murder of Crows"
        },
        tagline: {
            rapture: "Nothing clears the room like a swarm of stinging bees!",
            columbia: "Proven deterrent against hooligans!"
        },
        effect: {
            rapture: "Sends a swarm of bees towards the target",
            columbia: "Sics a murder of crows on the target"
        },
        image: {
            rapture: "https://static.wikia.nocookie.net/bioshock/images/7/79/Insect.png",
            columbia: "https://static.wikia.nocookie.net/bioshock/images/3/34/MurderOfCrowsIcon.png"
        },
        video:{
            rapture: "https://www.youtube.com/embed/xdiESyriaD8",
            columbia: "https://www.youtube.com/embed/OYR41QPrfVA"
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
            rapture: "https://static.wikia.nocookie.net/bioshock/images/0/01/Cryo.png",
            columbia: "https://static.wikia.nocookie.net/bioshock/images/f/f9/Old_Man_Winter_Icon.png"
        },
        video:{
            rapture: "https://www.youtube.com/embed/PyVpocd99dQ",
            columbia: "https://www.youtube.com/embed/ZmwD68mbiRk"
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
            rapture: "https://static.wikia.nocookie.net/bioshock/images/a/a9/Trap.png",
            columbia: "https://static.wikia.nocookie.net/bioshock/images/e/ea/BuckingBroncoIcon.png"
        },
        video:{
            rapture: "https://www.youtube.com/embed/c-cs3HWvGxw",
            columbia: "https://www.youtube.com/embed/BF7dAWqOF4E"
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
            rapture: "https://static.wikia.nocookie.net/bioshock/images/9/9b/Befriend.png",
            columbia: "https://static.wikia.nocookie.net/bioshock/images/2/23/PossessionIcon.png"
        },
        video:{
            rapture: "https://www.youtube.com/embed/QD2KM4t-hXw",
            columbia: "https://www.youtube.com/embed/vZHq-xFPF_4"
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
            rapture: "Throws all targets back with a burst of air",
            columbia: "Throws all targets back with a watery tendril"
        },
        image: {
            rapture: "https://static.wikia.nocookie.net/bioshock/images/f/fc/97.png",
            columbia: "https://static.wikia.nocookie.net/bioshock/images/a/ac/UndertowIcon.png"
        },
        video:{
            rapture: "https://www.youtube.com/embed/wCdwDuXSoqY",
            columbia: "https://www.youtube.com/embed/tSO_4R4Twds"
        }
    },
    {
        id: 8,
        title: {
            rapture: "Telekinesis",
            columbia: "Charge"
        },
        tagline: {
            rapture: "Move big stuff with your mind!",
            columbia: "Hit hard, hit fast!"
        },
        effect: {
            rapture: "Pulls the user towards a target at ramming speed",
            columbia: "Pulls the user towards a target at ramming speed"
        },
        image: {
            rapture: "https://static.wikia.nocookie.net/bioshock/images/3/38/Telekenesisi.png",
            columbia: "https://static.wikia.nocookie.net/bioshock/images/9/9a/ChargeIcon.png"
        },
        video:{
            rapture: "https://www.youtube.com/embed/Hc3Mjmbkrf4",
            columbia: "https://www.youtube.com/embed/8DwhD-yto-0"
        }
    },
]

export {plasmids}