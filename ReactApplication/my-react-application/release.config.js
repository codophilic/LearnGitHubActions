
/*
Semantic release config is stored. It provides some default plugins to use
'@semantic-release/commit-analyzer'->Analyze commit message and will apply convection commit template.
'@semantic-release/release-notes-generator' -> Creates releases notes based on commit description.
'@semantic-release/github' -> Creates the releases on github.

Adding assets which will be taken from workspace of actions.
*/

module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/codophilic/LearnGitHubActions",
    plugins: ['@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator', 
    '@semantic-release/github',
    {
        assets: [
            { path: "build.zip", label: "Build" },
            { path: "coverage.zip", label: "Coverage Report"}
        ]
    }
]
}