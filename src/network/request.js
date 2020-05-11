import axios from 'axios'

export function request(config){
    //1、创建axios的实例
    const instance = axios.create({
      baseURL:'http://152.136.185.210:8000/api/n3',
      timeout:5000
    })

    //2、axios的拦截器
    //请求拦截，两个参数都是函数
    instance.interceptors.request.use(config=>{
      // console.log(config)

      //用处：
      //1、比如，congfig中的一些信息不符合服务器的要求

      //2、比如每次发送网络请求时，希望能在请求的页面中显示一个请求的图标。 当请求成功了，再把图标隐藏掉

      //3、某些网络请求（比如登录（token）），必须携带一些特殊的信息

      return config;  //配置信息处理完一定要返回，否则请求就不会发送出去
    },err=>{

    })

    //响应拦截
    instance.interceptors.response.use(res=>{
      // console.log(res)

      return res.data //结果一定要返回，只返回出去data就可以了。其余axios加的信息没有用。
    },err=>{
      console.log(err)
    })

    //3、发送真正的网络请求
    return instance(config)   //返回的就是一个 promise
}
