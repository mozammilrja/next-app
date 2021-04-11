// export const getStaticProps = async() =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await res.json();

//   return{
//     props:{ rajas:data }
//   }
// }

// const Ninjas = ({raja}) => {
//   return (
//     <div>
//       <h1>All Raja</h1>
//       {rajas.map(raja =>{
//         <div key={raja.id}>
//           <a>
//             <h3>{raja.name}</h3>
//           </a>
//         </div>
//       })}
//     </div>
//   );
// }
 
// export default Ninjas;
import React from 'react'

function index() {
  return (
    <div>
      <h1>Services</h1> 
      <img  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" />
    </div>
  )
}

export default index
