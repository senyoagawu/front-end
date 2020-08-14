import React from 'react'
import styles from './Interests.module.css'

const RadioButton = () => {
  return (
    <section>
    <div>
      <input id="chk01" type="checkbox" />
      <label for="chk01">Lorem ipsum dolor sit amet.</label>
    </div>
    <div>
      <input id="chk02" type="checkbox" />
      <label for="chk02">Eos voluptate, impedit porro iusto.</label>
    </div>
    <div>
      <input id="chk03" type="checkbox" />
      <label for="chk03">Ipsum, distinctio? Odio, delectus, maiores.</label>
    </div>
    <div>
      <input id="chk04" type="checkbox" />
      <label for="chk04">Sint maxime ex nisi iste!</label>
    </div>
    <div>
      <input id="chk05" type="checkbox" />
      <label for="chk05">Quisquam, ipsam autem veniam libero!</label>
    </div>
    <div class="total">
      Total checked: 
    </div>
  </section>
  )
}
export default RadioButton