import { ref, computed } from "vue";
import { IMG_LIST } from "@/components/Begin/imgUrl.js";

// 格式转换工具
function formatStr(str) {
  return str.replace(/\s/g, "").toLowerCase();
}
export function useInitEffect() {
  // 初始化
  const count = ref(0);
  const isBlur = ref(false);
  const imgUrl = computed(() => IMG_LIST[count.value]?.url || "");
  const word = computed(() => IMG_LIST[count.value]?.word || "nothing");

  // keyup.enter 校验答案
  function checkAnswer(inputText) {
    if (!inputText) {
      ElMessage.warning("input is empty!");
      return;
    }
    const ipt = formatStr(inputText);
    const ownWord = formatStr(word.value);
    if (ipt === ownWord) {
      ElMessage.success("Bingo!");
    } else {
      ElMessage.warning("try again !");
    }
  }

  // 下一张
  function nextWord() {
    if (count.value < IMG_LIST.length - 1) {
      count.value++;
    } else {
      ElMessage.warning("no more!");
    }
  }

  return { count, isBlur, imgUrl, word, checkAnswer, nextWord };
}
