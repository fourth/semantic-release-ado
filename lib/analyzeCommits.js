module.exports = async (pluginConfig, { lastRelease: { version }, logger }) => {
  const setOnlyOnRelease =
    pluginConfig.setOnlyOnRelease === undefined
      ? true
      : !!pluginConfig.setOnlyOnRelease;

  if (!setOnlyOnRelease) {
    const varName = pluginConfig.varName || "nextRelease";
    const isOutput = pluginConfig.isOutput || false;
    logger.log(`Setting current version ${version} to the env var ${varName}`);
    logger.log(
      `##vso[task.setvariable variable=${varName};isOutput=${isOutput}]${version}`
    );

    // console.log(`##vso[task.setvariable variable=${varName};isOutput=${isOutput}]${version}`)
    process.stdout.write(
      `##vso[task.setvariable variable=${varName};isOutput=${isOutput};]${version}\n`
    );
  }
};
