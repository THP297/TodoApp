import React from 'react'
import Complete from './Complete'
export default function CompleteList({completes, restoreTodo}) {
    return (
        completes.map(complete =>
            <Complete key={complete.id} complete={complete} restoreTodo={restoreTodo} />
        )
    )
}
