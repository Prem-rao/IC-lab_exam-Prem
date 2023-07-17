import React from 'react'
import {Link} from 'react-router-dom'
import 'boxicons'
const Footer = () => {
  return (
    <div>
        <hr />
      <div>
        <ul className='d-flex justify-content-between list-unstyled m-2'>
            <li>
            © 2023 Traveller, Inc
            </li>
            <li>
                <h3>Traveller</h3>
            </li>
            <ul class="navbar navbar-expand">
            <box-icon type='logo' name='facebook-circle'></box-icon>
            <box-icon name='instagram-alt' type='logo' ></box-icon>
            <box-icon name='twitter' type='logo' ></box-icon>
            </ul>
        </ul>
      </div>
    </div>
  )
}

export default Footer
