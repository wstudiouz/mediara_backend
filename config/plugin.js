module.exports = ({ env }) => ({
  "site-publisher": {
    config: {
      owner: "JakhongirUrmonov", // The Github organisation or user
      repo: "mediara_backend", // The name of the repository
      workflow_id: "rebuild.yml", // The workflow_id or filename
      token: env(
        "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"
      ), // The GitHub personal access token with access to trigger workflows and view build status
      branch: "main", // The branch the workflow should be triggered on
    },
  },
});
