---
templateKey: case-study
path: /ashoka
title: Ashoka
image: /img/ashoka.jpg
date: 2016-03-02T18:30:00.000Z
homepage: true
customer:
  name: Ashoka
  profile: >-
    Ashoka is the one of the largest networks of social entrepreneurs worldwide,
    with over 3,000 Ashoka Fellows in 70 countries creating large-scale impact
    through new innovations.  Ashoka pioneered the field of social
    entrepreneurship and has built multi-level stakeholders across the world who
    increasingly look to entrepreneurial talent and new ideas to solve social
    problems
  web: 'http://www.ashoka.org/'
casestudy:
  benefits: |-
    * Extensible search
    * Higher security
    * Better performance
    * Support for related objects
    * Good quality code
  challenges: |-
    * Code extensibility in SOQL is constrained
    * Higher code complexity leading to readability and maintainability issues
    * No support for related object search
    * No possibility of extending search functions to other objects
    * Query injection
    * Governor limits are not leveraged
  description: >-
    Ashoka’s instance has a medium size code base and data, with about 500
    users. finiteloop performed technical review, static code analysis, and
    implemented a new design and code.
  focus: |-
    * Technology review
    * Performance optimisation
    * Static code analysis
  solution: |-
    * Meta data based search implementation
    * Dynamic SOQL construction with adequate performance
    * Support for related object search
    * Security and performance quality enforced
    * Very high test coverage
  technology: |-
    * Salesforce
    * Static code analyzers
---
Ashoka is migrating the recruiting functionality to Financial Force HCM application (FFHCM). The candidate search tool provided by FFHCM has few limitations. There is an existing custom search tool  by a third party which need to be optimised for performance and code quality.

Ashoka’s instance has a medium size code base and data, with about 500 users.  finiteloop performed technical review, static code analysis, and implemented a new design and code.
