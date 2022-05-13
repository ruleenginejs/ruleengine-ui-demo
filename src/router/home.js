import component from './component';

const DemoLayout = () => import('@/views/demo-layout.vue');
const DemoHome = () => import('@/views/demo-home.vue');

export default [
  {
    path: '/',
    component: DemoLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: DemoHome
      },
      ...component
    ]
  }
];
