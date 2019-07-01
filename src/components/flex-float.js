import React from 'react'
import styled from 'styled-components'

const FlexFloat = ({className}) => {
  return (
    <div {...{className}}>
      <div>FIRST</div>
      <span>
        <div className='floatLeft'>Float</div>
        <div className='floatRight'>Float</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, cum quo omnis quam nostrum unde dignissimos voluptatibus earum ratione, dolor atque neque illum sapiente nobis ipsam quaerat modi nesciunt expedita voluptas? Deserunt aut iure error maxime quidem, praesentium pariatur quasi omnis sed nobis! Quisquam amet a deserunt saepe aperiam iste, accusantium facere rem corporis maiores libero et minus recusandae iure vitae voluptatem, alias minima optio, sed doloribus ea ad dolores quos. Consequatur id rem impedit, optio quos fugiat eius doloremque perferendis similique neque eaque minus voluptatum sit nihil quam numquam. Doloribus natus tenetur est esse, accusamus impedit sed dolore eveniet ducimus ex atque quo eum earum eius officia error, incidunt mollitia velit. Repellat unde porro earum quisquam magnam dolore odio tenetur temporibus quibusdam eos dolorem possimus fugiat illum animi excepturi sint, sequi inventore et laudantium ipsam! Sunt nisi, tenetur ipsa repudiandae saepe culpa consequuntur asperiores! Perspiciatis cumque, voluptate, maiores laborum veniam nihil asperiores accusantium non libero error reprehenderit quis odio officia quibusdam incidunt at perferendis, maxime nam voluptas rem numquam dolore. Tempore necessitatibus vel odit rerum? Laboriosam, eos eius esse nulla soluta, doloribus, quam placeat repellat laudantium quo reprehenderit tempore. Tempore sint assumenda rerum ut accusamus! Possimus veritatis ex vero.
      </span>
      <div>LAST</div>
    </div>
  )
}


export default styled(FlexFloat)`
  display: flex;
  justify-content: space-between;
  gap: 1em 2em;   // see: https://wiki.selfhtml.org/wiki/CSS/Tutorials/Flexbox/Ausrichtung#Spalten_.28gutter.29_mit_gap

  .floatLeft {
    float: left;
    margin-right: 2rem;
    margin-bottom: 1rem;
    background: yellow;
  }

  .floatRight {
    float: right;
    margin-left: 2rem;
    margin-bottom: 1rem;
    background: yellow;
  }  
`