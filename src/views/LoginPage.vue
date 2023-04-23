<template>
    <section>
        <main>
            <div class="main-card">
                <div class="wellcome-card">
                    <h3>Let the game begin! Higher or Lower, can you guess the next number?</h3>
                    <img src="/images/icons/casinodice.svg" alt=" casio dice-icons">
                </div>
                <div class="login-card">
                    <div class="input-card">
                        <label for="login">User name or Email</label>
                        <input  v-model="email_input" emailtype="text" placeholder="please enter your email" required>
                        <label   for="password" placeholder="please enter password" required>PassWord</label>
                        <input   v-model="pass_input" type="password">
                        <button @click="logIn" >Login</button>
                    </div>
                    <h2>{{ errorMessage }}</h2>
                </div>
            </div>
        </main>
    </section>
</template>

<script>
        import axios from "axios";
        import Cookies from "vue-cookies"
    export default {

        data() {
            return {
                email_input:undefined,
                email_value:undefined,
                pass_input: undefined,
                pass_value: undefined,
                login: undefined,
                token: undefined,
                errorMessage:undefined
            }
    },
    methods: {
        logIn(details){
            this.email_value = this.email_input
            this.pass_value = this.pass_input
            console.log(this.token)
            details,
        axios.request( {
            url: `https://reqres.in/api/login`,
            method: `POST`,
            data: {
                email:this.email_value,
                password:this.pass_value
            
            }
        } ).then( ( response ) =>{
                 
            this.token = response[`data`][`token`]
            Cookies.set( `token`, this.token )
            this.$router.push(`/gamePage`)
        } ).catch((error) =>{
            error;
            this.errorMessage="Invalid input!.Please try again"
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
    min-height:50vh;
    width: 100%;
    padding:0 16px;
    background-color:#707772;



}
.wellcome-card{
    display:grid;
    place-items:center;
    background-color: #a4c4b5;
    width: 400px;
    max-height:70%;

}
h3{
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
    background-color: #edfdf6;;
    width: 400px;
    min-height:70%;
}
.input-card{
    display:grid;
    place-items:center;
}
</style>
