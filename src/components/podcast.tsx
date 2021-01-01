import React, { FC } from "react"
import tw from "twin.macro"

export interface PodcastContent {
  title: string
  level: string
  podcast: string
  tags: string[]
}

interface PodcastProps {
  session: PodcastContent
}

const Podcast: FC<PodcastProps> = ({ session }) => {
  return (
    <div tw="bg-white w-96 h-48 rounded-lg shadow-md p-2 m-1">
      <div
        css={[
          { "padding-bottom": "42.86%" },
          tw`relative h-0 block overflow-hidden`,
        ]}
      >
        <iframe
          title={session.title}
          css={[
            { border: 0 },
            tw`absolute top-0 left-0 bottom-0 h-full w-full`,
          ]}
          allowFullScreen={true}
          src={session.podcast}
          scrolling="no"
          frameBorder={0}
        ></iframe>
      </div>
      <div tw="text-sm text-left font-bold text-blue-600">{session.title}</div>
    </div>
  )
}

export default Podcast
