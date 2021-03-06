import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    PostsData: Array<PostType>
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postElements = props.PostsData.map(post => <Post message={post.message} likes={post.likes}/>)

    return (
        <>
            <div className={s.postsBlock}>
                <h3>my posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
        </>
    );
};

export default MyPosts;