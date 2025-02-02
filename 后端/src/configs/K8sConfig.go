package configs

import (
	"context"
	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/client-go/informers"
	"k8s.io/client-go/kubernetes"
	"k8s.io/client-go/rest"
	"k8s.io/client-go/tools/clientcmd"
	"k8s.io/metrics/pkg/client/clientset/versioned"
	"k8sapi/pkg/ConfigMap"
	"k8sapi/pkg/Deployment"
	"k8sapi/pkg/Event"
	"k8sapi/pkg/Ingress"
	"k8sapi/pkg/Node"
	"k8sapi/pkg/ns"
	"k8sapi/pkg/Pod"
	"k8sapi/pkg/Pvc"
	"k8sapi/pkg/Rbac"
	"k8sapi/pkg/Rs"
	"k8sapi/pkg/sa"
	"k8sapi/pkg/secret"
	"k8sapi/pkg/Svc"
	"log"
)

type K8sConfig struct {
	DepHandler *Deployment.DepHandler                        `inject:"-"`
	PodHandler *Pod.PodHandler                               `inject:"-"`
	NsHandler *ns.NsHandler                                  `inject:"-"`
	EventHandler *event.EventHandler                         `inject:"-"`
	IngressHandler *Ingress.IngressHandler                   `inject:"-"`
	ServiceHandler *Svc.ServiceHandler                       `inject:"-"`
	SecretHandler *secret.SecretHandler                            `inject:"-"`
	ConfigMapHandler *ConfigMap.ConfigMapHandler             `inject:"-"`
	NodeHandler *Node.NodeMapHandler                         `inject:"-"`
	RoleHander *Rbac.RoleHander                              `inject:"-"`
	RoleBindingHander *Rbac.RoleBindingHander                `inject:"-"`
	SaHander *sa.Handler                                     `inject:"-"`
	ClusterRoleHandler *Rbac.ClusterRoleHandler              `inject:"-"`
	ClusterRoleBindingHandler *Rbac.ClusterRoleBindingHander `inject:"-"`
	PvcBindingHandler *Pvc.Handler                           `inject:"-"`
	RsBindingHandler *Rs.Handler                             `inject:"-"`
}

func NewK8sConfig() *K8sConfig {
	return &K8sConfig{}
}
func(*K8sConfig) InitConfig() *rest.Config{
	config,err:=clientcmd.BuildConfigFromFlags("","config")
	if err!=nil{
		log.Fatal(err)
	}
	config.Insecure=false
	return  config
}
func(this *K8sConfig) InitClient() *kubernetes.Clientset{

	c,err:=kubernetes.NewForConfig(this.InitConfig())
	if err!=nil{
		log.Fatal(err)
	}
	namespace := &corev1.Namespace{
		TypeMeta:   metav1.TypeMeta{APIVersion: corev1.SchemeGroupVersion.String(), Kind: "Namespace"},
		ObjectMeta: metav1.ObjectMeta{Name: "wike-system"},
	}

	_,err=c.CoreV1().Namespaces().Create(context.Background(), namespace, metav1.CreateOptions{})
	return c
}
func(this *K8sConfig) InitMetricClient() *versioned.Clientset{

	c,err:=versioned.NewForConfig(this.InitConfig())
	if err!=nil{
		log.Fatal(err)
	}
	return c
}
//初始化Informer
func(this *K8sConfig) InitInformer() informers.SharedInformerFactory{
	fact:=informers.NewSharedInformerFactory(this.InitClient(), 0)

	depInformer:=fact.Apps().V1().Deployments()
	depInformer.Informer().AddEventHandler(this.DepHandler)

	podInformer:=fact.Core().V1().Pods() //监听pod
	podInformer.Informer().AddEventHandler(this.PodHandler)

	nsInformer:=fact.Core().V1().Namespaces() //监听namespace
	nsInformer.Informer().AddEventHandler(this.NsHandler)


	eventInformer:=fact.Core().V1().Events() //监听event
	eventInformer.Informer().AddEventHandler(this.EventHandler)


	IngressInformer:=fact.Networking().V1().Ingresses() //监听Ingress
	IngressInformer.Informer().AddEventHandler(this.IngressHandler)

	serviceInformer:=fact.Core().V1().Services() //监听service
	serviceInformer.Informer().AddEventHandler(this.ServiceHandler)

	SecretInformer:=fact.Core().V1().Secrets() //监听Secret
	SecretInformer.Informer().AddEventHandler(this.SecretHandler)


	ConfigMapInformer:=fact.Core().V1().ConfigMaps() //监听Configmap
	ConfigMapInformer.Informer().AddEventHandler(this.ConfigMapHandler)


	NodeInformer:=fact.Core().V1().Nodes()
	NodeInformer.Informer().AddEventHandler(this.NodeHandler)

	RolesInformer:=fact.Rbac().V1().Roles()
	RolesInformer.Informer().AddEventHandler(this.RoleHander)


	RolesBindingInformer:=fact.Rbac().V1().RoleBindings()
	RolesBindingInformer.Informer().AddEventHandler(this.RoleBindingHander)

	ClusterRolesInformer:=fact.Rbac().V1().ClusterRoles()
	ClusterRolesInformer.Informer().AddEventHandler(this.ClusterRoleHandler)

	SaInformer:=fact.Core().V1().ServiceAccounts()
	SaInformer.Informer().AddEventHandler(this.SaHander)


	ClusterRoleBindingsInformer:=fact.Rbac().V1().ClusterRoleBindings()
	ClusterRoleBindingsInformer.Informer().AddEventHandler(this.ClusterRoleBindingHandler)


	pvcInformer:=fact.Core().V1().PersistentVolumeClaims()
	pvcInformer.Informer().AddEventHandler(this.PvcBindingHandler)
	ReplicaSets:=fact.Apps().V1().ReplicaSets()
	ReplicaSets.Informer().AddEventHandler(this.RsBindingHandler)
	stopCh:=make(chan struct{},0)
	go fact.Start(stopCh)
	fact.WaitForCacheSync(stopCh)
	return fact
}