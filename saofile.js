const spawn = require('cross-spawn')

module.exports = {
  prompts() {
    return [
      {
        name: 'name',
        message: 'What is the name of the new project',
        default: this.outFolder,
        filter: val => val.toLowerCase()
      },
      {
        name: 'description',
        message: 'How would you descripe the new project',
        default:  'my grpc ts project'
      },
      {
        name: 'username',
        message: 'What is your GitHub username',
        default: this.gitUser.username || this.gitUser.name,
        filter: val => val.toLowerCase(),
        store: true
      },
      {
        name: 'email',
        message: 'What is your email?',
        default: this.gitUser.email,
        store: true
      },
      {
        name: 'website',
        message: 'The URL of your website',
        default({ username }) {
          return `github.com/${username}`
        },
        store: true
      }
    ]
  },
  actions: [
    {
      type: 'add',
      files: '**'
    },
    {
      type: 'move',
      patterns: {
        gitignore: '.gitignore'
      }
    }
  ],
  async completed() {
    spawn.sync('chmod', ['+x', './generate.sh', './build.sh'], {
      stdio: 'ignore',
      cwd: this.outDir
    })
    this.gitInit()
    this.showProjectTips()
  }
}
