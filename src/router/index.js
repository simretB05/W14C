import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/views/LoginPage'
import GamePage from '@/views/GamePage'

Vue.use(VueRouter)

const routes = [
      {
    path:'/',
    component: LoginPage,
    meta: [
      {
        title: `Login to Higher or Lower - Guessing Game`
        
      },{
        name:`author`,
        content: `Smiret`,
      },
      {
        name:`discription`,
        content:`Login  to Higher or Lower and test your guessing skills!`,
      },
      {
        name: `keywords`,
        content:`Higher or Lower, guessing game, login, sign in`
      }
   
    ]
  },
  {
    path:'/gamePage',
    component: GamePage,
    meta: [
      {
        title: `Play Higher or Lower - Guess the Next Number Game`
        
      },{
        name:`author`,
        content: `Smiret`,
      },
      {
        name:`discription`,
        content:`Test your guessing skills in Higher or Lower! Can you guess the next number? Play now to find out.`,
      },
      {
        name: `keywords`,
        content:`Higher or Lower, guess the next number, guessing game, test your skills, play now`
      }
   
    ]
        
  },
]

const router = new VueRouter({
  routes
})
router.beforeEach( ( to, from, next ) =>
{
  
  let current_meta_tags = document.querySelectorAll( `meta` );
  for ( let i = 0; i < current_meta_tags.length; i++ ) {
    current_meta_tags[i].remove()
  }
    let new_meta_tag = to[`meta`]
    document.querySelector(`title`)[`innerText`] = new_meta_tag[0][`title`]
    for ( let i = 1; i < new_meta_tag.length; i++ ){
      document.querySelector( `head` ).insertAdjacentHTML( `beforeend`, `<meta name="${new_meta_tag[i][`name`]}" content="${ new_meta_tag[i][`content`] }">` )
    }
      document.querySelector( `head` ).insertAdjacentHTML( `afterbegin`,` <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">`)
    
    from;
    next()
    
  }

);
export default router
