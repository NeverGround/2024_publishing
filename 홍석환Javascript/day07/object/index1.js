[
    {
        name:'슈카월드',
        subscribers: 3000000,
        genre:['economics', 'entertainment'],
    },
    {
        name: '침투부'
        subscribers: 1200000,
        genre: ["game", "life", "entainment"],
    },
    {
        name: '곽튜브'
        subscribers: 1500000,
        genre: ["journey", "entertainment"],
    },
]

youtubers.forEach((v) => {
  console.log(`${i}.유튜버: ${v.name}`);
});

youtubers.filter((v)=>v.subscribers >= 2000000).forEach((v)=>console.log(v.genre))

youtubers.map((v)=>{
    v.subscribers = v.subscribers / 10000;
    v.genre = v.genre.map(v=>v.toUpperCase())
    return v;
}).forEach((v) => console.log(v))