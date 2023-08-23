// pages/about.js
import React from 'react'
import Head from 'next/head'
import styles from './about.module.css'

export default function About() {
    return (
        <div className="container mx-auto px-4">
            <Head>
                <title>About</title>
            </Head>
            <div className="container">
                <h1 className={styles.h2}>About</h1>
                <section className={styles.section1}>
                    <h2>Why I started cricket blogging</h2>
                    <p className={styles.p}>
                        I have always been passionate about cricket since I was a kid. I
                        used to watch every match on TV and follow the scores and stats on
                        the internet. I also played cricket with my friends and joined a
                        local club. Cricket is more than just a sport for me, it is a way of
                        life.
                    </p>
                    <p className={styles.p}>
                        I started cricket blogging in 2020 as a hobby and a way to express
                        my opinions and analysis on the game. I wanted to share my insights
                        and knowledge with other cricket fans and enthusiasts. I also wanted
                        to learn from others and improve my skills as a writer and a
                        commentator.
                    </p>
                    <p className={styles.p}>
                        My blog covers various topics related to cricket, such as match
                        previews and reviews, player profiles, team rankings, records,
                        trivia, news, and more. I also write about the history and culture
                        of cricket, and how it influences society and politics. I try to be
                        unbiased and objective in my writing, but I also have my own
                        preferences and favorites.
                    </p>
                </section>
                <section className={styles.section2}>
                    <h2>How I create my cricket blog posts</h2>
                    <p className={styles.p}>
                        I create my cricket blog posts using a combination of research,
                        observation, and creativity. I use various sources of information,
                        such as websites, books, magazines, podcasts, videos, and social
                        media, to gather facts and data about cricket. I also watch live
                        matches and highlights to observe the performance and behavior of
                        the players and teams.
                    </p>
                    <p className={styles.p}>
                        I use my own words and style to write my blog posts. I try to make
                        them informative, engaging, and entertaining for the readers. I use
                        headings, subheadings, bullet points, tables, charts, images, and
                        other elements to organize and present my content in a clear and
                        attractive way. I also use humor, anecdotes, quotes, and examples
                        to spice up my writing and make it more personal.
                    </p>
                    <p className={styles.p}>
                        I proofread and edit my blog posts before publishing them. I check
                        for spelling, grammar, punctuation, and formatting errors. I also
                        check for accuracy, consistency, clarity, and coherence of my
                        content. I use tools like [Grammarly] and [Hemingway] to help me with this process.
                    </p>
                </section>
            </div>
        </div>
    )
}
