module.exports = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'db', 'mp4'],
    sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx', 'svg'],
  },
};
