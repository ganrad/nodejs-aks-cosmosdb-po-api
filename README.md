# Use *Azure DevOps Projects* to build and deploy a containerized Nodejs application 
This project details the steps for deploying a *Express.js* application using the *Azure DevOps Project* feature.  This application exposes a simple REST API for manipulating (CRUD) *Purchase Orders* and the purchase order documents (JSON messages) are persisted in a *Azure CosmosDB* No-SQL database.

With Azure DevOps Project, there are two options for building and deploying a containerized application 
1.  [Azure App Service on Linux](https://docs.microsoft.com/en-us/azure/app-service/containers/app-service-linux-intro).  Refer to **Section [A]** in order to build and deploy this application to Azure App Service.
2.  [Azure Kubernetes Service](https://azure.microsoft.com/en-us/services/kubernetes-service/).  Refer to **Section [B]** in order to build and deploy this application to AKS.

Both options use DevOps CI/CD workflows in VSTS to build and deploy the containerized application.  The CI/CD workflows are automatically created by Azure DevOps Project.  We will examine both of these options for deploying our containerized application on Azure.

**PREREQUISITES**
1. Deploy an Azure CosmosDB instance
This application uses an *Azure CosmosDB* instance to persist the purchase orders.  Using the Azure Portal, create a new instance of Azure CosmosDB. Click on the 'Keys' blad and take a note (save) of the values for *URI* and *PRIMARY KEY* properties.  See screenshot below.

![alt tag](./images/P-01.PNG)

2. Fork this [GitHub repository](https://github.com/ganrad/k8s-springboot-data-rest) to **your** GitHub account.  After logging in to your GitHub account via a browser, click on **Fork** in the upper right hand corner to get a copy of this project added to your GitHub account.

3. In the file **config.js**, specify the correct values for *config.host* and *config.authkey*.  Substitute the value of **URI** in **config.host** and **PRIMARY KEY** in **config.authkey**

### A] Deploy to Azure App Service on Linux
This project details the steps for deploying a containerized Nodejs application on AKS using Dev Ops Projects. 

### B] Deploy to Azure Kubernetes Service
