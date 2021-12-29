### Contributing

## General Workflow

- Fork the repo
- Cut a namespaced feature branch from main
  - bug/...
  - feat/...
  - test/...
  - doc/...
  - refactor/...
- Make commits to your feature branch. Use proper commit convention
  - https://www.conventionalcommits.org/en/v1.0.0/#summary
- When you've finished with your fix or feature, Rebase upstream changes into your branch. submit a pull request - https://gitlab.com/your_user_name/cip/-/merge_requests directly to [main](https://gitlab.com/iic-profile/uiapp/cip). Include a description of your changes.
- Your pull request will be reviewed by another developer. If your code reviewer requests you make a change you don't understand, ask them why.
- Fix any issues raised by your code reviewer, and push your fixes as a single new commit.
- Once the pull request has been reviewed and approved, ensure it gets merged.

## Guidelines - Uphold the current code standard:

- Keep your code [DRY][].
- Apply the [boy scout rule][].
- Your pull request is comprised of a single ([squashed][]) commit.

## Checklist: This is just to help you organize your process

- Did I cut my work branch off of master (don't cut new branches from existing feature brances)?
- Did I follow the correct naming convention for my branch?
- Is my branch focused on a single main change?
- Do all of my changes directly relate to this change?
- Did I rebase the upstream master branch after I finished all my work?
- Did I write a clear pull request message detailing what changes I made?
- Did I get a code review?
- Did I make any requested changes from that code review?
- If you follow all of these guidelines and make good changes, you should have no problem getting your changes merged in.
