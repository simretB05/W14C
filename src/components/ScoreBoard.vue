<template>
    <div>
        <div class="score-card">
           <h2>scoreboard</h2>
            <p class="result-title"> Guess Result: {{ result }} <br>Win Count:{{ winCounter_json }}<br>Loss Count:{{ lossCounter_json }}</p>  
        </div>
    </div>
</template>

<script>
//imported  Cookies from Cookies 
 import Cookies from "vue-cookies"
export default {
        data() {
        return {
             //created variables with, undefind values. and with cookies value from cookies jar
            result: undefined,
            lossCounter_json:Cookies.get(`lossCount`),
            winCounter_json:Cookies.get(`winCount`),
                
            }
    },
    //created method that takes emited values as an argument,  and assigned a 
    // variable to the emit value that will react to the score bore value in the index template
    methods: {
        gameResultHandler(result) {
            this.result = result

              
       }      
    },
    // created a mouted lifeCycle-hook and registered an on Listeners  with a name of gameResult_emite  and
    //  corressponding functions call.
    mounted() {
        this.$root.$on( `gameResult_emite`, this.gameResultHandler );
    }
    }
</script>


<style scoped>
.score-card{
    display:grid;
    place-items:center;
}
.result-title{
    padding: 16px;
    font-weight: 600;
    color:rgb(241, 20, 39)
}
</style>