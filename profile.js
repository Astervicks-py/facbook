const friendCard = document.querySelector('.friends');

const friends = [
  {
    img:'friends/friend-1.jpg',
    name:'Tuice Dix'
  },
  {
    img:'friends/friend-2.jpg',
    name:'Flexy Prince'
  },
  {
    img:'friends/friend-3.jpg',
    name:'Ki Ng'
  },
  {
    img:'friends/friend-4.jpg',
    name:'DivineFavo..'
  },
  {
    img:'friends/friend-5.jpg',
    name:'Young Luk..'
  },
  {
    img:'friends/friend-6.jpg',
    name:'Young Sk..'
  }
];

friends.forEach((x)=>{
  let { img, name } = x;
  friendCard.innerHTML += 
  `
    <div class="card">
        <img style="
        height:100px;
        object-fit:cover;
        border-radius:10px" src="${img}">
        <p style="
        font-weight:bold;
        font-size:1.1rem;
        padding-top:5px;">${name}</p>
      </div>
  `
});

