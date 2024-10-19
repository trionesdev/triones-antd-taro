module.exports = {
  rules: [
    {
      action: require('@linaria/shaker').default,
    },
    {
      test: /node_modules[\/\\](?!@tarojs)/,
      action: 'ignore',
    },
  ],
}
