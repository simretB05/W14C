<template>
        <section>
        <main>
            <div class="main-card">
                <div class="game-card">
                    <game-button></game-button>
                </div>
                <div class="bored-card">
                    <score-board></score-board>
                </div>
            </div>
        </main>
    </section>
</template>
<script>
//imported  components
import GameButton from '@/components/GameButton.vue';
import ScoreBoard from '@/components/ScoreBoard.vue';
export default {

        // registered Components
        components: {
            GameButton,
            ScoreBoard
},
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
    border-radius:25px ;
}
.game-card{
    display:grid;
    place-items:center;
    background-color: #a4c4b5;
    width: 400px;
    min-height:70%;

}
h3{
    align-self: end;
    color:#edfdf6;
    padding: 42px;
}
img{
    width:100%;
    height: 100%;
    align-self: center;
}
.bored-card{
    display:grid;
    place-items:center;
    background-color: #edfdf6;;
    width: 400px;
    min-height:70%;
}


</style>
