import { reactive } from "vue";
import { useRouter } from "vue-router";

export function useNavTag() {
  const router = useRouter();
  const navTags = reactive([]);
  const regx = new RegExp(/[^/]+/);
  router.options.routes.forEach((item) => {
    const str = item.path.match(regx);
    if (str) {
      navTags.push(str[0]);
    }
  });
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
      return node?.parentNode ? checkType(node.parentNode) : false;
    }
  }

  return { navTags, navigateTo };
}
