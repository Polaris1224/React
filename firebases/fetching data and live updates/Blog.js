import {useState, useRef, useEffect, useReducer} from 'react' ;

import { collection, addDoc, doc } from "firebase/firestore";
//Used for getting all the documents
import { query, getDocs, onSnapshot } from "firebase/firestore";
import { db } from '../firebaseInit';

function blogsReducer(state, action){
    switch(action.type){
        case 'ADD':
            return [action.payload, ...state] ;
        case 'REMOVE':
            return state.filter((blog, index) => index !== action.payload) ;
        default:
            return [] ;
    }
}

export default function Blog(){
    const [formData, setFormData] = useState({title: "", content: ""}) ;
    const [blogs, dispatch] = useReducer(blogsReducer, [])

    useEffect(() => {
        //This method will not fetch the real time data.For that we use onSnapShot
        // async function fetchData() {
        //     const q = query(collection(db, "blogs")) ;
        //     const querySnapshot = await getDocs(q);
        //     const blogs = querySnapshot.docs.map((doc) => {
        //         return  {
        //             id: doc.id,
        //             ...doc.data()
        //         }
        //     })
            
        //     blogs.forEach((blog) => {
        //         dispatch({type: "ADD", payload: {title: blog.title, content: blog.content}}) ;
        //     })
        // }

        // fetchData() ;

        //onSnapShot creates the listener.
        const unsub = onSnapshot(collection(db, "blogs"), (snapshot) => {
            const blogs = snapshot.docs.map((doc) => {
                return  {
                    id: doc.id,
                    ...doc.data()
                }
            })
                
            blogs.forEach((blog) => {
                dispatch({type: "ADD", payload: {title: blog.title, content: blog.content}}) ;
            })
        }) ;

    }, []);

    async function handleSubmit(e) {
        e.preventDefault() ;
        //dispatch({type: 'ADD', payload: {title: formData.title, content: formData.content}}) ;

        const docRef = doc(collection(db, "blogs")); 
        await addDoc(collection(db, "blogs"), {
            title: formData.title,
            content: formData.content,
            createdAt: new Date()
        });

        setFormData({title: "", content: ""}) ;
    }

    function removeBlog(index){ 
        dispatch({type: 'REMOVE', payload: index}) ;
    }

    const titleRef = useRef(null) ;

    useEffect(() => {
        titleRef.current.focus() ;
    }, []) ;

    useEffect(() => {
        if(blogs.length > 0) {
            document.title = blogs[blogs.length - 1].title ;
        }else {
            document.title = "Blogging App" ;
        }

    }, [blogs]) ;
    
    return(
        <>
        <h1>Write a Blog!</h1>
        <div className="section">
            <form onSubmit={handleSubmit}>
                <Row label="Title">
                    <input className="input" 
                           value={formData.title} 
                           onChange={(e) => setFormData({title: e.target.value, content: formData.content})} 
                           placeholder="Enter the Title of the Blog here.."
                           ref = {titleRef}
                           required
                           />
                </Row >

                <Row label="Content">
                    <textarea className="input content" 
                              value={formData.content} 
                              onChange={(e) => setFormData({title: formData.title, content: e.target.value})} 
                              placeholder="Content of the Blog goes here.." 
                              required
                              />
                </Row >

                <button className = "btn">ADD</button>
            </form>
                     
        </div>

        <hr/>

        <h2> Blogs </h2>
        {blogs.map((blog, index) => (
            <div className="blog" key={index}>
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>

                <div className='blog-btn'>
                    <button className="btn remove" onClick={() => removeBlog(index)}>Delete</button> 
                </div>
            </div>
        ))}

        </>
        )
    }

//Row component to introduce a new row section in the form
function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
