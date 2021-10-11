import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hello there!</p>
            <p> My name is Jacek.</p>
            <p> Throughout my 35 years long life,
                I invested my attention into many diverse and exciting interests,
                hobbies, and passions. Currently I stayed with selected few.</p>
            <p> I write blog posts about programming, society, cooking, and movies.
                If you are also captivated by those topics, be sure to check out my <Link to="/blog">Blog</Link>.</p>
            <p> I placed there my thoughts on a given topic and encourage You to check them out on your own. Some of them are amazing!</p>
            <p>If you want to know about how I was learning to program, be sure to check out <Link to="/way">"Way"</Link>;</p>
            <p> During this time, I've made many applications.
                Some of them are available on my <a href="https://github.com/Jatzek3" target="blank">Github</a> and selected few are on <Link to="/apps">Apps</Link>.</p>
            <p>Don't hesitate to <Link to="/contact">Contact</Link> me if you want to work together!</p>

        </Layout >
    )
}
export default AboutPage