const titleArray = ['Will', 'Daisey', 'Regret', 'Bankrupt', 'Laid Off', 'Depressed',  'Mom', 'Failing', 'Scared', 'Lonely'
];


const textArray = ['You were so strong for Mom and I, and now I\'m the one that has to be strong, I miss you so much',  'You were my first dog, and there will never be another like you. Seeing you in so much pain was killing me.  I\'m sorry.', 'I should have left her at the gate and gone with you.  I think about it every day', 'I failed my employees, my family, and myself', 'I gave that job 10 years of my life and they could not even look me in the eye', 'Emotions. Do you feel them? She was numb and frozen, Yet it dimly sparkled like a dying gem', 'You were so loving and my best friend, Mom. Who will solve my problems now? Who will hassle my new boyfriends?',  'All this work. All this school. I go on interview after interview and no one will touch me', 'I am so afraid of failure that I am failing already.  I cannot leave the house, or pick up the phone', 'No one calls, no one writes. All I have are my dogs.  I just want to be touched' ];

const imageArray = [
    "https://i.imgur.com/uRUABbK.jpg",
    'https://i.imgur.com/qsRbF.png',
    'https://i.imgur.com/ZBh3Teq.jpg',
    '',
    '',
    '',
    'https://i.imgur.com/lFZHxMi.jpg',
    '',
    '',
   ''
]

let calls = 0;


const Text = {
    randomPair: ()=> {
        calls > 9 ?  calls = 0 : null;
        const length= titleArray.length;
        const index = Math.floor(Math.random() * length);
        const title = titleArray[calls];
        const text = textArray[calls] || 'What do I do now?  Im so alone and scared'
        const pic = imageArray[calls]
        calls ++;
        return [title, text, pic];
    }
}


export default Text;