module.exports = async (pluginConfig, { nextRelease: { version }, logger }) => {
  const varName = pluginConfig.varName || "nextRelease";
  const isOutput = pluginConfig.isOutput || false;
  const command = `##vso[task.setvariable variable=${varName};isOutput=${isOutput};]${version}`;
  // logger.log(`Setting version ${version} to the env var ${varName}`);
  logger.log(`Running command: ${command}`);

  console.log(
    `##vso[task.setvariable variable=${varName};isOutput=${isOutput}]${version}`
  );
  // process.stdout.write(command);
  // console.log(command);
};
