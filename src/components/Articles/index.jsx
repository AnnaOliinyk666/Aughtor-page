import React from 'react'
import ResItem from '../ResItem'
import img1 from './IMAGE.png'
import img2 from './IMAGE1.png'
import img3 from './IMAGE2.png'

export default function Articles() {
    const resourses = [
        {id:1, img:img1, title:'Significant reading has more info number', descr: 'Override the digital divide with additional clickthroughs from DevOps for real-time schemas.', date: 'October 6, 2021'},
        {id:2, img:img2, title:'Many variations of pass majority have suffered', descr: 'Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta test.', date: 'October 6, 2021'},
        {id:3, img:img3, title:'Words which don’t look even slightly believable', descr: 'Podcasting operational change management inside of workflows to establish a framework.', date: 'October 6, 2021'}
    ]
  return (
    <div>
        <h2>Articles & Resources</h2>
        <i class="las la-minus"></i>
        <div>
            {
                resourses.map((res) => <ResItem key={res.id} {...res}/>)
            }
        </div>
    </div>
  )
}
