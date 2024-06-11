<template>
    <div class="right-tabs-container">
        <div class="title-tabs">
            <h1>Now Playing...</h1>
        </div>
        <div class="songs-image">
            <img src="music-streaming-website\assets\song.jpg" alt="">
        </div>
        <div class="songs-title">
            <h1>About You</h1>
            <h2>By: The 1975</h2>
        </div>
        <div class="lyrics-container">
            <div class="title">
                <h1>Lyrics</h1>
                <p>I know a place
                It's somewhere I go when I need to remember your face
                We get married in our heads
                Something to do while we try to recall how we met

                Do you think I have forgotten?
                Do you think I have forgotten?
                Do you think I have forgotten
                About you?

                You and I (don't let go) were alive (don't let go)With nothing to do, I could lay and just look in your eyes
                Wait (don't let go) and pretend (don't let go)Hold on and hope that we'll find our way back in the end

                Do you think I have forgotten?
                Do you think I have forgotten?
                Do you think I have forgotten
                About you?

                Do you think I have forgotten?
                Do you think I have forgotten?
                Do you think I have forgotten
                About you?

                There was something 'bout you that now I can't remember
                It's the same damn thing that made my heart surrender
                And I miss you on a train, I miss you in the morning
                I never know what to think about

                I think about you (so don't let go)About you (so don't let go)Do you think I have forgotten
                About you? (Don't let go)

                About you
                About you
                Do you think I have forgotten
                About you? (Don't let go)</p>
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
        font-family: 'Almarai', sans-serif;
    }
    .right-tabs-container{
        height: 100%;
        width: 100%;
        background-color: #2E2E2E;
        padding: 25px;
    }
    .title-tabs h1{
        width: 100%;
        justify-content: center;
        text-align: left;
        font-size: 24px;
        font-weight: 700;
        color: #fff;
    }
    .songs-image{
        margin-top: 20px;
        height: 240px;
        width: 100%;
        background-color: #fff;
        border-radius: 10px;
    }
    .songs-title{
        font-size: 13px;
        margin-top: 20px;
        background-color: #4E4E4E;
        padding: 10px;
        border-radius: 10px;
    }
    .songs-title h1, h2{
        color: white;
    }
    .songs-title h2{
        margin-top: 5px;
    }
    .lyrics-container{
        height: 230px;
        background-color: #4E4E4E;
        margin-top: 10px;
        border-radius: 10px;
    }
    .title h1{
        color: #fff;
        font-size: 14px;
        padding: 10px;
    }
    .title p{
        height: 187px;
        color: #fff;
        font-size: 14px;
        overflow: auto;
        padding: 10px;
    }

    ::-webkit-scrollbar {
    width: 12px;
    }

    ::-webkit-scrollbar-thumb {
    background-color: transparent;
    }

    ::-webkit-scrollbar-thumb:hover {
    background-color: #d3d3d3;
    }

    ::-webkit-scrollbar-track {
    background: transparent;
    }

    ::-webkit-scrollbar-thumb:active {
    background-color: #b0b0b0;
    }

</style>
