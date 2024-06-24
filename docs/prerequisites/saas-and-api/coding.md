# Coding

import Content from '../../reuse-content/_enterprise-and-cloud-features.md';

<Content />

Coing provides a one-stop R&D management platform and cloud-native development tools to help enterprises improve R&D management efficiency.

This article serves as a comprehensive guide, providing step-by-step instructions on adding Coding data sources to TapData Cloud, enabling efficient data synchronization and development for your projects.

## Fill in the team name

It can also be obtained intuitively in your coding link, such as: **https://team_name.coding.net/**, then team name is team_name.

## Obtain the access_token of Coding

After filling in your team name, directly click the authorization button, jump to the authorization button, and click the authorization button to automatically return to the page

## Select Incremental Method

- At this moment, there are web hooks supported by Coding, and there are also incremental methods of regular polling on time.
- Of course, if you choose the WebHook mode that saves processor performance, you need to go to Coding to configure the web hook (click the "Generate" button on the right side of "Generate Service URL". Here, You are required to copy and paste the service URL input box from Coding to the WebHook configuration page)

## WebHook

1. Generate a service URL with one click and copy it to the clipboard
2. Enter your team and select the corresponding project
3. After entering the project settings, find the developer options
4. Locate the ServerHook, locate the New ServerHook button in the upper right corner, and click **Create Service Hook**.
5. Enter the Webhook configuration. The first step is to select Http Webhook and click **Next**.
6. Configure the event types we need to listen to.
7. Paste the service URL we first generated on the Create Data Source page here.

## Data description

Any table that supports incremental polling cannot listen to and handle deletion events when executing incremental polling (all modification events are handled as insert events). If specific event differentiation is required, please select the WebHook incremental mode (limited to the SaaS platform, not all tables support webHook incremental)

### Issue table-Issues

- The list contains all types including requirements, iterations, tasks, epics, and custom types.
- The incremental event cannot be known accurately in the polling mode, so it is uniformly treated as a new event.

### Iteration table-Iterations

- Iterations represent all iterations.
- Limited by the OpenAPI of Coding, its polling type increment is overwritten from the beginning, which means that there is an error in the number of incremental events displayed on the monitoring after the task starts, but it will not cause real data errors.

### Project members table-ProjectMembers

This table contains all project members under the currently selected project.