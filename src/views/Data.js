import {
spotifyOne,
spotifyTwo,
spotifyThree,
spotifyFour,
} from '../components/index';


export const projectList = [
 {
    name: 'Native Commerce', 
    description: 'A repurposed full stack E-Commerce application re-imagined as a react native mobile app.',
    summary: 'Summary',
    summary_defined: "My goal for this project was to be able to incorporate the Spotify API into a client side web player. The functionalities of this project include recent history associated to your spotify account, search, and the ability to view your playlists.",
    role: 'Role',
    role_defined: 'Full Stack',
    stack: 'Stack',
    stack_defined: [<li>React</li>, <li> Redux</li>, <li> Node JS </li>, <li> Stripe JS</li>, <li> Express</li>,  <li> MongoDB</li>],
    year: 'Year',
    year_defined: "2022",
    challenges: 'Challenges',
    challenges_defined: 'Converting an established React project to its mobile counterpart is tough from a design perspective but even tougher from a dependency standpoint. Dependencies were a problem throughout the project and had to find creative solutions to mimic the functionalities of the web app.  ',
    links: 'Links',
    links_defined: '',
    images: [],
},
{
    name: 'Spotify', 
    description: "This is a Spotify clone aimed to emulate the styling and core functions of Spotify utilizing Spotify's API",
    summary: 'Summary',
    summary_defined: "My goal for this project was to be able to incorporate the Spotify API into a client side web player. The functionalities of this project include recent history associated to your spotify account, search, and the ability to view your playlists.",
    role: 'Role',
    role_defined: 'Frontend, UX / UI',
    stack: 'Stack',
    stack_defined: [<li>React</li>, <li> Context API</li>, <li> CSS </li>],
    year: 'Year',
    year_defined: "2021",
    challenges: 'Challenges',
    challenges_defined: '',
    links: 'Links',
    links_defined: {name: "Github", link: "https://github.com/ErnestArreola/spotify-clone"},
    images: [
        {
            image: `${spotifyOne}`,
        },
        {
            image: `${spotifyTwo}`,
        },
        {
            image: `${spotifyThree}`,
        },
        {
            image: `${spotifyFour}`
        }
    ],
},

];
