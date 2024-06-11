<template>
    <div>
        <div class="wrapper-songs">
            <div class="songs-container">
                <div class="title">
                    <h1>My Songs</h1>
                </div>
                <div class="show-all-btn">
                    <a href=""><h1>Show all</h1></a>
                </div>
                <div class="list-container">
                    <div class="list-title-container">
                        <h2 :class="No">No.</h2>
                        <h2 :class="Songstitle">Songs Title</h2>
                        <h2 :class="artist">Artist</h2>
                        <h2 :class="album">Album</h2>
                        <h2 :class="duration">Duration</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="css" scoped>
    *{
        background-color: transparent;
        font-family: 'Almarai',sans-serif;
    }
    .wrapper-songs{
        padding: 5px 40px 0px 40px;
    }
    .songs-container{
        height: 250px;
        width: 100%;
        background-color: #2E2E2E;
        position: relative;
        border-radius: 10px;
    }
    .title h1{
        color: white;
        padding: 20px;
        font-size: 24px;
    }
    .show-all-btn{
        position: absolute;
        top: 30px;
        right: 30px;
    }
    .show-all-btn h1{
        color: white;
        font-size: 15px;
    }
    .list-container{
        background-color: #4E4E4E;
        opacity: 0.5;
        height: 200px;
        padding: 0 20px ;
        border-radius: 20px;
    }

</style>
