const titleArray = ['Dad', 'Daisey', 'Regret', 'Bankrupt', 'Laid Off', 'Depressed',  'Lonely', 'Failing', 'Scared', 'Mom'
];


const textArray = ['You were so strong for Mom and I, and now I\'m the one that has to be strong, I miss you so much',  'You were my first dog, and there will never be another like you. Seeing you in so much pain was killing me.  I\'m sorry.', 'I should have left her at the gate and gone with you.  I think about it every day', 'I failed my employees, my family, and myself', 'I gave that job 10 years of my life and they could not even look me in the eye', 'Emotions. Do you feel them? She was numb and frozen, Yet it dimly sparkled like a dying gem', 'No one calls, no one writes. All I have are my dogs.  I just want to be touched', 'All this work. All this school. I go on interview after interview and no one will touch me', 'I am so afraid of failure that I am failing already.  I cannot leave the house, or pick up the phone', 'You were so loving and my best friend, Mom. Who will solve my problems now? Who will hassle my new boyfriends?']



let calls = 0;


const Text = {
    randomPair: ()=> {
        calls > 9 ?  calls = 0 : null;
        const length= titleArray.length;
        const index = Math.floor(Math.random() * length);
        const title = titleArray[calls];
        const text = textArray[calls] || 'What do I do now?  Im so alone and scared'
        calls ++;
        return [title, text];
    }
}


export default Text;