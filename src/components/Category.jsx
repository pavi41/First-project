import React, { useState, useEffect } from 'react'


const Category = () => {

    const [post, setPost] = useState(null)
    const [name, setName] = useState('')
    useEffect(() => {
      const demo = async () => {
          const response = await fetch('https://crud-prod-back.herokuapp.com/api')
          const jsonResponse = await response.json()
          console.log(jsonResponse)
          setPost(jsonResponse.data)
      }
      demo()
       
    }, [])

    const handleRemove = (id) => {
        console.log(id)
        const newList = post.filter((item) => item._id !== id)
        setPost(newList)
    }

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleAdd = () => {
        const newList = post.concat({ name, image:"https://5.imimg.com/data5/WT/GN/ZH/SELLER-3722283/pineapple-500x500.jpg", price:1000 })
        setPost(newList)
    }

    return (
        <>
          <input type= 'text' value= {name} onChange= {handleChange} />
          <button type= 'button' onClick= {handleAdd}> Add </button>
            {
                post && post.map((item) => {
                return <ul> <li key= {item._id}>
                   <span> {item.name} </span>
                   <span> <img src= {item.image} alt= '' /> </span>
                   <span> {item.price} </span>
                   <button type= 'button' onClick= {()=>handleRemove(item._id)}>Remove</button>

                  </li>
                  </ul>
                })
            }
           
            
        </>
    )
}

export default Category
