module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}

// yarn add babel-plugin-import --dev 安装好后，按需加载
module.exports = {
  presets: ["@vue/app"],
  plugins: [
    [
      "import",
      // style: true 会加载 less 文件
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }
    ]
  ]
};

