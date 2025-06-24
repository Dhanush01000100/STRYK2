// Jersey data with categories (10+ per category)
const jerseys = [
    // Premier League (12 jerseys)
    {
        id: 1,
        name: "Manchester United Home 2023/24",
        price: 89.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Official 2023/24 home jersey with the iconic red color and black trim.",
        category: "premier-league",
        reviews: [
            { user: "RedDevil4Life", text: "Perfect fit and amazing quality!" },
            { user: "MUFC_Fan", text: "Love the new design details." }
        ]
    },
    {
        id: 2,
        name: "Liverpool Away 2023/24",
        price: 84.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Striking away jersey with bold colors and modern design.",
        category: "premier-league",
        reviews: [
            { user: "Kopite", text: "The purple looks even better in person." }
        ]
    },
    {
        id: 3,
        name: "Arsenal Third 2023/24",
        price: 79.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Unique pink and black design inspired by club heritage.",
        category: "premier-league",
        reviews: []
    },
    {
        id: 4,
        name: "Chelsea Home 2023/24",
        price: 87.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Classic blue home jersey with white and red accents.",
        category: "premier-league",
        reviews: []
    },
    {
        id: 5,
        name: "Manchester City Away 2023/24",
        price: 89.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Maroon and blue away jersey with modern pattern.",
        category: "premier-league",
        reviews: []
    },
    {
        id: 6,
        name: "Tottenham Third 2023/24",
        price: 82.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Green and purple jersey with lightning bolt pattern.",
        category: "premier-league",
        reviews: []
    },
    {
        id: 7,
        name: "Newcastle Home 2023/24",
        price: 79.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Traditional black and white stripes with Saudi sponsorship.",
        category: "premier-league",
        reviews: []
    },
    {
        id: 8,
        name: "West Ham Third 2023/24",
        price: 77.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Burgundy jersey with claret and blue accents.",
        category: "premier-league",
        reviews: []
    },
    {
        id: 9,
        name: "Aston Villa Home 2023/24",
        price: 84.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Classic claret and blue with modern fit.",
        category: "premier-league",
        reviews: []
    },
    {
        id: 10,
        name: "Brighton Away 2023/24",
        price: 79.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Teal and black away jersey with subtle pattern.",
        category: "premier-league",
        reviews: []
    },
    {
        id: 11,
        name: "Leicester Home 2023/24",
        price: 76.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Royal blue jersey with gold accents.",
        category: "premier-league",
        reviews: []
    },
    {
        id: 12,
        name: "Wolves Third 2023/24",
        price: 78.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Orange and black jersey with wolf head pattern.",
        category: "premier-league",
        reviews: []
    },

    // La Liga (12 jerseys)
    {
        id: 13,
        name: "Real Madrid Home 2023/24",
        price: 94.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Classic white home jersey with purple accents.",
        category: "la-liga",
        reviews: []
    },
    {
        id: 14,
        name: "Barcelona Away 2023/24",
        price: 92.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Gold and maroon away jersey with crest detail.",
        category: "la-liga",
        reviews: []
    },
    {
        id: 15,
        name: "Atletico Madrid Home 2023/24",
        price: 89.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Red and white striped home jersey with blue trim.",
        category: "la-liga",
        reviews: []
    },
    {
        id: 16,
        name: "Sevilla Third 2023/24",
        price: 84.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Black and gold special edition jersey.",
        category: "la-liga",
        reviews: []
    },
    {
        id: 17,
        name: "Valencia Home 2023/24",
        price: 87.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Traditional white with black and orange trim.",
        category: "la-liga",
        reviews: []
    },
    {
        id: 18,
        name: "Villarreal Away 2023/24",
        price: 85.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Yellow jersey with blue details.",
        category: "la-liga",
        reviews: []
    },
    {
        id: 19,
        name: "Real Sociedad Home 2023/24",
        price: 83.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Blue and white striped home jersey.",
        category: "la-liga",
        reviews: []
    },
    {
        id: 20,
        name: "Betis Third 2023/24",
        price: 82.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Green and white special edition design.",
        category: "la-liga",
        reviews: []
    },
    {
        id: 21,
        name: "Athletic Bilbao Home 2023/24",
        price: 86.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Classic red and white stripes.",
        category: "la-liga",
        reviews: []
    },
    {
        id: 22,
        name: "Celta Vigo Away 2023/24",
        price: 81.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Sky blue away jersey with dark blue trim.",
        category: "la-liga",
        reviews: []
    },
    {
        id: 23,
        name: "Getafe Home 2023/24",
        price: 79.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Blue home jersey with red accents.",
        category: "la-liga",
        reviews: []
    },
    {
        id: 24,
        name: "Espanyol Third 2023/24",
        price: 78.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Special edition blue and white design.",
        category: "la-liga",
        reviews: []
    },

    // Serie A (12 jerseys)
    {
        id: 25,
        name: "Juventus Home 2023/24",
        price: 89.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Black and white stripes with gold details.",
        category: "serie-a",
        reviews: []
    },
    {
        id: 26,
        name: "AC Milan Third 2023/24",
        price: 87.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Special edition green and black jersey.",
        category: "serie-a",
        reviews: []
    },
    {
        id: 27,
        name: "Inter Milan Home 2023/24",
        price: 88.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Black and blue striped home jersey.",
        category: "serie-a",
        reviews: []
    },
    {
        id: 28,
        name: "Roma Away 2023/24",
        price: 85.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "White away jersey with maroon and orange trim.",
        category: "serie-a",
        reviews: []
    },
    {
        id: 29,
        name: "Napoli Home 2023/24",
        price: 86.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Sky blue home jersey with white trim.",
        category: "serie-a",
        reviews: []
    },
    {
        id: 30,
        name: "Lazio Third 2023/24",
        price: 84.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Black and gold special edition design.",
        category: "serie-a",
        reviews: []
    },
    {
        id: 31,
        name: "Atalanta Home 2023/24",
        price: 83.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Blue and black home jersey.",
        category: "serie-a",
        reviews: []
    },
    {
        id: 32,
        name: "Fiorentina Away 2023/24",
        price: 82.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "White away jersey with purple accents.",
        category: "serie-a",
        reviews: []
    },
    {
        id: 33,
        name: "Torino Home 2023/24",
        price: 81.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Maroon home jersey with gold trim.",
        category: "serie-a",
        reviews: []
    },
    {
        id: 34,
        name: "Bologna Third 2023/24",
        price: 79.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Special edition red and blue design.",
        category: "serie-a",
        reviews: []
    },
    {
        id: 35,
        name: "Sassuolo Home 2023/24",
        price: 78.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Black and green home jersey.",
        category: "serie-a",
        reviews: []
    },
    {
        id: 36,
        name: "Udinese Away 2023/24",
        price: 77.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "White away jersey with black and gold trim.",
        category: "serie-a",
        reviews: []
    },

    // Bundesliga (12 jerseys)
    {
        id: 37,
        name: "Bayern Munich Home 2023/24",
        price: 91.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Red home jersey with white trim and diamond pattern.",
        category: "bundesliga",
        reviews: []
    },
    {
        id: 38,
        name: "Dortmund Away 2023/24",
        price: 86.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Black and neon yellow away design.",
        category: "bundesliga",
        reviews: []
    },
    {
        id: 39,
        name: "RB Leipzig Home 2023/24",
        price: 84.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Red home jersey with white and blue accents.",
        category: "bundesliga",
        reviews: []
    },
    {
        id: 40,
        name: "Leverkusen Third 2023/24",
        price: 83.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Special edition black and red jersey.",
        category: "bundesliga",
        reviews: []
    },
    {
        id: 41,
        name: "Wolfsburg Home 2023/24",
        price: 82.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Green home jersey with white trim.",
        category: "bundesliga",
        reviews: []
    },
    {
        id: 42,
        name: "Frankfurt Away 2023/24",
        price: 81.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Black away jersey with red and white details.",
        category: "bundesliga",
        reviews: []
    },
    {
        id: 43,
        name: "Gladbach Home 2023/24",
        price: 83.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "White and green striped home jersey.",
        category: "bundesliga",
        reviews: []
    },
    {
        id: 44,
        name: "Hoffenheim Third 2023/24",
        price: 80.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Special edition blue and white design.",
        category: "bundesliga",
        reviews: []
    },
    {
        id: 45,
        name: "Stuttgart Home 2023/24",
        price: 79.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Red home jersey with white accents.",
        category: "bundesliga",
        reviews: []
    },
    {
        id: 46,
        name: "Freiburg Away 2023/24",
        price: 78.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Black away jersey with red and white trim.",
        category: "bundesliga",
        reviews: []
    },
    {
        id: 47,
        name: "Köln Home 2023/24",
        price: 77.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "White home jersey with red trim.",
        category: "bundesliga",
        reviews: []
    },
    {
        id: 48,
        name: "Hertha Berlin Third 2023/24",
        price: 76.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Special edition blue and white design.",
        category: "bundesliga",
        reviews: []
    },

    // Ligue 1 (12 jerseys)
    {
        id: 49,
        name: "PSG Home 2023/24",
        price: 96.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Dark blue home jersey with red accents.",
        category: "ligue-1",
        reviews: []
    },
    {
        id: 50,
        name: "Marseille Third 2023/24",
        price: 84.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Special edition white and gold jersey.",
        category: "ligue-1",
        reviews: []
    },
    {
        id: 51,
        name: "Lyon Home 2023/24",
        price: 86.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "White home jersey with blue and red trim.",
        category: "ligue-1",
        reviews: []
    },
    {
        id: 52,
        name: "Monaco Away 2023/24",
        price: 85.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Black away jersey with red and white details.",
        category: "ligue-1",
        reviews: []
    },
    {
        id: 53,
        name: "Lille Home 2023/24",
        price: 83.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Red home jersey with navy blue trim.",
        category: "ligue-1",
        reviews: []
    },
    {
        id: 54,
        name: "Nice Third 2023/24",
        price: 82.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Special edition black and red design.",
        category: "ligue-1",
        reviews: []
    },
    {
        id: 55,
        name: "Rennes Home 2023/24",
        price: 81.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Red and black home jersey.",
        category: "ligue-1",
        reviews: []
    },
    {
        id: 56,
        name: "Lens Away 2023/24",
        price: 80.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Yellow away jersey with red and gold trim.",
        category: "ligue-1",
        reviews: []
    },
    {
        id: 57,
        name: "Reims Home 2023/24",
        price: 79.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Red and white home jersey.",
        category: "ligue-1",
        reviews: []
    },
    {
        id: 58,
        name: "Montpellier Third 2023/24",
        price: 78.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Special edition orange and blue design.",
        category: "ligue-1",
        reviews: []
    },
    {
        id: 59,
        name: "Nantes Home 2023/24",
        price: 77.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Yellow home jersey with green trim.",
        category: "ligue-1",
        reviews: []
    },
    {
        id: 60,
        name: "Strasbourg Away 2023/24",
        price: 76.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "White away jersey with blue trim.",
        category: "ligue-1",
        reviews: []
    },

    // Retro Jerseys (12 jerseys)
    {
        id: 61,
        name: "Man United Retro 1999",
        price: 99.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Treble-winning season replica jersey.",
        category: "retro",
        reviews: []
    },
    {
        id: 62,
        name: "Brazil 2002 World Cup",
        price: 89.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Iconic yellow jersey from Ronaldo era.",
        category: "retro",
        reviews: []
    },
    {
        id: 63,
        name: "Arsenal Invincibles 2004",
        price: 94.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Red home jersey from unbeaten season.",
        category: "retro",
        reviews: []
    },
    {
        id: 64,
        name: "France 1998 World Cup",
        price: 92.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Blue home jersey from World Cup winners.",
        category: "retro",
        reviews: []
    },
    {
        id: 65,
        name: "Liverpool 2005 UCL",
        price: 89.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Red jersey from Istanbul miracle.",
        category: "retro",
        reviews: []
    },
    {
        id: 66,
        name: "AC Milan 1990s",
        price: 87.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Classic red and black stripes.",
        category: "retro",
        reviews: []
    },
    {
        id: 67,
        name: "Barcelona Dream Team 1992",
        price: 91.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Blue and red stripes from Wembley win.",
        category: "retro",
        reviews: []
    },
    {
        id: 68,
        name: "Germany 1990 World Cup",
        price: 88.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "White home jersey from Italia '90.",
        category: "retro",
        reviews: []
    },
    {
        id: 69,
        name: "Juventus 1996 UCL",
        price: 86.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Black and white stripes from Champions League win.",
        category: "retro",
        reviews: []
    },
    {
        id: 70,
        name: "Netherlands 1988 Euros",
        price: 89.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Orange jersey from Van Basten's volley.",
        category: "retro",
        reviews: []
    },
    {
        id: 71,
        name: "Real Madrid 2002 UCL",
        price: 87.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "White jersey from Zidane's volley final.",
        category: "retro",
        reviews: []
    },
    {
        id: 72,
        name: "England 1996 Euros",
        price: 84.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "White home jersey from Football's Coming Home.",
        category: "retro",
        reviews: []
    },

    // National Teams (12 jerseys)
    {
        id: 73,
        name: "Argentina 2022 World Cup",
        price: 94.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Champions edition with gold details.",
        category: "national",
        reviews: []
    },
    {
        id: 74,
        name: "France Home 2023",
        price: 89.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Classic blue with red accents.",
        category: "national",
        reviews: []
    },
    {
        id: 75,
        name: "Brazil Away 2023",
        price: 87.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Blue away jersey with yellow trim.",
        category: "national",
        reviews: []
    },
    {
        id: 76,
        name: "England Home 2023",
        price: 86.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "White home jersey with blue accents.",
        category: "national",
        reviews: []
    },
    {
        id: 77,
        name: "Spain Away 2023",
        price: 85.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Purple away jersey with red trim.",
        category: "national",
        reviews: []
    },
    {
        id: 78,
        name: "Portugal Home 2023",
        price: 88.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Red home jersey with green trim.",
        category: "national",
        reviews: []
    },
    {
        id: 79,
        name: "Netherlands Home 2023",
        price: 84.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Orange home jersey with black trim.",
        category: "national",
        reviews: []
    },
    {
        id: 80,
        name: "Germany Away 2023",
        price: 83.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Pink away jersey with black trim.",
        category: "national",
        reviews: []
    },
    {
        id: 81,
        name: "Italy Home 2023",
        price: 86.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Blue home jersey with white trim.",
        category: "national",
        reviews: []
    },
    {
        id: 82,
        name: "Belgium Away 2023",
        price: 82.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Yellow away jersey with red trim.",
        category: "national",
        reviews: []
    },
    {
        id: 83,
        name: "Croatia Home 2023",
        price: 87.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Red and white checkerboard home jersey.",
        category: "national",
        reviews: []
    },
    {
        id: 84,
        name: "Japan Home 2023",
        price: 81.99,
        image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=600",
        description: "Blue home jersey with white trim.",
        category: "national",
        reviews: []
    }
];

