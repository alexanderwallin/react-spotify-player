
/**
 * Spotify player iframe widget
 *
 * @author Alexander Wallin <office@alexanderwallin.com>
 * @see https://developer.spotify.com/technologies/widgets/spotify-play-button/
 */

import React from 'react';

// Dimension prop type
const dimensionPropType = React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]);

// Size presets, defined by Spotify
const sizePresets = {
  large: {
    width: 300,
    height: 380,
  },
  compact: {
    width: 300,
    height: 80,
  },
};

/**
 * SpotifyPlayer class
 */
const SpotifyPlayer = React.createClass({

  // ------------------------------------------------------
  // Component specs & lifecycle
  // ------------------------------------------------------

  propTypes: {

    // Spotify URI
    uri: React.PropTypes.string.isRequired,

    // Size as either a preset or as custom dimensions
    size: React.PropTypes.oneOfType([
      React.PropTypes.oneOf(['large', 'compact']),
      React.PropTypes.shape({
        width: dimensionPropType,
        height: dimensionPropType,
      }),
    ]),

    // View
    view: React.PropTypes.oneOf(['list', 'coverart']),

    // Theme
    theme: React.PropTypes.oneOf(['black', 'white']),
  },

  getDefaultProps() {
    return {
      size: 'large',
      view: 'list',
      theme: 'black',
    };
  },

  // ------------------------------------------------------
  // Render
  // ------------------------------------------------------

  render() {
    const { uri, view, theme } = this.props;
    let { size } = this.props;

    if (typeof size === 'string') {
      size = sizePresets[size];
    }

    return (
      <iframe
        className="SpotifyPlayer"
        src={`https://embed.spotify.com/?uri=${uri}&view=${view}&theme=${theme}`}
        width={size.width}
        height={size.height}
        frameBorder="0"
        allowTransparency="true"
      />
    );
  },

});

export default SpotifyPlayer;
