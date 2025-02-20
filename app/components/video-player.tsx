'use client'
import { useRef, useEffect } from 'react'
import Hls from 'hls.js'

const VideoPlayer = (url: string) => {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            const hls = new Hls()
            hls.loadSource(url)
            hls.attachMedia(videoRef.current)
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                videoRef.current?.play()
            })
        }
    }, [url])

    return (
        <div>
            <video ref={videoRef} controls style={{ width: '100%', height: 'auto' }} />
        </div>
    )
}

export default VideoPlayer