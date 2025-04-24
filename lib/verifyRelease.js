module.exports = async (pluginConfig, { nextRelease: { version }, logger }) => {
  const varName = pluginConfig.varName || "nextRelease";
  const isOutput = pluginConfig.isOutput || false;

  logger.log(`Setting version ${version} to the env var ${varName}`);
  logger.log(
    `##vso[task.setvariable variable=${varName};isOutput=${isOutput}]${version}`
  );

  // console.log(`##vso[task.setvariable variable=${varName};isOutput=${isOutput}]${version}`)
  process.stdout.write(
    `##vso[task.setvariable variable=${varName};isOutput=${isOutput};]${version}\n`
  );
};
