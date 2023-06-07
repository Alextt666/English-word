import { reactive } from "vue";
import { useRouter } from "vue-router";

export function useNavTag() {
  const router = useRouter();
  const navTags = reactive(["General", "Begin", "Help"]);
  function navigateTo(e) {
    const type = checkType(e.target);
    if (type) {
      router.push(`/${type}`);
    } else {
      return;
    }
  }

  function checkType(node) {
    if (node?.dataset?.type) {
      return node.dataset.type;
    } else {
      const curnode = node.parentNode;
      return checkType(curnode);
    }
  }

  return { navTags, navigateTo };
}
