<template>
    <div>
        <div class="wrapper-playlist">
            <div class="playlist-container">
                <div class="title">
                    <h1>Playlist</h1>
                </div>
                <div class="show-all-btn">
                    <a href=""><h1>Show all</h1></a>
                </div>
                <div class="tabs-playlist">
                    <div class="tabs">
                        <img src="" alt="">
                    </div>
                    <div class="tabs">
                        <img src="" alt="">
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
    .wrapper-playlist{
        padding: 5px 40px 0px 40px;
    }
    .playlist-container{
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
    .tabs-playlist{
        height: auto;
        margin: 10px 20px 10px 20px;
        display: flex;
        gap: 20px;
    }
    .tabs-playlist .tabs{
        height: 150px;
        width: 135px;
        background-color: white;
    }
</style>
