# Data Security

import Content from '../reuse-content/_all-features.md';

<Content />

As we embrace cloud services, the safety of our data has become a top priority. This concern not only relates to the regulatory compliance of enterprise data services, but more crucially, to the protection of vital business data. Recognizing this, TapData was designed with security at its core. From architectural design, technical implementation, and operational procedures, strict safeguards have been put in place, ensuring a safe and secure user experience.

## Reliable Infrastructure

- **Secure Operational Environment**: TapData Cloud utilizes Google Cloud as its preferred deployment platform. All core components operate within a Virtual Private Cloud (VPC), isolated from the public internet. Rigorous firewall controls further secure both inbound and outbound traffic, ensuring heightened data security.
- **Automated Cloud Deployment**: In the TapData Cloud technical framework, the Agent plays a pivotal role, primarily handling data synchronization tasks. Users are offered the convenience of one-click deployment of the Agent on platforms like Google Cloud and Alibaba Cloud, reducing external vulnerabilities and guaranteeing robust security.

<details><summary>What is the role of  Agent?</summary>
The TapData Agent plays a crucial role in data synchronization, handling data heterogeneity, and supporting data transformation scenarios. It is responsible for extracting data from the source system, performing necessary processing, and transmitting it to the target system. The TapData Agent is centrally managed by TapData Cloud.
</details>

---



## Systematic Security Design

### Account Access Control

Multiple layers of security checks are employed, including login frequency, geographical location, and device type. Any unconventional login attempts will trigger an alarm. To further strengthen data security, TapData Cloud has introduced a two-step verification process for critical operations on data sources and tasks.

### Role-Based Access

A comprehensive and adaptable permission management system has been established, based on users and roles. This ensures that only authorized individuals within the organization can access the data. Standard user roles, such as administrators, operation staff, data analysts, and data engineers, are pre-defined. Custom roles can also be created, allowing specific resource permissions to be assigned, ensuring optimal data protection.
> <img src="https://img.shields.io/badge/Tips:%20-Coming%20Soon-40b976" style={{transform:'scale(1.3)'}} />

### User Activity Audit

A robust user activity log and audit system have been implemented. All user operations are meticulously recorded, providing the ability to review past actions and enhance transparency, as well as identifying potential threats.

### End-to-End Encryption

At TapData Cloud, data protection is paramount. We have implemented end-to-end encryption to comprehensively safeguard your data sources and task configurations. This ensures that only authorized users can access and modify the data, effectively eliminating breach risks.

### Data Masking Display

Sensitive details, whether usernames, passwords, authentication data, or database addresses, undergo a masking process in TapData Cloud. No matter the interface, whether it's input fields, monitoring pages, dashboards, or logs, sensitive details are never fully displayed, ensuring the utmost protection of privacy.

Moreover, administrators have the prerogative to tag certain fields as sensitive. Once configured, these fields will remain inaccessible across all interfaces. This includes data preview, data exploration, and log displays. To enhance security, any modifications to sensitive fields require administrator rights and a two-step verification process. All related actions are documented in immutable audit logs.

> <img src="https://img.shields.io/badge/Tips:%20-Coming%20Soon-40b976" style={{transform:'scale(1.3)'}} />

---



## Comprehensive Data Protection

To guarantee utmost protection at every step, TapData Cloud employs several crucial measures:

### Data Storage and Cleaning

Clear guidelines have been established for the usage and retention of user data. Temporary data, encrypted using the AES algorithm, is purged according to established rules, ensuring optimal protection in various scenarios:

- Only necessary table schema data is retained during model loading and inference. Once the data source is deleted, this information is promptly purged.
- In case of task anomalies, related error logs are made available for review. However, these logs are permanently deleted after the task's removal or at the maximum of 7 days.
- During data previews, certain data temporarily passes through the computation engine but is immediately discarded upon preview completion.

### Data Source Security Measures

- All database and API credentials you provide are encrypted stringently. Apart from the application, no one has access to these details.
- Support for SSL or SSH tunnel encrypted connections to data sources, safeguarding data connectivity and transmission. HTTPS encrypted connections to SaaS-type data sources are also available.
- Both fully managed and semi-managed [Agent deployment modes](../billing/purchase.md) are available to meet diverse data transfer requirements:
    - *Semi-Managed:* All of your data, whether in its raw form or has been processed, is stored and managed within your private environment exclusively. The Agent handles data orchestration and processing tasks in-house, ensuring that no data is ever uploaded to TapData Cloud.
    - *Fully Managed:* During any task execution, your data only travels between the source database, the Agent, and the destination database. At no point will data be uploaded to TapData Cloud. The Agent provides a securely managed external service address, allowing you to bolster security measures through database whitelists or specific firewall rules.

### Account Password Security Policies

TapData Cloud employs industry-standard one-way hashing to store user credentials. Each user's data utilizes a unique hash key, which is stored separately, ensuring that all data operations are thoroughly audited to prevent potential breaches.

### Data Transfer and Processing Safety

By default, TapData Cloud's data processing bypasses third-party components. Except for reading and writing data sources, all operations occur in-memory. When the database log cache feature is activated, some source database events are encrypted and stored locally in the Agent's directory. At no point is this data transferred to any location other than the target database.

---



## Rigorous Operational Standards

To ensure every operational facet meets the highest security standards, TapData Cloud has adopted the following rigorous measures:

### Operational Auditing

To maximize data security, TapData Cloud keeps real-time logs and monitors all internal operations related to user data. The development team adheres to strict procedural and permission guidelines, ensuring detailed logging of any interaction with user data. Furthermore, all communications with customers, whether via email or online chat, are secured using robust password policies, two-factor authentication, and undergo stringent security reviews by TapData Cloud's internal teams.

### Compliance with Security Standards

TapData Cloud remains steadfast in its commitment to adhere to all relevant laws, regulations, and standards, ensuring the services rendered always uphold the highest security benchmarks.

### Code Security Review

Every feature of TapData Cloud undergoes rigorous vulnerability checks. Automated tools are employed to guarantee a zero-vulnerability standard, forming the cornerstone of product releases and ensuring the utmost code security.

Facing the evolving threats and challenges of the digital realm, TapData Cloud's security team remains ever-vigilant, consistently monitoring, assessing, and enhancing security protocols. We're dedicated to providing a trusted and secure data integration and management platform, ensuring your full confidence in TapData Cloud's services.