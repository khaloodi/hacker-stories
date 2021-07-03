import React from 'react'

// const List = (props) => {
//   return(
//     <div>
//       {props.list.map(item =>
//         <div key={item.objectID}>
//           <span>
//             <a href={item.url}>{item.title}</a>
//           </span>
//           <span>{item.author}</span>
//           <span>{item.num_comments}</span>
//           <span>{item.points}</span>
//         </div>
//       )}
//     </div>
//   )
// }

// const List = ({list}) => {
//   return list.map(item => <Item key={item.objectID} item={item}/>)
// }

// concise syntac function w/o return statement
const List = ({list}) => list.map(item => <Item key={item.objectID} item={item}/>)

// const Item = ({item}) => {
//   return (
//     <>
//       <span>
//         <a href={item.url}>{item.title}</a>
//       </span>
//       <span>{item.author}</span>
//       <span>{item.num_comments}</span>
//       <span>{item.points}</span>
//     </>
//   )
// }

// concise syntac function w/o return statement
const Item = ({item}) => (
    <div>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </div>
)

export default List