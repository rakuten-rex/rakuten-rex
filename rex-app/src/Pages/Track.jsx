import React from 'react';
import Track from '@rakuten-rex/track/Track';
import TrackItem from '@rakuten-rex/track/TrackItem';

export default function Index() {
  return (
    <>
      <h1>Track</h1>
      <h2>5 Steps - Default</h2>
      <Track>
        <TrackItem title='Enter your information' status='visited' />
        <TrackItem title='Register service for use' status='visited' />
        <TrackItem title='Confirmation' status='current' />
        <TrackItem title='ID/Password input' />
        <TrackItem title='Completion' />
      </Track>
      <h2>4 Steps</h2>
      <Track maxsteps='4'>
        <TrackItem title='Enter your information' status='visited' />
        <TrackItem title='Confirmation' status='current' />
        <TrackItem title='ID/Password input' />
        <TrackItem title='Completion' />
      </Track>
      <h2>3 Steps</h2>
      <Track maxsteps='3'>
        <TrackItem title='Enter your information' status='visited' />
        <TrackItem title='Confirmation' status='current' />
        <TrackItem title='Completion' />
      </Track>
      <h2>Theme</h2>
      <Track maxsteps='3' style={{
        "--rex-track-line-color": "#cccccc",
        "--rex-track-theme-color": "#bf0000",
        "--rex-track-text-color": "#9c9c9c",
        "--rex-track-circle-background": "#eeeeee"
      }}>
        <TrackItem title='Enter your information' status='visited' />
        <TrackItem title='Confirmation' status='current' />
        <TrackItem title='Completion' />
      </Track>
    </>
  );
}