// DOM Elements
const jerseysGrid = document.getElementById('jerseysGrid');
const mobileMenuBtn = document.getElementById('mobile-menu');
const mobileMenuContainer = document.getElementById('mobileMenuContainer');
const cartIcon = document.querySelector('.cart-icon');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.querySelector('.checkout-btn');
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckout = document.getElementById('closeCheckout');
const checkoutForm = document.getElementById('checkoutForm');
const confirmationModal = document.getElementById('confirmationModal');
const continueShoppingBtn = document.getElementById('continueShopping');
const categoryCards = document.querySelectorAll('.category-card');
const dropdownLinks = document.querySelectorAll('[data-category]');
const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');
const searchResults = document.querySelector('.search-results');

// Cart state
let cart = [];
let currentCategory = 'all';

// Initialize the app
function init() {
    loadJerseys();
    setupEventListeners();
}

// Load jerseys based on current category
function loadJerseys() {
    jerseysGrid.innerHTML = '';
    
    const filteredJerseys = currentCategory === 'all' 
        ? jerseys 
        : jerseys.filter(jersey => jersey.category === currentCategory);
    
    if (filteredJerseys.length === 0) {
        jerseysGrid.innerHTML = '<p class="no-jerseys">No jerseys found in this category</p>';
        return;
    }

    filteredJerseys.forEach(jersey => {
        const jerseyCard = document.createElement('div');
        jerseyCard.className = 'jersey-card';
        jerseyCard.innerHTML = `
            <img src="${jersey.image}" alt="${jersey.name}" class="jersey-img">
            <div class="jersey-info">
                <h3 class="jersey-name">${jersey.name}</h3>
                <div class="jersey-price">$${jersey.price.toFixed(2)}</div>
                <button class="add-to-cart" data-id="${jersey.id}">ADD TO CART</button>
            </div>
            ${window.innerWidth > 768 ? `
            <div class="jersey-preview">
                <h4 class="preview-name">${jersey.name}</h4>
                <div class="preview-price">$${jersey.price.toFixed(2)}</div>
                <button class="quick-add-btn" data-id="${jersey.id}">ADD TO CART</button>
            </div>
            ` : ''}
        `;
        jerseysGrid.appendChild(jerseyCard);
    });

    // Add event listeners to add to cart buttons
    document.querySelectorAll('.add-to-cart, .quick-add-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const jerseyId = parseInt(e.target.getAttribute('data-id'));
            addToCart(jerseyId);
        });
    });
}

// Add to cart function
function addToCart(jerseyId) {
    const jersey = jerseys.find
