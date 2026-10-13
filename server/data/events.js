// location_id matches the order of the venues in locations.js (1-4)
const events = [
    // The Meeple Den
    {
        title: 'Catan Tournament',
        description: 'Four rounds of Settlers of Catan. Top two players at each table advance. Prizes for the top three.',
        date: '2026-09-20',
        time: '18:00',
        image: '/images/catan-tournament.jpg',
        location_id: 1
    },
    {
        title: 'New Game Tuesday',
        description: 'Staff teach the newest games to hit the shelves. No experience needed.',
        date: '2026-10-20',
        time: '19:00',
        image: '/images/new-game-tuesday.jpg',
        location_id: 1
    },
    {
        title: 'Co-op Game Marathon',
        description: 'Team up against the board in Pandemic, Spirit Island, and Gloomhaven from noon until close.',
        date: '2026-11-08',
        time: '12:00',
        image: '/images/coop-marathon.jpg',
        location_id: 1
    },

    // Critical Hit Comics & Games
    {
        title: 'Friday Night Magic',
        description: 'Casual Commander pods and a draft table. Bring your own deck or buy into the draft.',
        date: '2026-10-02',
        time: '18:30',
        image: '/images/friday-night-magic.jpg',
        location_id: 2
    },
    {
        title: 'D&D One-Shot: The Haunted Lighthouse',
        description: 'A spooky beginner-friendly one-shot. Pre-made characters provided.',
        date: '2026-10-31',
        time: '17:00',
        image: '/images/dnd-one-shot.jpg',
        location_id: 2
    },
    {
        title: 'Miniature Painting Workshop',
        description: 'Learn base coats, washes, and dry brushing. Paints and a starter mini are included.',
        date: '2026-11-15',
        time: '14:00',
        image: '/images/miniature-painting.jpg',
        location_id: 2
    },

    // Oakridge Public Library
    {
        title: 'Family Game Night',
        description: 'Classic and kid-friendly games for all ages. Free, with snacks provided.',
        date: '2026-09-26',
        time: '17:30',
        image: '/images/family-game-night.jpg',
        location_id: 3
    },
    {
        title: 'Chess Club',
        description: 'Weekly open play with boards and clocks provided. Beginners get a free lesson at 6:00.',
        date: '2026-10-15',
        time: '18:00',
        image: '/images/chess-club.jpg',
        location_id: 3
    },
    {
        title: 'Jigsaw Puzzle Swap & Speed Challenge',
        description: 'Trade puzzles with neighbors, then race in teams to finish a 500-piece puzzle.',
        date: '2026-11-22',
        time: '11:00',
        image: '/images/jigsaw-puzzle-swap.jpg',
        location_id: 3
    },

    // Barrel & Dice Brewing
    {
        title: 'Pub Trivia Night',
        description: 'Five rounds of general trivia in teams of up to six. Winners get a round on the house.',
        date: '2026-10-07',
        time: '19:30',
        image: '/images/pub-trivia.jpg',
        location_id: 4
    },
    {
        title: 'Party Game Social',
        description: 'Codenames, Wavelength, and Just One. Come solo and get matched with a group.',
        date: '2026-10-24',
        time: '19:00',
        image: '/images/party-game-social.jpg',
        location_id: 4
    },
    {
        title: 'Giant Jenga Championship',
        description: 'A bracket-style tournament on the patio. Last tower standing wins.',
        date: '2026-12-05',
        time: '15:00',
        image: '/images/giant-jenga.jpg',
        location_id: 4
    }
]

export default events
