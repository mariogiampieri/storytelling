var locations = {
    'alan-home': {
        center: [-104.94775, 39.97077],
        zoom: 16.58,
        pitch: 8.00,
        bearing: 0.00
    },
    'horizon': {
        center: [-104.92620, 39.94445],
        zoom: 16.43,
        pitch: 38.50,
        bearing: 0.00
    },
    'maker-faire': {
        center: [-73.83637, 40.74775],
        zoom: 15.74,
        pitch: 6.50,
        bearing: -11.59
    },
    'jackson-heights': {
        center: [-73.89149, 40.74741],
        zoom: 16.55,
        pitch: 6.50,
        bearing: -11.59
    },
    'helens': {
        center: [-73.92872, 40.76054],
        zoom: 16.51,
        pitch: 6.50,
        bearing: -11.59
    },
    'times-square': {
        center: [-73.98568, 40.75734],
        zoom: 16.10,
        pitch: 6.50,
        bearing: -11.59
    },
    'mckibben': {
        center: [-73.93716, 40.70573],
        zoom: 17.15,
        pitch: 6.50,
        bearing: -11.59
    },
    'pour-george': {
        center: [-73.99843, 40.73321],
        zoom: 16.49,
        pitch: 6.50,
        bearing: -11.59
    },
    'insomnia': {
        center: [-73.99891, 40.73322],
        zoom: 16.49,
        pitch: 6.50,
        bearing: -11.59
    },
    'otto': {
        center: [-73.99608, 40.73197],
        zoom: 16.00,
        pitch: 6.50,
        bearing: -11.59
    },
    'cornelia': {
        center: [-73.91622, 40.68967],
        zoom: 16.00,
        pitch: 6.50,
        bearing: -11.59
    }



}


var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoibWFyaW9hZyIsImEiOiJja25kYnZ6bnExOGNxMm5uczAyeGkzbm9jIn0.9qgZHh97osM101AWsG7Jgw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'The Title Text of this Story',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',


    chapters: [{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: ,
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};