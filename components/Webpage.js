const React = require('react');
const FillerText = require('./FillerText');

class Webpage extends React.Component {
  render() {
    return (
      <page>
        <title> The world's coolest webpage </title>
        <FillerText />
        <FillerText />
      </page>
    );
  }
}

module.exports = Webpage;
