import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

type LoaderProps = {
    color: string
    size: number
}

export const Loader: React.FC<LoaderProps> = ({ color, size }) => (
    <div role="alert" aria-busy="true" aria-live="polite">
        <ClipLoader color={color} size={size} />
    </div>
)
