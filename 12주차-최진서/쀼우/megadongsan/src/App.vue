<template>

  <div class="black-bg" v-if="모달창열렸니==true">
    <div class="white-bg">
      <h4>상세페이지임</h4>
      <p>상세페이지 내용임</p>
      <button @click="모달창열렸니=false">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="작명 in 메뉴들" :key="작명">{{작명}}</a>
  </div>

  <div v-for="(룸,i) in 6" :key="룸">
    <img :src="원룸들[i].image" class="room-img">
    <h4 @click="모달창열렸니=true">{{원룸들[i].title}}</h4>
    <p>{{원룸들[i].price}}</p>
  </div>
  <!-- <button v-on:click="신고수[0]++">허위매물신고</button> <span>신고수 : {{신고수[0]}}</span> -->
  <!-- <div v-for="(룸,i) in 3" :key="룸">
    <h4>{{products[i]}}</h4>
    <p>{{prices[i]}}</p>
  </div> -->
</template>

<script>

import data from './data.js';

export default {
  name: 'App',
  data() {
    return {
      원룸들 : data,
      모달창열렸니 : false,
      신고수 : [0,0,0],
      메뉴들 : ['Home','Shop','About'],
      products : ['역삼동 원룸','천호동 원룸','마포구 원룸'],
      prices : ['30만원','60만원','100만원'],
    }
  },
  methods : {
    increase() {
      this.신고수 +=1;
    }
  },
  components: {
    
  }
}
</script>

<style>
body {
  margin :0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}


.room-img {
  width: 100%;
  margin-top: 40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background:darkslateblue;
  padding :15px;
  border-radius:5px;
}
.menu a {
  color: white;
  padding: 10px;
}
</style>
