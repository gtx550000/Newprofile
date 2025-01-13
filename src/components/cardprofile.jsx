import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Card =()=>{
    
        return (
            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
            <div class="col-md-6 p-lg-5 mx-auto my-5">
              <h1 class="display-3 fw-bold">Hi it me Korn🐱</h1>
              <h3 class="fw-normal text-muted mb-3">" Create whatever you want by hand. "</h3>
              <div class="d-flex gap-3 justify-content-center lead fw-normal">
                <a class="icon-link" href="https://www.notion.so/My-Life-179d755927f480948b42dbab1f529b55">
                notion me
                  <svg class="bi"><use xlink:href="#chevron-right"/></svg>
                </a>
               
              </div>
            </div>
            <div class="product-device shadow-sm d-none d-md-block"></div>
            <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
          </div>
         
           
        )
    
}

export default Card