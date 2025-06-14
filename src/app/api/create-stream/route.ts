import { NextResponse } from 'next/server';
import { Mux } from '@mux/mux-node';

const mux = new Mux({
  tokenId: process.env.MUX_TOKEN_ID!,
  tokenSecret: process.env.MUX_TOKEN_SECRET!,
});

export async function POST() {
  try {
    const stream = await mux.video.liveStreams.create({
      playback_policy: ['public'],
      new_asset_settings: { playback_policy: ['public'] },
    });

    return NextResponse.json({
      streamKey: stream.stream_key,
      playbackId: stream.playback_ids?.[0]?.id,
      streamId: stream.id,
    });
  } catch (err: unknown) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to create stream' }, { status: 500 });
  }
}