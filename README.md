# Use *Azure DevOps Projects* to build and deploy a containerized Nodejs application 
This project details the steps for deploying a *Express.js* application using the *Azure DevOps Project* feature.  This application exposes a simple REST API for manipulating (CRUD) *Purchase Orders* and the purchase order documents (JSON messages) are persisted in a *Azure CosmosDB* No-SQL database.

With Azure DevOps Project, there are two options for building and deploying a containerized application 
1.  The application container can be built and deployed to run in [Azure App Service on Linux](https://docs.microsoft.com/en-us/azure/app-service/containers/app-service-linux-intro)
2.  The application container can be built and deployed to AKS [Azure Kubernetes Service](https://azure.microsoft.com/en-us/services/kubernetes-service/).  This option uses DevOps CI/CD workflows in VSTS to build and deploy the containerized application.  Helm charts are used to deploy the application on AKS.  All VSTS and Kubernetes resources are automatically created by Azure DevOps Project.  We will examine both of these options for deploying our containerized application on Azure.

### A] Deploy application to *Azure App Service on Linux*
This project details the steps for deploying a containerized Nodejs application on AKS using Dev Ops Projects. 
