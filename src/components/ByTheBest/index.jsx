import React from 'react'
import Sponsor from '../Sponsor'
import amz from './IMAGE.png'
import megan from './IMAGE (1).png'
import megank from './IMAGE (2).png'
import urban from './IMAGE (3).png'

export default function ByTheBest() {
    const sponsors = [
        {id:1,img:amz,name:'Amazen Corp.',descr:'They has been helping readers, music lovers, and videophiles find quality material.'},
        {id:2,img:megan,name:'Megan Books',descr:'We help physical bookstores manage their overstock to the book inventory.'},
        {id:3,img:megank,name:'Megank',descr:'Bookstore serving up the full spectrum of Black literature and wine black books.'},
        {id:4,img:urban,name:'Urban Store',descr:'We also carry the latest records, issues of all of your favorite comic books.'}
    ]
  return (
    <div>
        <h2>Trusted By The Best</h2>
        <i class="las la-minus"></i>
        <div>
            {
                sponsors.map((sponsor)=> <Sponsor key={sponsor.id} {...sponsor}/>)
            }
        </div>
    </div>
  )
}
