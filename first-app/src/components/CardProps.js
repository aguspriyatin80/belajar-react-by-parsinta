import React from 'react'
import Card from './Card'

function CardProps() {
    return (
        <div className="py-4">
            <div className="container">
                <h4>The Posts</h4>
                <hr />
                <div className="row">
                    <Card content={{
                        imageUrl: "http://placekitten.com/g/300/200",
                        title: "first post",
                        published: "15 Feb, 2021"
                    }} />

                    <Card content={{
                        imageUrl: "http://placekitten.com/300/200",
                        title: "second post",
                        published: "16 Feb, 2021"
                    }} />
                    <Card content={{
                        imageUrl: "http://placekitten.com/g/300/200",
                        title: "third post",
                        published: "17 Feb, 2021"
                    }} />


                </div>
            </div>
        </div>
    )
}

export default CardProps