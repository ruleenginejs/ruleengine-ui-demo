<template>
  <c-form />
  <c-action-bar />
  <c-list />
  <c-dropdown />
  <c-suggest />
  <c-tabs />
  <c-sidebar />
  <c-treeview />
  <c-split-view />
  <c-props-panel />
  <c-graph />
</template>

<script>
import CForm from "./c-form.vue";
import CActionBar from "./c-action-bar.vue";
import CTabs from "./c-tabs.vue";
import CSidebar from "./c-sidebar.vue";
import CTreeview from "./c-treeview.vue";
import CSplitView from "./c-split-view.vue";
import CGraph from "./c-graph.vue";
import CPropsPanel from "./c-props-panel.vue";
import CList from "./c-list.vue";
import CDropdown from "./c-dropdown.vue";
import CSuggest from "./c-suggest.vue";

export default {
  name: "all-components",
  components: {
    CForm,
    CActionBar,
    CTabs,
    CSidebar,
    CTreeview,
    CSplitView,
    CGraph,
    CPropsPanel,
    CList,
    CDropdown,
    CSuggest
  }
};
</script>
