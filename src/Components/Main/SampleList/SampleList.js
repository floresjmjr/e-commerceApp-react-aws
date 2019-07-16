import React from 'react'

import './SampleList.css';

const sampleList = () => {

  const randomStrArr = 'Aenean ultricies mattis nisl, eu varius elit mattis et. Mauris pellentesque nulla id commodo blandit. Ut eget vehicula nulla, non posuere erat. Duis blandit, magna non mattis luctus, nisi lectus malesuada tortor, quis varius elit nulla ultrices leo. Mauris non purus eget nunc suscipit facilisis efficitur nec nibh. Sed tempor, purus pulvinar mattis commodo, metus eros posuere mauris, rutrum cursus risus elit ac sapien.'.toLowerCase().replace(/\.|,/g, '').split(' ')

  const generateRandomWords = (length) => {
    let collection = [];
    var i;
    for(i = 0; i < length; i += 1) {
      let word = randomStrArr[Math.floor(Math.random()*(randomStrArr.length - 1))]
      word = word[0].toUpperCase() + word.slice(1)
      collection.push(word)
    }
    let words = collection.join(' ')
    return words[0].toUpperCase() + words.slice(1);
  }

  const sampleList = [1,2,3,4].map((item)=>{

    return (
      <li key={item}>
        <img src={'https://via.placeholder.com/175x200'} alt='a'/>
        <h6 className='SampleTitle'>{generateRandomWords(3)}</h6>
        <p className='SampleSubtitle'>{generateRandomWords(4)}</p>
      </li>
    )
  })

  return (

    <ul className='FrontSamplesList'>
      {sampleList}
    </ul> 
  )
}



export default sampleList;