import React from 'react'
import Navbar from '../components/Navbar'

export const SubmitFit = () => {
  return (
    <div className="wrapper">
    <Navbar/>
    <div className="submitoutfit-container">
    <form>
    <h1>Submit an outfit</h1>
    <label>Upload your fit here: <input type="file" accept="image/*"/></label>
    <label>Do you want your fit to be added to the upcoming competition? 
        <select name="Yes">
            <option value="y">Yes</option>
            <option value="n">No</option>
        </select>
    </label>
    <label>Do you want to use this picture in a fit battle?
        <select name="Yes">
            <option value="y">Yes</option>
            <option value="n">No</option>
        </select>
    </label>
    <label> Tell us about your outfit:
        <textarea className="fit-desc" cols="100" rows="10"  placeholder="What are you wearing?"/>
    </label>
    <button className="submit">Submit</button>
    </form>
    </div>
    </div>
  )
}
