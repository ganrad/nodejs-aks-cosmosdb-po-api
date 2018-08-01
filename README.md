# Use *Azure DevOps Project* to deploy a containerized Nodejs (Express.js) application 
This project details the steps for deploying a *Express.js* application using the *Azure DevOps Project* feature in Azure.  *Nodejs* is the application runtime.  The application exposes a simple REST API for manipulating (CRUD) *Purchase Orders* and the order documents (JSON messages) are persisted in a *Azure CosmosDB* No-SQL database.

With Azure DevOps Project, there are two options for building and deploying the containerized application 
1.  The container can be deployed to run in *Azure App Service on Linux*
2.  The container can be deployed to AKS (Azure Kubernetes Service).  This option uses DevOps CI/CD workflows in VSTS to build and deploy the containerized application.  Helm charts are used to deploy the application on AKS.  All VSTS and Kubernetes resources are automatically created by Azure DevOps Project.  We will examine both of these options for deploying our containerized application on Azure.

### A] Deploy application to *Azure App Service on Linux*
This project details the steps for deploying a containerized Nodejs application on AKS using Dev Ops Projects. 
