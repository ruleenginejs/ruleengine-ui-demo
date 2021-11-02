const DemoNotFound = () => import("@/views/demo-not-found.vue");

export default [
  {
    path: "/:pathMatch(.*)",
    name: "not-found",
    component: DemoNotFound
  }
]
