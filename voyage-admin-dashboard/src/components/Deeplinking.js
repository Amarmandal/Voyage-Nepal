import React from 'react'
import {Button} from 'reactstrap'

function Deeplinking() {
    return (
        <div>
            <Button style = {{backgroundColor: '#52c0b4'}}>
                <a style = {{color: '#000000'}} href = '#'>Click</a>
            </Button>
        </div>
    )
}

export default Deeplinking
