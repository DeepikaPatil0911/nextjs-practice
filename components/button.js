import React from 'react'

const button = () => {
   function test1() {
      console.log("fuction1")
   }
   const test2 = () => {
      console.log("const fuction 1")
   }
   test1()
   test2()
   return (
      <div>button</div>
   )
}

export default button