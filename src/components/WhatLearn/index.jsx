import React from 'react'
import TopicItem from '../TopicItem'
import frame from './Frame.png'

export default function WhatLearn() {
    const topics = [
        {id:1,number:"01",descr:'Use HDFS & Map Reduce for storing & analyzing data at scale.'},
        {id:2,number:"02",descr:'Consume streaming data using Spark Streaming, Flink, and Storm.'},
        {id:3,number:"03",descr:'Choose an appropriate data storage technology for your application'},
        {id:4,number:"04",descr:'Analyze non-relational data using HBase, Cassandra, and MongoDB.'}
    ]
  return (
    <div>
        <h2>What Will You Learn?</h2>
        <i class="las la-minus"></i>
        <div>
            <div>
                {
                    topics.map((topic) => <TopicItem key={topic.id} {...topic}/>)
                }
            </div>
            <img src={frame} alt="img" />
        </div>
    </div>
  )
}
