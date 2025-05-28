function walkStrings(obj, callback){
    
    if(typeof obj === 'number'){
        console.log('It is a number', number);
        return;
    }
    
    if(typeof obj === 'string'){
        callback(obj);
        return;
    }
    
    for(let key in obj){
        if(key && key !== undefined && typeof obj[key] === 'string'){
            callback(obj[key]);
        }
        else{
            walkStrings(obj[key], callback)
        }
    }
}
const input="hello"
const arrayInput=[
    "hello", 
    {
    name: 'John',
    profile: {
        bio: 'Developer',
        links: ['github.com/john', { twitter: 'twitter.com/john' }]
      }
    }
]
const data = {
  name: 'John',
  profile: {
    bio: 'Developer',
    links: ['github.com/john', { twitter: 'twitter.com/john' }]
  },
  age: 30
};

const number=10;
walkStrings(arrayInput, (str) => console.log(str));