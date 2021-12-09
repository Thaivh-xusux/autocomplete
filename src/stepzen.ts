const completionSpec: Fig.Spec = {
  name: "StepZen",
  description:
    "The StepZen CLI is the primary way to build, deploy and test your schemas on StepZen",
  subcommands: [
    {
      name: "help",
      description: "Display help for StepZen",
      args: {
        name: "command",
        description: "Command name for which to display help",
      },
    },
    {
      name: "login",
      description: "Login to StepZen",
    },
    {
      name: "logout",
      description: "Logout of StepZen",
    },
    {
      name: "start",
      description: "Deploy, watch and develop your API",
      options: [
        {
          name: "--dir",
          description: "The working directory for StepZen assets",
          requiresEquals: true,
          args: {
            name: "path",
            description: "Path to StepZen directory",
            template: "folders",
          },
        },
        {
          name: "--endpoint",
          description: "The folder/endpoint to deploy to",
          requiresEquals: true,
          args: {
            name: "endpoint",
            description: "The StepZen endpoint",
          },
        },
        {
          name: "--port",
          description: "The port number to use for the GraphiQL explorer",
          requiresEquals: true,
          args: {
            name: "port",
            description: "A port to run on",
          },
        },
      ],
    },
    {
      name: "import",
      description: "Import pre-configured schemas to Your API",
      args: {
        name: "name",
        description: "The name of the generator to import",
      },
      options: [
        {
          name: "--dir",
          description: "The directory to which the schema will be imported",
          requiresEquals: true,
          args: {
            name: "path",
            description: "Path to directory",
            template: "folders",
          },
        },
      ],
    },
    {
      name: "list",
      description:
        "List the assets of a specified type that are linked to the StepZen account",
      args: {
        name: "type",
        description: "The type of asset to list (schemas or configurationsets)",
        suggestions: ["schemas", "configurationsets"],
      },
    },
  ],
  // Only uncomment if stepzen takes an argument
  // args: {}
};
export default completionSpec;
