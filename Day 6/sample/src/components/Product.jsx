import React from "react";

const Product = ({name = "kirit"}) => {
    return(
        <div>
            <h1>This is {name} product page</h1>
        </div>
    )
}
export default Product