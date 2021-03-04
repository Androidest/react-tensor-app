// ChatUserProvider 为社交用户，本app使用者，一个浏览器一个。
import { useLocalStorage } from "commons/LocalStorage";
import { createContext, useContext, useEffect, useState } from "react";
import { v4 } from 'uuid';
import { DEFAULT_PHOTO } from 'commons/constants';
import { useAuth } from "./AuthProvider";


// ================== models ===================
const isClearHistory = false;  //测试是可以使 isClearHistory=true 重置浏览器上的记录
const uid = v4();
const initMe = {
    uuid: uid, //随机ID
    name: "YourName-"+uid.slice(0,5),
    photoURL: DEFAULT_PHOTO 
};

// 开头接受任何字符：^[^]+ 
// 一个'.'后接其中一种并以此结尾： [.]{1}(jpeg|jpg|png|gif)$
const imageValidationRegex = /^[^]+[.]{1}(jpeg|jpg|png|gif)$/;  //imageValidationRegex.test(path) 全match才真
const nameValidationRegex = /^([A-Z]|[a-z]|[0-9]|-){0,15}$/; //只接受字母、数字和减号并且字符串长度在15以内



// ====== 自定义社交用户的 context 对象 =============
const initContext = createContext(null);
const meContext = createContext(null);
const themContext = createContext(null);


// ====== 自定义context container =============
//当前用户的数据
function MeProvider({ children }) {
    const [me, setMe] = useLocalStorage('me', initMe, isClearHistory); 

    useEffect(()=>{
        console.log(123)
        window.addEventListener("beforeunload", (ev) => {  
            ev.returnValue = 'Are you sure you want to close?';
            return;
        });
    },[]);

    //fileBlob 是从 input 组件的 onChange 输入参数 event.target.files[0] 得到
    const setPhoto = (fileBlob)=>{
        //TODO add promise
        if(imageValidationRegex.test(fileBlob.name)) {
            //验证文件为有效图片后开始读取文件
            const reader = new FileReader();
            reader.onloadend = (e) => {
                setMe({ ...me, photoURL: e.currentTarget.result });  //合并 me，覆盖 photoURL
            };
            reader.readAsDataURL(fileBlob);
        }
        else {
            throw 'Invalid image file!';
        }
    }

    //设置名称时，在输入框 onChange 里使 isConfirm=false 可以边输入边防止非法输入，同时允许名称长度小于6,
    //用在最终名称确认时，使 isConfirm=true 以防止名称长度小于6，同时保证正确的输入格式
    const setName = (newName, isConfirm)=> {
        if(nameValidationRegex.test(newName)) {
            if(isConfirm && newName.length < 6) //最终确定名字时确认是否大于等于6个字符
                throw 'User name must be 6-15 characters!';
            setMe({ ...me, name: newName });  //合并 me，覆盖 name
        }
        else if(15 <= newName.length) { //名字太长
            throw 'User name must be 6-15 characters!';
        }
        else {
            throw 'Invalid character!';
        }
    }

    const meValue = { me, setPhoto, setName };

    return (
        <meContext.Provider value={meValue}> 
            {children}
        </meContext.Provider>
    )
}

//存储其他已连接的用户的相关数据
function ThemProvider({ children }) {
    const [them, setThem] = useState([]);
    const themValue = { them };

    return (
        <themContext.Provider value={themValue}> 
            {children}
        </themContext.Provider>
    )
} 

//用户按Start后 isReady=true
function InitProvider({ children }) {
    const auth = useAuth();
    const [isReady, setReady] = useState(false);
    const chatUserValue = { isReady, setReady };
    
    useEffect(()=>{
        if(auth.user == null) {
            setReady(false); //使登出后重新登录时，可以进入设置角色的开始界面（LoginPanel2）
        }
    }, [auth.user]); //登出时会触发

    return (
        <initContext.Provider value={chatUserValue}>
            {children}
        </initContext.Provider>
    )
} 

//主provider逻辑模块， 在此将ChatUserProvider分割成三个小模块
//是为了防止在一个 state 更新时，即使组件没有使用这个state 
//而使用其他同 Provider 的 state 也会被连带重渲染
export function ChatUserProvider({ children }) {
    return (
        <InitProvider> 
            <MeProvider> 
                <ThemProvider> 
                    {children}
                </ThemProvider>
            </MeProvider>
        </InitProvider>
    )
} 

// ====== 自定义context hook =============
/**
 * @description ChatUserProvider 的子组件可以使用 useChatUser() 获得ChatUserProvider的状态
 * @return {{ isReady:boolean, setReady:Function }}
 */
export function useChatUser() {
    return useContext(initContext);
}

/**
 * @description ChatUserProvider 的子组件可以使用 useMe() 获得当前社交用户的hook
 * @return {{ me:object, setPhoto:Function, setName:Function }}
 */
export function useMe() {
    return useContext(meContext);
}

/**
 * @description ChatUserProvider 的子组件可以使用 useThem() 获得其他社交用户的hook
 * @return {{ them:object }}
 */
export function useThem() {
    return useContext(themContext);
}