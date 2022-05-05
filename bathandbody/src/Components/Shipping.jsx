import React from 'react'
import "./shipping.css"
export const Shipping = () => {
  return (
    
    <>
      <div className='shipping-main-div'>
          <div className='shipping-left-div'>
              <p className='shipping-p-div'>SHIPPING ADDRESS</p>
              <form className='shipping-form-div'>
                  <label className='shipping-label-div'><span className='shipping-span-div'>*</span>First Name</label> <br />
                  <input type="text" className='shipping-input-box'/>
                  <br />
                  <label className='shipping-label-div'><span className='shipping-span-div'>*</span>Last Name</label> <br />
                  <input type="text" className='shipping-input-box'/>
                  <br />
                  <label className='shipping-label-div'><span className='shipping-span-div'>*</span>Address 1</label> <br />
                  <input type="text" className='shipping-input-box'/>
                  <br />
                  <label className='shipping-label-div'>Address 2</label> <br />
                  <input type="text" className='shipping-input-box' />
                  <br />
                  <label className='shipping-label-div'><span className='shipping-span-div'>*</span>Country</label> <br />
                   <select className='shipping-select-tag'>
                      <option value="India">India</option>
                      <option value="United State">United State</option>
                   </select><br />
                  <label className='shipping-label-div'><span className='shipping-span-div'>*</span>City</label> <br />
                  <input type="text"  className='shipping-input-box'/>
                  <br />
                  <label className='shipping-label-div'><span className='shipping-span-div'>*</span>State</label> <br />
                  <select className='shipping-select-tag'>
                      <option value="">Select...</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Utter Pradesh">Utter Pradesh</option>
                      <option value="Panjab">Panjab</option>
                      <option value="Madha Pradesh">Madha Pradesh</option>
                      <option value="Gujrat">Gujrat</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Rajstan">Rajstan</option>
                      <option value="Dehli">Dehli</option>
                   </select><br />

                  <label className='shipping-label-div'><span className='shipping-span-div'>*</span> ZIP Code</label> <br />
                  <input type="text"  className='shipping-input-box' />
                  <br />
                  <label className='shipping-label-div'><span className='shipping-span-div'>*</span>Phone</label> <br />
                  <input type="text"  className='shipping-input-box'/>
                  <br />

                  <input className='shipping-button' type="submit" value="submit" />
              </form>
          </div>
          <div>
            
          </div>
      </div>
    </>
  )
}
