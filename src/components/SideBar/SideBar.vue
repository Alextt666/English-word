<template>
  <div class="sidebar-wrapper" v-if="showTagName">
    <div class="logo-wrapper">
      <img src="@/assets/images/logo.png" alt="Logo" />
      <CloseIcon svgName="nav-collapse" @click="toggleNav(true)"></CloseIcon>
    </div>
    <template v-for="tag in navTags" :key="tag">
      <TagSidebar :tagName="tag" @click="navigateTo"></TagSidebar>
    </template>
  </div>
  <div class="sidebar-wrapper-close" v-else>
    <div class="logo-wrapper-close">
      <img src="@/assets/images/alex.png" alt="Logo" />
    </div>
    <div class="img-close">
      <template v-for="tag in navTags" :key="tag">
       <div :data-type="tag">
        <img
          :src="`src/assets/images/${tag}.svg`"
          alt="icon"
          @click="navigateTo"
        />
       </div>
      </template>
    </div>
    <div class="close-icon">
      <CloseIcon
        svgName="nav-collapsed"
        position="center"
        @click="toggleNav(false)"
      ></CloseIcon>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import CloseIcon from "./CloseIcon.vue";
import TagSidebar from "./TagSidebar.vue";
import { useNavTag } from "./useNavTag";

const { navTags, navigateTo } = useNavTag();

function toggleNav(type) {
  showTagName.value = !showTagName.value;
  const page = document.querySelector(".page-body");
  if (type) {
    page.style.marginLeft = "85px";
  } else {
    page.style.marginLeft = "258px";
  }
}

defineComponent({
  CloseIcon,
  TagSidebar,
});

const showTagName = ref(true);
</script>

<style lang="scss" scoped>
// 侧边栏
.sidebar-wrapper {
  position: fixed;
  height: 100%;
  top: 0;
  z-index: 9;
  background-color: $bg-base;
  width: 258px;
  box-shadow: 0 0 21px rgba(89, 102, 122, 0.1);
  // logo
  .logo-wrapper {
    padding: 28px 30px;
    img {
      width: 100%;
      height: auto;
    }
  }
}
.sidebar-wrapper-close {
  position: fixed;
  height: 100%;
  top: 0;
  z-index: 9;
  background-color: $bg-base;
  width: 85px;
  box-shadow: 0 0 21px rgba(89, 102, 122, 0.1);
  .logo-wrapper-close {
    padding: 20px 25px;
    img {
      width: 100%;
      height: auto;
    }
  }
  .img-close {
    width: 85px;
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    img {
      width: 24px;
      cursor: pointer;
    }
  }
  .close-icon {
    position: relative;
    margin-top: 2.8rem;
  }
}
</style>
