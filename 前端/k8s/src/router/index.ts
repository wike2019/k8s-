import {createRouter, createWebHashHistory, RouteRecordRaw, useRouter} from 'vue-router';
import login from "../views/user/login.vue";
// import deploymentList from "../views/deployment-list.vue";
// import pod from "../views/pod.vue";
// import podLogs from "../views/pod-logs.vue";
// import podShell from "../views/pod-shell.vue";
//
//

//
// import ingressList from "../views/ingress-list.vue"
// import ingressCreate from "../views/ingress-create.vue"
// import  secretList from "../views/secret-list.vue"
// import  secretCreate from "../views/secret-create.vue"
// import  secretDetail from "../views/secret-detail.vue"
//
//
// import  configmapList from "../views/configmap-list.vue"
// import  configmapCreate from "../views/configmap-create.vue"
// import  configmapDetail from "../views/configmap-detail.vue"
// import  configmapUpdate from "../views/configmap-update.vue"
//
//
// import nodeList from "../views/node.vue";
// import nodeUpdate from "../views/node-update.vue"
// import  NodeShell from  "../views/node-shell.vue"
//
//
//
// import  rbacRoleList from  "../views/rbac-role-list.vue"
// import  rbacRoleCreate from  "../views/rbac-role-create.vue"
// import  rbacRoleUpdate from  "../views/rbac-role-update.vue"
//
// import  rbacRoleBindingList from  "../views/rbac-roleBinding-list.vue"
// import  rbacRoleBindingCreate from  "../views/rbac-roleBinding-create.vue"
//
// import  rbacSaList from "../views/rbac-sa-list.vue"
//
// import  rbacClusterRoleList from  "../views/rbac-clusterRole-list.vue"
// import  rbacClusterRoleCreate from  "../views/rbac-clusterRole-create.vue"
// import  rbacClusterRoleUpdate from  "../views/rbac-clusterRole-update.vue"
//
//
// import  rbacClusterRoleBindingList from  "../views/rbac-clusterRoleBinding-list.vue"
// import  rbacClusterRoleBindingCreate from  "../views/rbac-clusterRoleBinding-create.vue"
// import rbacUaList from "../views/rbac-ua-list.vue"


//import deployCreate from "../views/deployments/deploy-create.vue"


//修改过后
import namespace from "../views/namespace/namespace.vue"


const routes:RouteRecordRaw[]= [
    // {
    //     path: '/deploy-create',
    //     name: 'deploy-create',
    //     component: deployCreate
    // },
    // {
    //     path: '/rbac-clusterRole-create',
    //     name: 'rbac-clusterRole-create',
    //     component: rbacClusterRoleCreate
    // },
    // {
    //     path: '/rbac-roleBinding-list',
    //     name: 'rbac-roleBinding-list',
    //     component: rbacRoleBindingList
    // },
    // {
    //     path: '/rbac-roleBinding-create',
    //     name: 'rbac-roleBinding-create',
    //     component: rbacRoleBindingCreate
    // },
    // {
    //     path: '/rbac-ua-list',
    //     name: 'rbac-ua-list',
    //     component: rbacUaList
    // },
    // {
    //     path: '/rbac-sa-list',
    //     name: 'rbac-sa-list',
    //     component: rbacSaList
    // },
    // {
    //     path: '/rbac-clusterRole-update',
    //     name: 'rbac-clusterRole-update',
    //     component: rbacClusterRoleUpdate
    // },
    // {
    //     path: '/rbac-role-update',
    //     name: 'rbac-role-update',
    //     component: rbacRoleUpdate
    // },
    // {
    //     path:'/rbac-clusterRole-list',
    //     name: 'rbac-clusterRole-list',
    //     component: rbacClusterRoleList
    // },
    // {
    //     path:'/rbac-clusterRoleBinding-create',
    //     name: 'rbac-clusterRoleBinding-create',
    //     component: rbacClusterRoleBindingCreate
    // },
    // {
    //     path: '/rbac-clusterRoleBinding-list',
    //     name: 'rbac-clusterRoleBinding-list',
    //     component: rbacClusterRoleBindingList
    // },
    // {
    //     path: '/rbac-roleBinding-create',
    //     name: 'rbac-roleBinding-create',
    //     component: rbacRoleBindingCreate
    // },
    //
    // {
    //     path: '/node-update',
    //     name: 'node-update',
    //     component: nodeUpdate
    // },
    // {
    //     path: '/rbac-role-list',
    //     name: 'rbac-role-list',
    //     component: rbacRoleList
    // },
    // {
    //     path: '/rbac-role-create',
    //     name: 'rbac-role-create',
    //     component: rbacRoleCreate
    // },
    // {
    //     path: '/node-shell',
    //     name: 'node-shell',
    //     component: NodeShell
    // },
    // {
    //     path: '/node-list',
    //     name: 'node-list',
    //     component: nodeList
    // },
    // {
    //     path: '/pod-shell',
    //     name: 'pod-shell',
    //     component: podShell
    // },
    // {
    //     path: '/pod-logs',
    //     name: 'pod-logs',
    //     component: podLogs
    // },
    // {
    //     path: '/configmap-update',
    //     name: 'configmap-update',
    //     component: configmapUpdate
    // },
    // {
    //     path: '/configmap-detail',
    //     name: 'configmap-detail',
    //     component: configmapDetail
    // },
    // {
    //     path: '/configmap-create',
    //     name: 'configmap-create',
    //     component: configmapCreate
    // },
    // {
    //     path: '/configmap-list',
    //     name: 'configmap-list',
    //     component: configmapList
    // },
    // {
    //     path: '/deployment-list',
    //     name: 'deployment-list',
    //     component: deploymentList
    // },
    // {
    //     path: '/secret-detail',
    //     name: 'secret-detail',
    //     component: secretDetail
    // },
    // {
    //     path: '/secret-create',
    //     name: 'secret-create',
    //     component: secretCreate
    // },
    // {
    //     path: '/secret-list',
    //     name: 'secret-list',
    //     component: secretList
    // },
    // {
    //     path: '/ingress-list',
    //     name: 'ingress-list',
    //     component: ingressList
    // },
    // {
    //     path: '/ingress-create',
    //     name: 'ingress-create',
    //     component: ingressCreate
    // },
    // {
    //     path: '/pod',
    //     name: 'pod',
    //     component: pod
    // },
    {
        path: '/',
        name: 'login',
        component: login
    },
    {
        path:"/namespace",
        name: 'namespace',
        component: namespace
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export function doTo(name:string,query:any={}){
    router.push({name: name,query:query  })
}

export default router;
