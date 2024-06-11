<template>
    <div class="nav-container">
        <ul>
            <router-link class="mymusicplayer" :to="{name:'home'}">My Music Player</router-link>
            <router-link class="Songs" :to="{name:'songs'}">Songs</router-link>
            <router-link class="Library" :to="{name:'Library'}">Libary</router-link>
            <router-link class="Search" :to="{name:'Search'}">Search</router-link>
        </ul>
    </div>
</template>

<script>
export default {
}
</script>
<style lang="css" scoped>
*{
    background-color: transparent;
}
.nav-container{
    height: 60px;
    width: 100%;
    background-color: #ddd;
}
ul{
    display: flex;
    gap: 220px;
    justify-content: center;
    text-align: center;
    padding: 21px;
}
a{
    color: black;
}

</style>
