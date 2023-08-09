import React from 'react'

export const ItemListContainer = ({greeting}) => {
  return (
    <div >
        <h1 class="container-fluid  m-1 align-content-around ">
            {greeting}
        </h1>
    </div>
  )
}
