const DemoComponentLayout = () => import("@/views/demo-component-layout.vue");
const DemoComponentPage = () => import("@/views/demo-component-page.vue");

export default [
  {
    path: "component",
    redirect: "/component/installation",
    name: "component",
    component: DemoComponentLayout,
    children: [
      {
        path: ":id",
        name: "component-content",
        props: true,
        component: DemoComponentPage
      }
    ]
  }
]
