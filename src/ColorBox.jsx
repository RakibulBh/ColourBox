import('./ColorBox.css')

import Box from './Box'

function getRandColor(colors) {
    const randNum = Math.floor(Math.random() * colors.length)

    return colors[randNum]
}

export default function ColorBox({ colors }) {
    return (
        <div className="ColorBox">
            <div className="row">
                <Box color={getRandColor(colors)} />
                <Box color={getRandColor(colors)} />
                <Box color={getRandColor(colors)} />
                <Box color={getRandColor(colors)} />
                <Box color={getRandColor(colors)} />
            </div>
            <div className="row">
                <Box color={getRandColor(colors)} />
                <Box color={getRandColor(colors)} />
                <Box color={getRandColor(colors)} />
                <Box color={getRandColor(colors)} />
                <Box color={getRandColor(colors)} />
            </div>
            <div className="row">
                <Box color={getRandColor(colors)} />
                <Box color={getRandColor(colors)} />
                <Box color={getRandColor(colors)} />
                <Box color={getRandColor(colors)} />
                <Box color={getRandColor(colors)} />
            </div>
            <div className="row">
                <Box color={getRandColor(colors)} />
                <Box color={getRandColor(colors)} />
                <Box color={getRandColor(colors)} />
                <Box color={getRandColor(colors)} />
                <Box color={getRandColor(colors)} />
            </div>
            <div className="row">
                <Box color={getRandColor(colors)} />
                <Box color={getRandColor(colors)} />
                <Box color={getRandColor(colors)} />
                <Box color={getRandColor(colors)} />
                <Box color={getRandColor(colors)} />
            </div>

        </div>
    )
}