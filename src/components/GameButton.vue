<template>
    <div>
        <h2> Guess the next number!</h2>
        <button  @click="scorehandler" :winCounter_json="winCounter_json" :lossCounter_json="lossCounter_json" :gameResult="gameResult" class="game-btn">Click here</button>
        <button  @click="resetHandler"  class="game-reset-btn">Reset Results</button>

   </div>
</template>

<script>
  import axios from "axios";
 import Cookies from "vue-cookies"
    export default {
 //created variables with, undefind values. and with cookies value from cookies jar
        data() {
            return {
                number:undefined,
                gameNumber:undefined,
                gameResult:undefined,
                errorMessage:undefined,
                lossCounter_json:Cookies.get(`lossCount`),
                winCounter_json:Cookies.get(`winCount`),
                login_token:Cookies.get(`token`),
                numberValueFromBtn: undefined,
                newWinCount: 0,
                newLossCount:0,
            }
    },
    methods: {
        scorehandler( details ){
           //assigned a variable with a value of number from the GET Method Response
            this.gameNumber = this.number
             //  added a condtitonal  to check if the number from axios GET request is >=50, if so, add 1 value of a variable 
            if ( this.gameNumber >= 50 ){
                // assigned the value of an details target attribute  with a variable
                this.newWinCount = details[`target`].getAttribute( `winCounter_json` )
                // adding 1 to the value of a variable
                this.newWinCount++
                // setting cookie value with the value of a variable 
                Cookies.set( 'winCount', this.newWinCount )
                // assigning the value of a variable with a message if usr won/guess is >=50
                this.gameResult = ` Wright Guess!,You Won!`
            } else{
                // if number comming from the GET request is <50  assign another variable 
                // to the value of details target and add 1 to a variable
                this.newLossCount = details[`target`].getAttribute(`lossCounter_json` )
                this.newLossCount++
               //set cookie with a value of a variable that is adding 1 if guess is <50
                Cookies.set( 'lossCount', this.newLossCount )
                // assigning the value of a variable with a message if usr won/guess is <50
                this.gameResult = ` wrong Guess!,You Lost`
            }
                // assigned the value of an details target attribute  with a variable,  
                // this attribute will hold the value of the game-result from the condtional we run
              this.numberValueFromBtn = details[`target`].getAttribute( `gameResult` )
                // sending  global emite with a gameResult_emite  emite name  and payload of the numberValueFromBtn.
               this.$root.$emit( `gameResult_emite`, this.numberValueFromBtn )
        },
        resetHandler(details){
            details;
            Cookies.set( 'winCount', this.newWinCount )
            Cookies.set( 'lossCount', this.newLossCount )
        }
    },

    // created a mouted lifeCycle-hook that processes an Axios requst
    // and  on a response assign a variable to the value of a response if successful and shows error if not
    mounted() {
    
          // checking if ther is a token value when component is on  mounted lifecyecle if not tak user to login page
        if ( !this.login_token ){
            this.$router.push(`/`)
        }
        axios.request({
            url: `http://www.randomnumberapi.com/api/v1.0/randomnumber`
        } ).then( ( response ) =>{
            this.number = response.data[0]
        } ).catch((error) =>{
            error;
            this.errorMessage="please try again"
        } )
    }
    }
</script>
<style scoped>

.game-btn{
width: 120px;
background-color:#707772;
border: none;
border-radius: 25px;
color: white;
font-weight: 700;
padding: 10px;
transition: background-color 0.5s ease;
box-shadow: 0 1px 0 #afcce7;
margin:16px ;

}
.game-btn:active{
    transform: translateY(3px);
box-shadow: none;
}
.game-reset-btn{
    width: 120px;
background-color:#edfdf6;
border: none;
border-radius: 25px;
color:#707772;
font-weight: 700;
padding: 10px;
transition: background-color 0.5s ease;
box-shadow: 0 1px 0 #afcce7;
margin:16px;
}
.game-reset-btn:active{
    transform: translateY(3px);
box-shadow: none;
}
h2{
    color:white;
}
</style>