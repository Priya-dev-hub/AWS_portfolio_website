
# AWS Portfolio Website

A personal portfolio website deployed on AWS to demonstrate cloud hosting and deployment skills.

## Live Website

https://d2oyz6chejt13.cloudfront.net

## Technologies Used

- HTML
- CSS
- JavaScript
- Amazon S3
- Amazon CloudFront

## Architecture

Visitor → CloudFront (HTTPS) → S3 (Website Files)

## Project Overview

This project involves hosting a static portfolio website on Amazon S3 and delivering website content through Amazon CloudFront.

## Key Features

- Static website hosting on AWS
- HTTPS access through CloudFront
- Content delivery using a CDN
- Organized website source code using HTML, CSS, and JavaScript

## Security Considerations

- Keep the S3 bucket private when using CloudFront Origin Access Control.
- Never commit AWS credentials or secrets to GitHub.
- Monitor AWS usage and billing.

## Deployment Steps

1. Create an S3 bucket.
2. Upload the website files.
3. Create a CloudFront distribution.
4. Configure `index.html` as the default root object.
5. Configure secure access between CloudFront and S3.
6. Verify the website through the CloudFront domain.

## Learning Outcomes

- Practiced AWS static website hosting.
- Learned the basics of CloudFront content delivery.
- Explored secure access to S3 origins.
- Practiced documenting a cloud project.

## Author

Priya Maurya
