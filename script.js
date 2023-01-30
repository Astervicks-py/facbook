const cardContainer = document.getElementById('cont');
const morePost = document.querySelector('.more-post')

const people = [
  {
    name:'Godwin Uzeba',
    image:'images/img-12.jpg',
    mutual:3
  },
  {
    name:'Itz Rejoice',
    image:'images/img-1.jpg',
    mutual:3
  },
  {
    name:'Mary Ann',
    image:'images/img-10.jpg',
    mutual:3
  },
  {
    name:'lord lamba II',
    image:'images/img-11.jpg',
    mutual:3
  },
  {
    name:'Pre Cious',
    image:'images/ppl-1.jpg',
    mutual:3
  },
  {
    name:'Emmanuel Chidiebere',
    image:'images/img-4.jpg',
    mutual:3
  },
  {
    name:'Enoch Odinma',
    image:'images/img-5.jpg',
    mutual:3
  },
  {
    name:'Judith Jay',
    image:'images/img-6.jpg',
    mutual:3
  },
  {
    name:'Adeyi Gabriel',
    image:'images/img-7.jpg',
    mutual:3
  },
  {
    name:'Ifechukwu Enuka',
    image:'images/img-8.jpg',
    mutual:3
  },
  {
    name:'Charity Nwaeze',
    image:'images/ppl-2.jpg',
    mutual:3
  },
  {
    name:'Feranmi Samuel',
    image:'images/img-9.jpg',
    mutual:3
  }

];

const generatePeople =()=>{
  people.forEach((x)=>{
    let { name, image, mutual } = x;
    cardContainer.innerHTML +=
  `
    <div class="card">
          <img class="img" src="${image}">  
          <h4 class="pad-left">${name}</h4>
          <p class="pad-left">3 mutual friends</p>
          <button>
            <i class="fas fa-user"></i>
            + Add Friend
          </button>
        </div>
  `
  })
}
generatePeople()


const post = [
  {
    profile:'images/profile-7.jpg',
    name:'Ujunwa Osake',
    date:'jan 10 •',
    img:'images/post-8.jpg',
    likes:'1.4k',
    liked_by:'🤣Mike Cran and 1.4k others'
  },
  {
    profile:'images/post-2.jpg',
    name:'Döpest Smárt',
    date:'4d •',
    img:'images/post-2.jpg',
    likes:'47',
    liked_by:'Mike Cran and 46 Others'
  },
  {
    profile:'images/profile-1.jpg',
    name:'Arizona',
    date:'4d •',
    img:'images/post-3.jpg',
    likes:'6',
    liked_by:'itz Goodness and 5 Others'
  },
  {
    profile:'images/profile-2.jpg',
    name:'Tyler Crandon',
    date:'5d •',
    img:'images/post-4.jpg',
    likes:'15k',
    liked_by:'Becky Glass and 15k Others'
  },
  {
    profile:'images/post-5.jpg',
    name:'Gøld dîggér',
    date:'12m •',
    img:'images/post-5.jpg',
    likes:'2',
    liked_by:'❤ itz Goodness and 5 Others'
  },
  {
    profile:'images/profile-4.jpg',
    name:'Ishaq fred Abdulrahim',
    date:'jan 16 •',
    img:'images/post-6.jpg',
    likes:'49',
    liked_by:'😀 itz Goodness and 45 Others'
  },
  {
    profile:'images/profile-5.jpg',
    name:'Linus Malachi',
    date:'jan 9 •',
    img:'images/post-7.jpg',
    likes:'79',
    liked_by:'79'
  }
  
];

post.forEach((x)=>{
  let { profile, name, date, img, likes, liked_by} = x;
  morePost.innerHTML += 
  `
    <div class="post">
      <div class="post-details">
        <div class="user-time">
          <img style="object-fit:cover; width:40px;height:40px" src="${profile}">
          <div class="user">
            <h4>${name}</h4>
            <p>${date}
              <i class="fa-solid fa-earth-africa"></i>
            </p>
          </div>
        </div>
        <div class="dots"></div>
      </div> 
      
      <div class="post-content">
        <img src="${img}" alt="">
      </div>
      
      <div class="people-liked">
       <p>
       <i class="fa-solid fa-thumbs-up like-icon"></i>    
       ${liked_by}
       </p>
      </div>
     <div class="post-stats border-bottom">
        <button style='font-size:1.1rem'><i onclick="liked(this)" class="fa-solid fa-thumbs-up"></i> ${likes}</button>
        <button><i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/R9vrn4l6XUx.png?_nc_eui2=AeFefftVxpUrNP03Umy4TFx83n9uyihLYaLef27KKEthohcaUkUBROwNscJE6U6n3vXqLDVXdka6EWsdTUjeKNlY');background-position:0 -144px;background-size:26px 752px;width:18px;height:18px;background-repeat:no-repeat;display:inline-block"></i></button>
        <button><i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/5m2ixcpGHTA.png?_nc_eui2=AeH22lGLD8_BPqLgZIRAdU6EekoEvYkphhJ6SgS9iSmGEvKXjs55kDq74O2jayl4Q7-b-Pf-6Zcug1Bfd91I2Unl');background-position:-170px -62px;background-size:190px 204px;width:18px;height:18px;background-repeat:no-repeat;display:inline-block"></i></button>
      </div> 
    </div> 
  `
})

lik = false;
function liked(x){
  if(lik == false){
    x.style.color = 'var(--p)';
    lik = true
  }else{
    x.style.color = '#000';
    lik = false;
  }
}