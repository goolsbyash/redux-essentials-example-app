import {useSelector} from 'react-redux';

export default function PostsList() {
    const posts = useSelector(state => state.posts);

    const renderPosts = posts.map((post) => (
        <article>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </article>
    ))
    return(
<section>
    <h2>Posts</h2>
    {renderPosts}
</section>
    )
}