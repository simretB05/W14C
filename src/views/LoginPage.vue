<template>
    <section>
        <main>
            <div class="main-card">
                <div class="wellcome-card">
                    <h3>Let the game begin! Higher or Lower, can you guess the next number?</h3>
                    <img src="/images/icons/casinodice2.svg" alt=" casio dice-icons">
                </div>
                <div class="login-card">
                    <div class="input-card">
                        <label for="login">User name or Email</label>
                        <input  v-model="email_input" emailtype="text" placeholder="Please Enter Your Email" required>
                        <label   for="password" required>PassWord</label>
                        <input   v-model="pass_input" type="password"  placeholder="Please Enter Password" >
                        <button   class="login-btn" @click="logIn" >Login</button>
                    </div>
                    <h2>{{ errorMessage }}</h2>
                </div>
            </div>
        </main>
    </section>
</template>

<script>
//imported  Cookies from Cookies Libraryand axios from axios Library
        import axios from "axios";
        import Cookies from "vue-cookies"
    export default {
 //created variables with, undefind values. and with cookies value from cookies jar
        data() {
            return {
                email_input:undefined,
                email_value:undefined,
                pass_input: undefined,
                pass_value: undefined,
                login: undefined,
                token: undefined,
                errorMessage: undefined,
                lossCount:0,
                winCount:0,
                newLossCount:Cookies.get(`lossCount`),
                newWinCount: Cookies.get(`winCount` ),

            }
    },
    methods: {
         //created methods that takes details value as an argument.
        logIn( details ){
            if (this.newLossCount && this.newWinCount){
                  //set Cookies with the  value of winCount and lossCount 
                Cookies.set( 'winCount', this.newLossCount )
                Cookies.set( 'lossCount', this.newLossCount )
            } else{
                  //set Cookies with the  value of winCount and lossCount 
                Cookies.set( 'winCount', this.winCount )
                Cookies.set( 'lossCount', this.lossCount )
            }
            
         
            //assigned the values of email_valu and pass_value from users text input, 
            // using the v - model vue method to bind the text input  with a variable
            this.email_value = this.email_input
            this.pass_value = this.pass_input

            details,
            //sending axios  POST method to check for login Authentication 
        axios.request( {
             // Url to send the post Method
            url: `https://reqres.in/api/login`,
            method: `POST`,
            data: {
                // data values required to send a POST login
                email:this.email_value,
                password:this.pass_value
            }
            // on a response, assign a variable to the value of a response  
        } ).then( ( response ) =>{
            this.token = response[`data`][`token`]
            //set Cookies with a value of response from axios POST method
            Cookies.set( `token`, this.token )
           // changing page once successful
            this.$router.push(`/gamePage`)
        } ).catch((error) =>{
            error;
            // if not successful displaying a error mssage
            this.errorMessage="Invalid input! Please try again."
        } )
        }
    },
    mounted(){
        
   }
    }
</script>

<style  scoped>
section{
    display:grid;
    place-items:center;
}
main{
    display:grid;
    place-items:center;
    min-height:100vh;


    
}
.main-card{
    display:grid;
    place-items:center;
    grid-template-columns: 1fr 1fr;
    min-height:70vh;
    width: 100%;
    /* padding:0 16px; */
    background-color:#707772;
    border-radius:25px ;
}
.wellcome-card{
    display:grid;
    place-items:center;
    background-color: #a4c4b5;
    width: 400px;
    max-height:70%;
    margin-left: 36px;

}
h3,h2{
    align-self: end;
    color:#edfdf6;
    padding: 32px;
}
img{
    width:100%;
    height: 100%;
    align-self: center;
}
.login-card{
    display:grid;
    place-items:center;
    background-color: #43c18a;;
    width: 400px;
    min-height:70%;
    margin-right: 36px;

}
.input-card{
    display:grid;
    place-items:center;
}
label {
    justify-self: start;
    padding: 10px 0;
    font-size: .81rem;

}
input{
    width: 300px;
    padding: 10px;
    border:none ;
    text-align: start;
    color: rgb(84, 82, 82);
    font-size: .81rem;

}
.login-btn{
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
justify-self: start;
}
.login-btn:active{
    transform: translateY(3px);
box-shadow: none;}
</style>
