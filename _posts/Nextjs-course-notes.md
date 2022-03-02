---
title: 'Next.js Course Notes'
excerpt: 'Here are some quick notes from Next.js course.'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
camera: 
thumbnails2: 
tags: 
  - testingtag
  - atesttag
  - tag6
date: '2022-02-01T03:35:07.322Z'
author:
  name: 'Simon'
  picture: '/assets/blog/authors/simonface.jpg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
---

## What is Next.js
It's a production-ready framework built on top of the popular library, ReactJS. Next.js gives developers tools that are commonly used in most React projects.

## Key Feature: Server-side rendering
- Automatic page pre-rendering - great for SEO and initial load performance.
- Blends client-side and server-side: fetch data on the server and render finished pages.

## Key Feature: File-based Routing
- No need to write code for routes using react-router-dom library
- Define pages and routes with files and folders instead of code.

## Key Feature: Fullstack Capabilities
- Easy to add backend code (NodeJS)
- Can store data, fetch data, authentication can be done inside a Next.js project (without having to create separate server-side code)

## Starting a Next.js Project
- Must have Node.js installed
- run the command `npx create-next-app my-app`

## Section 3 - Pages and File-based Routing

```js
const numbers = [25,50,75];

const lessThan50 = numbers.filter( num => {
  return num > 50;
})

const promise = new Promise();

promise.then();
```

Remember we call filter by passing it a callback function that determines whether or not a given item should be filtered or included. In this case, the condition is character.mass > 100. So, our filter will look like this.


