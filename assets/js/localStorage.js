"use strict";

let localShops = `{
    "shops": [
        {
            "name": "ArtWerks Studios",
            "region": "Nolensville Pike",
            "desc": "Many forms of creativity are pursued here. We are passionate about our crafts and always strive to provide a one-of-a-kind treasure for you to proudly display on your body or in your home.",
            "phone": "615.891.3552",
            "maps": "https://www.google.com/maps/place/ArtWerks+Studios/@36.0692701,-86.7196784,17z/data=!4m13!1m7!3m6!1s0x88646fbedeb8b16d:0x30103e4a1884a57!2s386+Haywood+Ln,+Nashville,+TN+37211!3b1!8m2!3d36.0692701!4d-86.7174897!3m4!1s0x88646fbf211df07b:0x7d33189965b1b6d1!8m2!3d36.0692701!4d-86.7174897",
            "website": "https://www.artwerksnashville.com/",
            "img": ""
        }
    ]
}`;

const init = () => {
    localStorage.setItem("localShops", localShops);
};

module.exports = {init};